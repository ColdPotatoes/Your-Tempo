module.exports = {
	name: 'collect',
	description: 'collects past messages',
	async execute(message, args) {
        const date = new Date();
        //message.channel.send(date.getHours());
        //message.channel.messages.fetch({ before: new Date ("A DATE FORMAT I CANT REMEMBER") })
		//message.guild.channels.cache.forEach()
		const pastMessages = await message.channel.messages.fetch({ limit: 100 });
		
		const userPastMessages = pastMessages.filter(m => m.author.id === message.author.id);
		
		console.log(userPastMessages.size);

		let finalContent = userPastMessages.map(msg => msg.content);
		
		console.log(finalContent);

	}
}