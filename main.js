

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

var API_KEY= "AIzaSyBKWvKf9g-J9fsI20hLpa3QCYHMdFB8l10"

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function run() {
    const prompt = "Write a story about an AI and magic"
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  
  run();