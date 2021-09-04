const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'displays helpful information',
    execute(message, args) {
        console.log(args)

        if (args[0] === 'commands') {
            const commandsEmbed = new MessageEmbed()
                .setColor('1f1f1f')
                .setTitle('Commands')
                .setDescription('List and descriptions of all avaliable commands')
                .addFields(
                    { name: 'Hello', value: 'Says hi back' },
                    { name: 'Avatar', value: 'Displays details about you and your songs', inline: true }
                )

            message.channel.send({ embeds: [commandsEmbed] });
            
        } else {

            const helpEmbed = new MessageEmbed()
                .setColor('1f1f1f')
                .setTitle('Help Center')
                .setDescription('to get comamand specifics do !help commands')
                .addFields(
                    { name: 'Commands', value: '- avatar \n- hello' }
                )

            message.channel.send({ embeds: [helpEmbed] });
        }
    }
}