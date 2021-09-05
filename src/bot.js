const { Client, Intents, MessageAttachment, MessageEmbed, Collection } = require('discord.js');
const client = new Client({ intents: 
    [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES, 
        Intents.FLAGS.GUILD_MEMBERS, 
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ] 
});
const fs = require('fs');

client.commands = new Collection();
client.events = new Collection();

//const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandsFolder = fs.readdirSync("./src/commands");

const prefix = "-"

for (const file of commandsFolder) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    client.events.set(event.name, event);
}



client.on('ready', () => {
    client.events.get('start').execute();
})

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'hello':
            client.commands.get('hello').execute(message, args);
            break;
        case 'help':
            client.commands.get('help').execute(message, args);
            break;
        case 'avatar':
            client.commands.get('avatar').execute(message, args);
            break;
        case 'clara':
            client.commands.get('clara').execute(message, args, client);
            break;
        case 'jaemin':
            client.commands.get('Jaemin').execute(message, args, client);
            break;
        case 'collect':
            client.commands.get('collect').execute(message, args);
            break;
    }
});

client.login('ODgzNzU4Mzc2MDQxOTc5OTA0.YTOmIA.JCQesmQ0sMLmV_R86-B1wIvp07Q');