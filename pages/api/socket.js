import { Server } from "socket.io";

import { getAIResponse } from "./chatBotModel";
import cors from "cors";
import {AIPrompt} from "./botData";


// Enable CORS
const corsMiddleware = cors();


export default function SocketHandler(req, res) {

    const io = new Server(res.socket.server);

    let connectedClients = 0; // Variable to store the count of connected clients
    // Function to get the count of connected clients
    const getConnectedClientsCount = () => {
        return connectedClients;
    };


    let userResponses = "";
    let serverResponses = "";

    process.on('warning', e => console.warn(e.stack))

    io.on("connection", (socket) => {

        connectedClients++; // Increment the count when a new client connects
        console.log(`CONNECTION STARTED: ${getConnectedClientsCount()} socket is being used`);

        socket.emit("send-message", "hello");


        socket.on('user-message', async (userMessage) => {
            userResponses += `${userMessage}, `;

            let additionalAIPrompt = `\n[ Here are the previous responses by the user, use it IF you need to get context from the conversation to create context : ${userResponses} ]`;
            additionalAIPrompt += `\n[ Here are the previous responses by the server, use it IF you need to get context from the conversation or to avoid giving duplicate response (places, addresses, locations, etc.) so you can generate new information : ${serverResponses} ]`;

            const message = await getAIResponse(AIPrompt + userMessage + additionalAIPrompt);

            serverResponses += message.content;

            console.log(serverResponses);

            socket.emit("server-message", message.content);
        });

        socket.on("disconnect", () => {
            connectedClients--; // Decrement the count when a client disconnects
            console.log(`CONNECTION ENDED: ${getConnectedClientsCount()} socket is being used`);

        });
    });

    // Apply the CORS middleware to the request and response
    corsMiddleware(req, res, () => {
        res.socket.server.io = io;
        res.end();
    });
}

