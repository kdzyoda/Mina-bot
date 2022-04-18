const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hex')
		.setDescription('Displays Discord hex colour codes.'),
	async execute(interaction, client) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(`danger-button`)
                    .setLabel(`Danger`)
                    .setStyle("DANGER"),

                new MessageButton()
                    .setCustomId(`success-button`)
                    .setLabel(`Success`)
                    .setStyle("SUCCESS"),

                new MessageButton()
                    .setCustomId(`primary-button`)
                    .setLabel(`Primary`)
                    .setStyle("PRIMARY"),
            );

            await interaction.reply({ ephemeral: true, content: `Click a button to select colours:`, components: [row] });
    },
};