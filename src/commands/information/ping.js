const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('TESTING'),
	async execute(interaction) {
		await interaction.reply('pag to di gumana matulog nalang akez');
	},
};