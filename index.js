import { Client, IntentsBitField } from "discord.js";

import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase().includes("hello")) {
    message.reply({
      content: `hye from binod bot`,
    });
  }
});

client.on("interactionCreate", async (interaction) => {
  await interaction.reply(`pong @${interaction.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  // console.log(interaction);
  if (interaction.commandName === "help") {
    await interaction.reply(`List of my commands:
    /help - show all commad list
    /play - play song
    /pause - pause the song
    /stop - stop the song
    /addtoque - add song to running que
    /addtolist - add song to list
    /exit - exit the for server
    `);
  }
});

client.login(process.env.TOKEN);
