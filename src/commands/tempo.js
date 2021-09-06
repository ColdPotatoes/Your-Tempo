const admin = require('firebase-admin');
const serviceAccount = require("/Projects/Your-Tempo/src/firebase.json");

module.exports = {
	name: 'music',
	description: 'collects past messages and gives song',
	async execute(message, args) {

		const pastMessages = await message.channel.messages.fetch({ limit: 100 });
		const userPastMessages = pastMessages.filter(m => m.author.id === message.author.id);

		let finalContent = userPastMessages.map(msg => msg.content);

		if (!admin.apps.length) {
			admin.initializeApp({
				credential: admin.credential.cert(serviceAccount)
			});
		}

		const DB = admin.firestore();

		DB.collection('Storage').doc('Messages').set({
			text: finalContent
		});
	}
}