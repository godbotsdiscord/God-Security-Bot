const Discord = requiere("discord.js")
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = requiere("discord.js")

module.exports = {
    name: "nuke",
    alias: ["purgue"]
    
    async execute (client, message, args) {
        let pemisos = message.member.permissons.has("MANAGE_CHANNELS")
        if(!permisos)return message.reply({ content: "You dont have MANAGE_CHANNELS permisson!"})
        
        var pocision = message.channel.position
        message.channel.clone().then(canal => {
            message.channel.delete()
            
            canal.setPosition(pocision)
            
            const embed = new Discord.MessageEmbed()
            .setTitle("☢️ | Nuked Channel")
            .setDescription(`Nuked Channel by: ${message.author}`)
            .setColor("RANDOM")
            
            canal.send({ embeds: [embed]})
        })
    }
}