require("dotenv").config();

module.exports = {
    // ⬇⬇⬇ BOT DETAILS
    token: process.env.TOKEN || "MTE2MjMyMzIxMjAzNDY1NDI3OQ.G_rDQm.5sFHaULd1GMJX_du1WBqLciLENL1V-GZFGpPQI",
    prefix: process.env.PREFIX || "/",
    color: process.env.EMBED_COLOR || "05BFDB",
    owner: process.env.OWNER_ID || "804329310252433408",
    guildLogs: process.env.GUILD_LOGS || "GUILD_LOGS",
    leaveTimeout: process.env.LEAVE_TIMEOUT || "20000",
    disableYouTube: parseBoolean(process.env.DISABLE_YOUTUBE || ""),

    // ⬇⬇⬇ PORU DETAILS
    playSource: process.env.PLAY_SOURCE || "ytsearch",
    poruOptions: {
        defaultPlatform: process.env.DEFAULT_SOURCE || "ytsearch",
        clientID: process.env.SPOTIFY_ID || "bf5ee2a72bae40ffadc71a47280e5ff9",
        clientSecret: process.env.SPOTIFY_SECRET || "053469ffeb3844079fab734ebf30902",
        reconnectTries: 100,
        playlistLimit: 100, // <==== 1 = 100 TRACKS
        albumLimit: 100, // <==== 1 = 50 TRACKS
        artistLimit: 100, // <==== 1 = 50 TRACKS
        searchMarket: "us",
    },
    nodes: [
        {
            name: process.env.NODE_NAME1 || "Triped", 
            host: process.env.NODE_HOST1 || "lavalink.techpoint.world",
            port: parseInt(process.env.NODE_PORT1 || "80"),
            password: process.env.NODE_PASSWORD1 || "techpoint", 
            secure: parseBoolean(process.env.NODE_SECURE1 || "false"), // <==== LAVALINK SECURE "true/false"
            regions: process.env.NODE_REGIONS1 || [""],
        }
    ],

    // ⬇⬇⬇ LINK BOTS DETAILS
    mongoUri: process.env.MONGO_URI || "mongodb+srv://bayuardana213:Komangjelek21@cluster0.t1fwc8p.mongodb.net/?retryWrites=true&w=majority", // <==== YOUR MONGODB LINK
    supportUrl: process.env.SUPPORT_URL || "https://discord.gg/zTFsSXS9Ut", // <==== YOUR SUPPORT SERVER LINK
    voteUrl: process.env.VOTE_URL || "https://top.gg/bot/vote", // <==== YOUR VOTE URL
    inviteUrl: process.env.INVITE_URL || "https://discord.com/api/oauth2/authorize?client_id=1162327966110457928&permissions=271583264&scope=bot", // <==== YOUR BOT INVITE LINK
    imageUrl: process.env.IMAGE_URL || "https://i.ibb.co/NN3FJKY/michie-bot.jpg", // <==== YOUR IMAGE LINK 
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