require('dotenv').config()
const TOKEN = process.env.TOKEN
const Discord = require("discord.js");
const express = require('express');

const app = express();
const colors = require("colors")
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
});
client.config = require("./config.json");

client.login(TOKEN);

client.on("ready", ()=>{
  console.log(`${client.user.tag} is now Online! Prefix: ${client.config.prefix}`.bgGreen);
  //client.user.setActivity("Hello world", {type: "STREAMING", url: "https://twitch.tv/#"})
})
require("./logger")(client);
//const logger = require("./logger");
//logger(client)

app.get('/', async (req,res) =>{
  return res.send('Follow docu..mentation ')
})


app.listen(8999, () => {

})
