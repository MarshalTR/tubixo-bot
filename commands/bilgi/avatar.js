const { EmbedBuilder } = require('discord.js');

module.exports = {
    //name: 'avatar',
    //description: 'Profil fotoğrafını büyük ve net bir şekilde gör!',
    //options: [
    //  {
    //    name: 'kullanıcı',
    //    description: 'Profil fotoğrafını büyütmek istediğin kullanıcıyı seç (opsiyonel)',
    //    type: 6,
    //    required: false
    //  }
    //],
    run: async (interaction) => {
        if (!interaction.options.getUser('kullanıcı')) {
            const avatarEmbed = new EmbedBuilder()
                .setColor('#44ffff')
                .setAuthor({ name: `${interaction.user.username}#${interaction.user.discriminator} Profil Fotoğrafı:` })
                .setImage(interaction.user.avatarURL({ format: 'gif', dynamic: true, size: 1024 }))
                .setTimestamp()
                .setFooter({ text: `${interaction.user.username}#${interaction.user.discriminator}` });
            await interaction.reply({ embeds: [avatarEmbed] });
        }

        else {
            const avatarEmbed = new EmbedBuilder()
                .setColor('#44ffff')
                .setAuthor({ name: `${interaction.options.getUser('kullanıcı').username}#${interaction.options.getUser('kullanıcı').discriminator} Profil Fotoğrafı:` })
                .setImage(interaction.options.getUser('kullanıcı').avatarURL({ format: 'gif', dynamic: true, size: 1024 }))
                .setTimestamp()
                .setFooter({ text: `${interaction.options.getUser('kullanıcı').username}#${interaction.options.getUser('kullanıcı').discriminator}` });
            await interaction.reply({ embeds: [avatarEmbed] });
        }

    },
};