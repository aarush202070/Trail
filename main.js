

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBHYg8XbuOU3mB6gMuTOXQAYbLr08Znf9g",
  authDomain: "kheti-website.firebaseapp.com",
  projectId: "kheti-website",
  storageBucket: "kheti-website.appspot.com",
  messagingSenderId: "16082464055",
  appId: "1:16082464055:web:b6d5902f6419b98b913eb2",
  measurementId: "G-T9YFZWZVT9"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Set up your API key directly or as an environment variable
const API_KEY = "AIzaSyBKWvKf9g-J9fsI20hLpa3QCYHMdFB8l10";
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
    // Define the prompt to generate the ROI output
    const prompt = "Calculate the ROI of a vegetable given the followin Retail price per kg and selling price of farmers";

    try {
        // Generate content using the model
        const result = await genAI.generateContent({
            model: "gemini-1.5-flash",
            prompt: prompt
        });

        // Access and log the response
        const text = result.candidates[0].text;
        console.log(text);
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

run();



function next()
{
    window.location("index.html")
}