import { Client } from 'discord.js';

require('dotenv').config();

const client = new Client();

client.on('ready', () => {
  console.log('🐶 Beag Online');
});

client.login(process.env.TOKEN);
