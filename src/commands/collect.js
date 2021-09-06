const admin = require('firebase-admin');
const serviceAccount = require("/Projects/Your-Tempo/src/firebase.json");

module.exports = {
	name: 'collect',
	description: 'collects past messages',
	async execute(message, args) {

		const pastMessages = await message.channel.messages.fetch({ limit: 100 });
		const userPastMessages = pastMessages.filter(m => m.author.id === message.author.id);
		console.log(userPastMessages.size);

		let finalContent = userPastMessages.map(msg => msg.content);
		console.log(finalContent);

		//let finalTime = pastMessages.last().createdTimeStamp;

		if (!admin.apps.length) {
			admin.initializeApp({
				credential: admin.credential.cert(serviceAccount)
			});
		}

		const DB = admin.firestore();

		let userID = message.author.tag;

		let server = message.guild.name;
		console.log('The server is ' + server)

		let today = new Date();
		let dd = String(today.getDate()).padStart(2, '0');
		let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		let yyyy = today.getFullYear();

		let docRef = DB.collection('Profiles').doc(userID);

		today = `${mm}/${dd}/${yyyy}`;
		console.log('Today is ' + today)

		let num1 = ''
		let name1 = ''

		docRef.get().then((doc) => {
			if (doc.exists) {
				num1 = doc.data().SongCount + 1;
				name1 = 'Song' + num1;
			}
		});

		let song1 = { name: name1, texts: finalContent, Server: server, start: "9/4", end: "9/13220", date: today };

		docRef.get().then((doc) => {
			if (doc.exists) {
				let num = doc.data().SongCount + 1;
				let name = 'Song' + num;

				console.log('The doc data is ' + num)
				console.log("Document data:", doc.data());

				docRef.set({
					'SongCount': num,
					[name]: song1
				}, { merge: true });
			} else {
				console.log("No such document!");
				song1 = { name: song1, texts: finalContent, Server: server, start: "9/4", end: "9/13220", date: today };
				DB.collection('Profiles').doc(userID).set({
					'SongCount': 1,
					'Song1': song1
				});
			}
		});
	}
}