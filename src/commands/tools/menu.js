const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder
} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('menu')
    .setDescription('Returns a select menu.'),
  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId(`sub-menu`)
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: `Option #1`,
          value: `http://pudim.com.br`
        }),
        new SelectMenuOptionBuilder({
          label: `Option #2`,
          value: `https://web.facebook.com/photo.php?fbid=1520950031499988&set=pb.100007550171548.-2207520000..&type=3`
        })
      )

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)]
    })
  }
}
