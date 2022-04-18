const { Client, Collection } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: 32767 });
const mongoose = require("mongoose");

client.commands = new Collection();
client.buttons = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventsFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventsFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.handleButtons();
    client.login(process.env.token);
    client.dbLogin();
})();