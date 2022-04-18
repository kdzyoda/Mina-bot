module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {
		if (interaction.isCommand()) {
			const command = client.commands.get(interaction.commandName);

			if (!command) return;

			try {
				await command.execute(interaction, client);
			} catch (error) {
				console.error(error);
				await interaction.reply({
					content: 'There was an error while executing this command!',
					ephemeral: true
				});
			}
		} else if (interaction.isSelectMenu()) {
			if (interaction.customId == "colour-select") {
				let colours = "";
				await interaction.values.forEach(async value => {
					colours += `${value} `
				});
				await interaction.reply({ content: `Yahoooo! Your favourite colour(s) are: ${colours}` });
			}
		} else if (interaction.isButton()) {
			const button = client.buttons.get(interaction.customId);
			if (!button) return await interaction.reply({ content: `Ooops! There was no button code found for this button. `});

			try {
				await button.execute(interaction, client);
			} catch (error) {
				console.error(error);
				await interaction.reply({
					content: 'There was an error while executing this button!',
					ephemeral: true
				});
			}
		}
	},
};