const { SlashCommandBuilder } = require('@discordjs/builders');
const balance = require('../../schemas/balance');
const Balance = require('../../schemas/balance');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('balance')
		.setDescription('This shows an info based on a user\'s current balance.')
        .addSubcommand(subcommand =>
            subcommand
                .setName("user")
                .setDescription("Gets information of a member mentioned")
                .addUserOption(option => option.setName("target").setDescription("The user mentioned"))),
	async execute(interaction, client) {
        let user = (interaction.options.getUser("target") ? interaction.options.getUser("target") : interaction.user);
        const balanceProfile = await client.createBalance(interaction.member);
        await interaction.reply({ content: `${interaction.user.tag} has $${balanceProfile.amount}.`});
	},
};