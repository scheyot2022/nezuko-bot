const fs = require("fs")
const chalk = require("chalk")


const menu = (prefix, pushname, numerodn, bioo, NomeDoBot,  wame) => {

return `
╭━━━ •𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ 👨‍💻 ❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹• ━━━╮
                𝑵 𝑬 𝒁 𝑼 𝑲 𝑶 - 𝑴 𝑫
 ╰━━━ •𖧹❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ 👨‍💻 ❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ𖧹• ━━━╯

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩ 『 ɪɴғᴏ ʙᴏᴛ 』
┃么|〆ɴᴏᴍᴇ: ${pushname}
┃么|〆ᴅᴏɴᴏ: ᴅᴀɴɪᴇʟ 
┃么|〆ʙᴏᴛ: ${NomeDoBot}
┃么|〆ᴘʀᴇғɪxᴏ: 『  ${prefix}  』
┃么|〆ᴠᴇʀsᴀ̃ᴏ : 3.1
┃么╰━━━━━ ⪨
╰━┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ᴘʀɪɴᴄɪᴘᴀɪs 』
┃么|〆${prefix}convite [link do gp]
┃么|〆${prefix}duelo
┃么|〆${prefix}conselhobiblico 
┃么|〆${prefix}mediafire [LINK] 
┃么|〆${prefix}ping
┃么|〆${prefix}perfil
┃么|〆${prefix}lista-online
┃么|〆${prefix}instadw [LINK] 
┃么|〆${prefix}gtts pt [texto] 
┃么|〆${prefix}metadinha
┃么|〆${prefix}metadinha4
┃么|〆${prefix}videopralink [marcar vídeo] 
┃么|〆${prefix}gerarlink 
┃么|〆${prefix}level
┃么|〆${prefix}ranklevel
┃么|〆${prefix}correio
┃么|〆${prefix}appspremium
┃么|〆${prefix}listajogos
┃么|〆${prefix}carrinhofig
┃么|〆${prefix}packfigu
┃么|〆${prefix}letra [nome da música]
┃么|〆${prefix}eununca
┃么╰━━━━━ ⪨
╰━┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 sᴛɪᴄᴋᴇʀs 』
┃么|〆${prefix}emoji 😛
┃么|〆${prefix}emoji2 😈+☺️
┃么|〆${prefix}attp [texto] 
┃么|〆${prefix}attp2 [texto] 
┃么|〆${prefix}attp3 [texto] 
┃么|〆${prefix}attp4 [texto] 
┃么|〆${prefix}attp5 [texto] 
┃么|〆${prefix}attp6 [texto] 
┃么|〆${prefix}ttp [texto] 
┃么|〆${prefix}toimg
┃么|〆${prefix}togif
┃么|〆${prefix}sticker
┃么|〆${prefix}s [marque a imagem]
┃么|〆${prefix}packfigu
┃么|〆${prefix}figaleatoria
┃么|〆${prefix}figuengracado 
┃么|〆${prefix}roubar [marcar a figu] 
┃么|〆${prefix}rename [marcar a figu]  
┃么|〆${prefix}legenda [texto] 
┃么|〆${prefix}legenda2 [texto|texto]
┃么|〆${prefix}arma [marcar foto] 
┃么|〆${prefix}cstiker
┃么|〆${prefix}sfundo
╰┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ᴘᴏʀɴᴏ/+18 』
┃么|〆${prefix}porno [nome tipo: mirian] 
┃么|〆${prefix}xvideo [link]
┃么|〆${prefix}hentai
┃么|〆${prefix}porno2
┃么|〆${prefix}ahegao
┃么|〆${prefix}ass
┃么|〆${prefix}bdsm
┃么|〆${prefix}blowjob
┃么|〆${prefix}cuckold
┃么|〆${prefix}cum
┃么|〆${prefix}ero
┃么|〆${prefix}kasedaiki
┃么|〆${prefix}femdom
┃么|〆${prefix}foot
┃么|〆${prefix}gangbang
┃么|〆${prefix}glasses
┃么|〆${prefix}hentai
┃么|〆${prefix}jahy
┃么|〆${prefix}manga
┃么|〆${prefix}masturbation
┃么|〆${prefix}neko
┃么|〆${prefix}orgy
┃么|〆${prefix}panties
┃么|〆${prefix}pussy
┃么|〆${prefix}neko2
┃么|〆${prefix}tentacles
┃么|〆${prefix}thighs
┃么|〆${prefix}yuri
┃么|〆${prefix}zettai
╰━┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ɢʀᴜᴘᴏ/ᴀᴅᴍ's 』
┃么|〆${prefix}tagall [marcar todos]
┃么|〆${prefix}marcar [marcar todos]
┃么|〆${prefix}resetaki [akinator]
┃么|〆${prefix}autofigu-gp 1/0
┃么|〆${prefix}hidetag [marcar todos] 
┃么|〆${prefix}simih 1/0
┃么|〆${prefix}simih2 1/0
┃么|〆${prefix}descgp
┃么|〆${prefix}nomegp
┃么|〆${prefix}fotogp
┃么|〆${prefix}ban
┃么|〆${prefix}sairgp
┃么|〆${prefix}reviver [marcar a msg]
┃么|〆${prefix}kick @numero
┃么|〆${prefix}marcarwa [marcar todos] 
┃么|〆${prefix}add 552199..... 
┃么|〆${prefix}linkgp
┃么|〆${prefix}promover @numero
┃么|〆${prefix}rebaixar @numero
┃么|〆${prefix}tirardalista
┃么|〆${prefix}listanegra
┃么|〆${prefix}listban
┃么|〆${prefix}autoban
┃么|〆${prefix}kickfake [remove todos fake]
┃么|〆${prefix}banfake [remove todos fake]
╰━┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ᴀɴɪᴍᴇs 』
┃么|〆${prefix}waifu
┃么|〆${prefix}juice
┃么|〆${prefix}cosplay
┃么|〆${prefix}husbu
┃么|〆${prefix}loli
┃么|〆${prefix}yaoi
┃么|〆${prefix}foto-de-cria
┃么|〆${prefix}naruto
┃么|〆${prefix}zoro
┃么|〆${prefix}luffy
┃么|〆${prefix}sanji
┃么|〆${prefix}ussop
┃么|〆${prefix}nami
┃么|〆${prefix}copper
┃么|〆${prefix}minato
┃么|〆${prefix}sasuke
┃么|〆${prefix}sakura
┃么|〆${prefix}boruto
┃么|〆${prefix}sarada
┃么|〆${prefix}mitsuki
┃么|〆${prefix}orochimaru
┃么|〆${prefix}tsunade
┃么|〆${prefix}kakashi
┃么|〆${prefix}killua
┃么|〆${prefix}gon
┃么|〆${prefix}rimuru
┃么|〆${prefix}sagiri
┃么|〆${prefix}natsu
┃么|〆${prefix}tanjirou
┃么|〆${prefix}nezuko
┃么|〆${prefix}senku
╰━┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ғᴜɴᴄ̧ᴏ̃ᴇs/ɢʀᴜᴘᴏ 』
┃么|〆${prefix}autofig-pv 1/0
┃么|〆${prefix}autofig-gp 1/0
┃么|〆${prefix}configp
┃么|〆${prefix}Antidocumento 1 / 0  
┃么|〆${prefix}antilinkhard 1/0
┃么|〆${prefix}antilink 1/0
┃么|〆${prefix}Antiloc 1 / 0  
┃么|〆${prefix}Anticontato 1 / 0
┃么|〆${prefix}Antiaudio 1 / 0
┃么|〆${prefix}Antivideo 1 / 0
┃么|〆${prefix}Antifake 1 / 0
┃么|〆${prefix}Antiimg 1 / 0
┃么|〆${prefix}AntiCatalogo 1 / 0
┃么|〆${prefix}antisticker 1/0
┃么|〆${prefix}Nsfw 1/0
┃么|〆${prefix}leveling 1/0
┃么|〆${prefix}anagrama 1/0
┃么|〆${prefix}autoreação
┃么|〆${prefix}legendabv2
┃么|〆${prefix}legendasaiu2
┃么|〆${prefix}bemvindo2
┃么|〆${prefix}novolink
┃么|〆${prefix}infogp
┃么|〆${prefix}abrirgp
╰━┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ɪᴍɪᴛᴀᴄ̧ᴏ̃ᴇs 』
┃么|〆${prefix}faustao 
┃么|〆${prefix}patolino 
┃么|〆${prefix}chapolin 
┃么|〆${prefix}eminem
┃么|〆${prefix}ibere 
╰━┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ᴇғᴇɪᴛᴏs/ɪᴍɢ 』
┃么|〆${prefix}lgbt
┃么|〆${prefix}triggered
┃么|〆${prefix}morto
╰━┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ᴘᴇsϙᴜɪsᴀs 』
┃么|〆${prefix}pesquisar
┃么|〆${prefix}google
┃么|〆${prefix}mia
┃么|〆${prefix}celular [nome do celular] 
┃么|〆${prefix}pinterest [nome de qualquer coisa]
┃么|〆${prefix}pesquisar-mulheres
┃么|〆${prefix}gerarcpf
┃么|〆${prefix}cep
┃么|〆${prefix}placa
┃么|〆${prefix}ddd
┃么|〆${prefix}encurtalink
┃么|〆${prefix}listabr
┃么|〆${prefix}listafake
┃么|〆${prefix}listaddd
┃么|〆${prefix}nome
┃么|〆${prefix}cpf
┃么|〆${prefix}cpf2
┃么|〆${prefix}cpf3
┃么|〆${prefix}tel
┃么|〆${prefix}cnpj
╰━┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ᴅɪᴠᴇʀsᴀ̃ᴏ 』
┃么|〆${prefix}akinator
┃么|〆${prefix}jogodaforca
┃么|〆${prefix}forca (letter)
┃么|〆${prefix}resetforca
┃么|〆${prefix}joga @552195.... [pedra papel tesoura]
┃么|〆${prefix}jogodavelha @
┃么|〆${prefix}simi texto
┃么|〆${prefix}fazernick
┃么|〆${prefix}Pau
┃么|〆${prefix}Gay1
┃么|〆${prefix}Gadometro
┃么|〆${prefix}Chance (Texto)
┃么|〆${prefix}cassino
┃么|〆${prefix}casal
┃么|〆${prefix}shipo
┃么|〆${prefix}alma-gemeas
┃么|〆${prefix}duelo
┃么|〆${prefix}gay
┃么|〆${prefix}feio
┃么|〆${prefix}matar
┃么|〆${prefix}vesgo
┃么|〆${prefix}bebado
┃么|〆${prefix}gado
┃么|〆${prefix}gostoso
┃么|〆${prefix}gostosa
┃么|〆${prefix}beijo
┃么|〆${prefix}tapa
┃么|〆${prefix}chutar
┃么|〆${prefix}dogolpe
┃么|〆${prefix}nazista
┃么|〆${prefix}rankgay
┃么|〆${prefix}rankgado
┃么|〆${prefix}rankcorno
┃么|〆${prefix}rankgostosos
┃么|〆${prefix}rankgostosas
┃么|〆${prefix}ranknazista
┃么|〆${prefix}rankotakus
┃么|〆${prefix}rankpau
┃么|〆${prefix}docfake
┃么|〆${prefix}eununca
╰━┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ᴘʟᴀʏᴇʀs 』
┃么|〆${prefix}ytmp3
┃么|〆${prefix}ytmp4
┃么|〆${prefix}play [nome da música] 
┃么|〆${prefix}play2 [nome da música]
┃么|〆${prefix}play3 [nome da música]
┃么|〆${prefix}play4 [nome da música]
┃么|〆${prefix}play5 [nome da música]
┃么|〆${prefix}play6 [nome da música]
┃么|〆${prefix}play7 [nome da música]
┃么|〆${prefix}play8 [nome da música]
┃么|〆${prefix}tiktok [link]
┃么|〆${prefix}tiktok2 [link]
┃么|〆${prefix}ptlyrics [nome da música] 
┃么|〆${prefix}lyrics [nome da música] 
┃么|〆${prefix}tomp3 [marcar vídeo] 
┃么|〆${prefix}letra [nome da música]
╰━┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ᴇᴅɪᴛs 』
┃么|〆${prefix}edit1 [seu texto]
┃么|〆${prefix}edit2 [seu texto]
┃么|〆${prefix}edit3 [seu texto] 
┃么|〆${prefix}edit4 [seu texto] 
┃么|〆${prefix}edit5 [seu texto]
┃么|〆${prefix}edit6 [seu texto]
┃么|〆${prefix}edit7 [seu texto] 
┃么|〆${prefix}edit8 [seu texto]
┃么|〆${prefix}edit9 [seu texto]
┃么|〆${prefix}edit10 [seu texto]
┃么|〆${prefix}edit11 [seu texto]
┃么|〆${prefix}edit12 [seu texto]
┃么|〆${prefix}edit13 [seu texto]
┃么|〆${prefix}edit14 [seu texto]
┃么|〆${prefix}edit15 [seu texto] 
┃么|〆${prefix}edit16 [seu texto]
╰┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ɴᴀʀᴜᴛᴏ-ᴇᴅɪᴛs 』
┃么|〆${prefix}edit-naruto
┃么|〆${prefix}naruto2
┃么|〆${prefix}naruto3
┃么|〆${prefix}naruto4
┃么|〆${prefix}naruto5
┃么|〆${prefix}naruto6
┃么|〆${prefix}naruto7
┃么|〆${prefix}naruto8
┃么|〆${prefix}naruto9
┃么|〆${prefix}naruto10
┃么|〆${prefix}naruto11
┃么|〆${prefix}naruto12
┃么|〆${prefix}naruto13
┃么|〆${prefix}naruto14
┃么|〆${prefix}naruto15
┃么|〆${prefix}naruto16
┃么|〆${prefix}naruto17
┃么|〆${prefix}naruto18
┃么|〆${prefix}naruto19
┃么|〆${prefix}naruto20
┃么|〆${prefix}naruto21
┃么|〆${prefix}naruto22
┃么|〆${prefix}naruto23
┃么|〆${prefix}naruto24
┃么|〆${prefix}naruto25
┃么|〆${prefix}naruto26
┃么|〆${prefix}naruto27
┃么|〆${prefix}naruto28
┃么|〆${prefix}naruto29
┃么|〆${prefix}naruto30
┃么|〆${prefix}naruto31
┃么|〆${prefix}naruto32
╰┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ᴊᴜᴊᴜᴛsᴜ-ᴇᴅɪᴛs 』
┃么|〆${prefix}edit-jujutsu
┃么|〆${prefix}jujutsu3
┃么|〆${prefix}jujutsu4
┃么|〆${prefix}jujutsu5
┃么|〆${prefix}jujutsu6
┃么|〆${prefix}jujutsu7
┃么|〆${prefix}jujutsu8
┃么|〆${prefix}jujutsu9
┃么|〆${prefix}jujutsu10
┃么|〆${prefix}jujutsu11
┃么|〆${prefix}jujutsu12
┃么|〆${prefix}jujutsu13
┃么|〆${prefix}jujutsu14
┃么|〆${prefix}jujutsu15
┃么|〆${prefix}jujutsu16
┃么|〆${prefix}jujutsu17
┃么|〆${prefix}jujutsu18
┃么|〆${prefix}jujutsu19
┃么|〆${prefix}jujutsu20
┃么|〆${prefix}jujutsu21
┃么|〆${prefix}jujutsu22
┃么|〆${prefix}jujutsu23
┃么|〆${prefix}jujutsu24
┃么|〆${prefix}jujutsu25
┃么|〆${prefix}jujutsu26
┃么|〆${prefix}jujutsu27
╰┅═┅═┅═┅═┅═┅═┅═ ⪨

╭┅═┅═┅═┅═┅═┅═┅═ ⪨
┃么╭━━ ⪩『 ᴄʀɪᴀᴅᴏʀ 』
┃么|〆${prefix}anticall 1/0
┃么|〆${prefix}premiumlist
┃么|〆${prefix}addpremium @
┃么|〆${prefix}delpremium @
┃么|〆${prefix}reviverqr
┃么|〆${prefix}arquivargp
┃么|〆${prefix}nuke
┃么|〆${prefix}entrar [link do gp]
┃么|〆${prefix}antipvon
┃么|〆${prefix}antipvoff
┃么|〆${prefix}msg
┃么|〆${prefix}clonargp
┃么|〆${prefix}clonagp
┃么|〆${prefix}fotobot
┃么|〆${prefix}clonar
┃么|〆${prefix}seradm [para ser tornar adm do gp]
┃么|〆${prefix}sermembro [para tirar seu adm do gp]
┃么|〆${prefix}listagp
┃么|〆${prefix}banghost
┃么|〆${prefix}serpremium
┃么|〆${prefix}antipv 1/0
┃么|〆${prefix}ganharxp
┃么|〆${prefix}ganharlevel
╰━┅═┅═┅═┅═┅═┅═┅═ ⪨
`
}

exports.menu = menu
