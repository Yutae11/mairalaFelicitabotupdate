require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || "", // your bot token
  prefix: process.env.PREFIX || "~", // bot prefix
  ownerID: process.env.OWNERID || ["1219624638628233247"], //your discord id
  mongourl:
    process.env.MONGO_URI ||
    "mongodb+srv://az782l:u9tivl@cluster0.mmfongd.mongodb.net/?retryWrites=true&w=majority", // MongoDb URL
  topggapi: "",
  embedColor: process.env.COlOR || "#303037", // embed colour
  logs: process.env.LOGS || "1218516170668249089", // channel id for guild create and delete logs
  langs: process.env.LANGS || "en",
  nodes: [
    {
      host: process.env.NODE_HOST || "lavalink.oryzen.xyz",
      identifer: process.env.NODE_ID || "Main",

      port: parseInt(process.env.NODE_PORT || "80"),
      password: process.env.NODE_PASSWORD || "oryzen.xyz",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),
    },
  ],
};

function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
