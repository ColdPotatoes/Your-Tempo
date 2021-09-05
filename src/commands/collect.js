module.exports = {
	name: 'collect',
	description: 'collects past messages',
	execute(message, args) {
        const date = new Date();
        message.channel.send(date.getHours());
        //message.channel.messages.fetch({ before: new Date ("A DATE FORMAT I CANT REMEMBER") })
	}
}