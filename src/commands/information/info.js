const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('This shows an info based on input')
        .addSubcommand(subcommand =>
            subcommand
                .setName("user")
                .setDescription("Gets information of a member mentioned")
                .addUserOption(option => option.setName("target").setDescription("The user mentioned")))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription("Information about the server")),
	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user") {
            const user = interaction.options.getUser("target");
            if (user){
                const file = new MessageAttachment("./src/images/twice.png");
                const userEmbed = new MessageEmbed()
                    .setTitle(`${user.username}'s Information:`)
                    .setDescription("This is only an example description")
                    .setAuthor({ name : `${user.username}#${user.discriminator}`})
                    .setThumbnail(client.user.displayAvatarURL())
                    .addFields(
                        { name: `Username:`, value: `Username is: ${user.username}`, inline: true},
                        { name: `\u200B`, value: `\u200B`, inline: true },
                        { name: `Tag:`, value: `Tag is: #${user.discriminator}`, inline: true }
                    )
                    .setImage("attachment://twice.png")
                    .setTimestamp()
                    .setColor("RANDOM")

                await interaction.reply({ embeds: [userEmbed], files: [file] });
            } else {
                await interaction.reply(`Username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
            }
        } else if (interaction.options.getSubcommand() === "server") {
            await interaction.reply(`Server Name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}`);
        } else {
            await interaction.reply("I think there is no sub command was used, please try again.");
        }
	},
};