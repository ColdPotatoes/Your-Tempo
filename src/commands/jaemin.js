module.exports = {
	name: 'Jaemin',
	description: 'asks Jaemin for what he is doing',
	execute(message, args, client) {
		client.users.cache.get('476231415399186453').send('Ryan would like to know "whats popping hommie"');
        message.channel.send('Message sent');
	}
}