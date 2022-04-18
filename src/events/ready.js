module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log('Ready!');

		client.user.setPresence({ activities: [{ name: `MINA LOML. -Luna`, type: `WATCHING` }], status: 'idle'  });
	},
};