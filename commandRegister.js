import dotenv from "dotenv";
import { REST, Routes } from "discord.js";
dotenv.config();

const rest = new REST().setToken(process.env.TOKEN);

const commands = [
  {
    name: "help",
    description: "Replies with command list",
  },
  {
    name: "play",
    description: "play song or playlist with link",
  },
  {
    name: "pause",
    description: "pause song or playlist",
  },
  {
    name: "stop",
    description: "stop song or playlist",
  },
  {
    name: "addtoque",
    description: "add song to play next with link",
  },
  {
    name: "addtolist",
    description: "add song to playlist with link",
  },
  {
    name: "exit",
    description: "exit bot from channel",
  },
];

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
