module.exports = {
	name: 'clara',
	description: 'asks clara for help',
	execute(message, args, client) {
		client.users.cache.get('564655151906947095').send('Ryan has requested some assistance!');
        message.channel.send('Message sent');
	}
}