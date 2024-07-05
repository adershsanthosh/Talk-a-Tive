const express = require("express");
const dotenv = require("dotenv");
// const { app } = require("./Server"); // Assuming this is not needed since we're defining app here

const { chats } = require("./data/data"); // Importing chats from your data file
const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("API is Running Succesfully");
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    const chatId = req.params.id;
    const singleChat = chats.find(c => c._id === chatId) || { message: "Chat not found" };
    res.status(singleChat._id ? 200 : 404).send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});
