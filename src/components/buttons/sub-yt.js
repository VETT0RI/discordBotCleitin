module.exports = {
  data: {
    name: `sub-yt`
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `http://pudim.com.br/`
    })
  }
}