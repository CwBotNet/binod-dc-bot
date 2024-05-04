import { Client, GatewayIntentBits } from "discord.js";

import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  message.reply({
    content: `hye from binod bot`,
  });
});

client.on("interactionCreate", async (interaction) => {
  await interaction.reply(`pong @${interaction.user.username}`);
});

client.login(process.env.TOKEN);
