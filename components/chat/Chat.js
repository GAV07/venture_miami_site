import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Input from './Input';
import BotMessageBox from './BotMessageBox';
import UserMessageBox from './UserMessageBox';
import ChatNavbar from './ChatNavbar';
import {BsFillChatDotsFill} from "react-icons/bs"
import {getAIResponse} from "../../pages/api/chatBotModel";
import {AIPrompt} from "../../pages/api/botData.js"

let socket;
const Chat = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'bot',
            response: 'Hello. My name is Mimi. How can I assist you today?',
        },
    ]);

    // uncomment to use sockets
/*        useEffect( () => {

            socketInitializer(); // initializes the socket

            // Handle disconnection on component unmount
            const handleDisconnect = () => {
                socket.emit('disconnect');
            };

            window.addEventListener('beforeunload', handleDisconnect);

            // Clean up the socket connection on component unmount
            return () => {
                window.removeEventListener('beforeunload', handleDisconnect);
                // socket.disconnect();
            };
        }, []);*/


        // uncomment to use sockets
/*    async function socketInitializer() {
        await fetch("/api/socket");

        socket = io();

    }*/

    const sendMessageNoSocket = async (userMessage)=>{

        setIsLoading(true);

        const newUserMessage = {
            role: 'user',
            response: userMessage,
            time: new Date().toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true }),
        };
        setMessages((prevMessages) => [...prevMessages, newUserMessage]);


        let additionalAIPrompt = `\n[ Here are the previous responses by the user and the you(the assistant), use it IF IF you need to get context from the conversation or to avoid giving duplicate response (places, addresses, locations, etc.) so you can generate new information : ${messages} ]`;
        additionalAIPrompt += `\nYou can identify the user with the JSON that has the property 'user' and the assistant (you) with the property 'bot'`;

        const serverMessageResponse = await getAIResponse(AIPrompt + userMessage + additionalAIPrompt);
        const serverMessage = serverMessageResponse.content;

        let parsedJSON = JSON.parse(serverMessage);
        parsedJSON.role = 'bot';
        parsedJSON.time = new Date().toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true });
        setMessages((prevMessages) => [...prevMessages, parsedJSON]);
        setIsLoading(false);


    }
    // uncomment to use sockets
/*    const sendMessage = (userMessage) => {
        setIsLoading(true);

        const newUserMessage = {
            role: 'user',
            response: userMessage,
            time: new Date().toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true }),
        };
        setMessages((prevMessages) => [...prevMessages, newUserMessage]);

        const socket = io();
        socket.emit('user-message', userMessage);

        socket.on('server-message', (serverMessage) => {
            let parsedJSON = JSON.parse(serverMessage);
            parsedJSON.role = 'bot';
            parsedJSON.time = new Date().toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true });
            setMessages((prevMessages) => [...prevMessages, parsedJSON]);
            setIsLoading(false);
        });
    };*/

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div className="fixed bottom-4 right-4 z-[150]">
            {showChat && (
                <>
                    <ChatNavbar />
                    <div className="bg-white p-4 shadow h-[500px] overflow-y-auto w-[500px] sm:max-w-[500px]">
                        {messages.map((message, index) => {
                            if (message.role === 'bot') {
                                return (
                                    <BotMessageBox
                                        key={index}
                                        responseText={message.response}
                                        places={message.places || []}
                                        time={message.time}
                                    />
                                );
                            } else {
                                return (
                                    <UserMessageBox
                                        key={index}
                                        responseText={message.response}
                                        time={message.time}
                                    />
                                );
                            }
                        })}
                        {isLoading && <div className="loading">Loading...</div>}
                    </div>
                    <Input handleSendMessage={(message) => sendMessageNoSocket(message)} />
                </>
            )}
            <button
                className="absolute bottom-4 right-4 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center"
                onClick={toggleChat}
            >
                <BsFillChatDotsFill/>
            </button>
        </div>
    );
};

export default Chat;
