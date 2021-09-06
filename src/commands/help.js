const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'displSays helpful information',
    execute(message, args) {

        if (args[0] === 'commands') {
            const commandsEmbed = new MessageEmbed()
                .setColor('1f1f1f')
                .setTitle('**COMMANDS**')
                .setDescription('List and descriptions of all avaliable commands')
                .addFields(
                    { name: 'hello', value: 'Says hi back' },
                    { name: 'avatar', value: 'Displays details about you and your songs' },
                    { name: 'music', value: 'Gives music based on message history'},
                    { name: '\u200B', value: 'http://your-tempo.likesyou.org/explain.html'})
                .setFooter('Explaination on how the bot works')

            message.channel.send({ embeds: [commandsEmbed] });
            
        } else {

            const helpEmbed = new MessageEmbed()
                .setColor('1f1f1f')
                .setTitle('**HELP CENTER**')
                .setDescription('To get comamand specifics use the -help command')
                .addFields(
                    { name: 'Commands', value: '- avatar \n- hello \n- music' },
                    { name: '\u200B', value: 'http://your-tempo.likesyou.org/explain.html'})
                .setFooter('Explaination on how the bot works')

            message.channel.send({ embeds: [helpEmbed] });
        }
    }
}