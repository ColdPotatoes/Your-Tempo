module.exports = {
	name: 'hello',
	description: 'says hello',
	execute(message, args){
		message.channel.send('Hello ' + message.author.username);
	}
}