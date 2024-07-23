import { StreamClient } from "@stream-io/node-sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;

if (!apiKey || !apiSecret) {
    throw new Error('Missing API key or secret');
}

export const client = new StreamClient(apiKey, apiSecret);
