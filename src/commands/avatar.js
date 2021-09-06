const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'displays user details',
    execute(message, args) {

        const target = message.mentions.users.first() || message.author;

        const newEmbed = new MessageEmbed()
            .setColor('1f1f1f')
            .setTitle(`${target.username}'s Album`)
            .addFields(
                {
                    name: 'Tempos',
                    value: 'no songs yet'
                },
            )
            .setThumbnail(target.displayAvatarURL({ dymaic: true }))

        message.channel.send({ embeds: [newEmbed] });

    }
}