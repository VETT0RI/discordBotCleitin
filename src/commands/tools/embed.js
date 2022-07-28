const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Returns an embed.'),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`Clique aqui!`)
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
          name: `Anabia`,
          value: `Anabia é uma trans que adora levar por tras`,
          inline: true
        },
        {
          name: `Moby`,
          value: `Mr. Moby, mais conhecido como Moby Dick é o amante de Anabia, ambos são felizes juntos e adoram vinho quente.`,
          inline: true
        }
      ])

      await interaction.reply({
        embeds: [embed]
      })
  }
}
