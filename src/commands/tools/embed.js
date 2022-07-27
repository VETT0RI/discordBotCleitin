const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Returns an embed.'),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`This is a EMBED!`)
      .setDescription(`Gabriel is gay!`)
      .setColor(0x18e1ee)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: `http://pudim.com.br/`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag

      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag
      })
      .setURL(`https://web.facebook.com/photo/?fbid=2976562935938683&set=a.1385153608412965`)
      .addFields([
        {
          name: `Field 1`,
          value: `Field value 1`,
          inline: true
        },
        {
          name: `Field 2`,
          value: `Field value 2`,
          inline: true
        }
      ])

      await interaction.reply({
        embeds: [embed]
      })
  }
}
