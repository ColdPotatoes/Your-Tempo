const { MessageEmbed } = require('discord.js');
const { admin } = require('firebase-admin');
const { serviceAccount } = require("/Projects/Your-Tempo/src/firebase.json");

module.exports = {
	name: 'avatar',
	description: 'displays user details',
	execute(message, args) {

        if (!admin.apps.length) {
			admin.initializeApp({
				credential: admin.credential.cert(serviceAccount)
			});
		}

		const DB = admin.firestore();
        let songNames = '';

        DB.collection('Profiles').document(message.author.tag).get().then(data => {
            songNames = data().name;
        });


        const target = message.mentions.users.first() || message.author;

		const newEmbed = new MessageEmbed()
        .setColor('1f1f1f')
        .setTitle(`${target.username}'s Album`)
        .addFields(
            {
                name: 'Tempos', 
                value: songNames
            },
        )
        .setThumbnail(target.displayAvatarURL({dymaic: true}))

        message.channel.send({embeds: [newEmbed]});
	}
}