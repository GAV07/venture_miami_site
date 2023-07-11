import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();


const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getAIResponse = async (content) => {

    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: content }],
    });

    let message = chatCompletion.data.choices[0].message;

    return message;
};

export { getAIResponse };
