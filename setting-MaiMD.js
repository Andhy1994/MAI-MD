require("./MaiMD")
const fs = require('fs')
const { version } = require("./package.json")
//~~~~~~~~~SETTING BOT~~~~~~~~~~//

global.pairing = "ANDYANDY"// 8 huruf/angka
global.owner = ['6282215486434']
global.namaBot = "᭖͜͡Mai-MD"
global.namaOwner = "𝗔𝗻𝗱𝗵𝘆 𝗦𝘁𝗲𝘃𝗮𝗻𝗼"
global.linkch = "https://whatsapp.com/channel/0029VajwaN8KAwEp5iHJRT1T"
global.linkgc = "https://chat.whatsapp.com/LCRwQK3uzEQBdUn0uDPlyy"
// Foto Message
global.thumbnail = './_menu.jpg'
global.thumbnail2 = "https://img1.pixhost.to/images/10784/670068064_jamal-md.jpg"
global.video = "https://raw.githubusercontent.com/zionjs0/whatsapp-media/main/file_1765376820477.mp4"
global.audio = "https://raw.githubusercontent.com/zionjs0/whatsapp-media/main/file_1765376220762.aac"

// ==========================
// 🌐 GLOBAL REGISTER
// ==========================
global.register = false; // default aktif

// ==========================
// 🌐 PAYMENT 
// ==========================
global.teks = "jangan lupa kirim bukti transfernya kak"
global.namadana = "ANDXXXXXX"
global.namagopay = "Andhy Stevano"
global.namaovo = "ANDRYAWAN"
global.dana = "085166067139"// isi no dana
global.ovo = "082215486434"// isi no ovo
global.gopay = "082215486434"//isi no gopay
global.qris = "https://raw.githubusercontent.com/zionjs0/whatsapp-media/main/file_1765377051363"// isi url qris


// TOKEN BOT TELEGRAM
global.token = "7225198326:AAE-ERxODG2jD8CF6e9LtySW5Y7NyI8HlVA"
global.owntg = "2046197696"
// GRUP GARANSI PANEL TELE/WA (OPSIONAL)
global.linkgc = "https://chat.whatsapp.com/LCRwQK3uzEQBdUn0uDPlyy"

// Settings Api Panel Pterodactyl
// INI JUGA BUAT FITUR BUY PANEL OTOMATIS VIA WA/TELE
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://pterodactyl-xxx"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc

// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https"
global.apikeyV2 = "ptla" //ptla
global.capikeyV2 = "ptlc" //ptlc

// Setting Api cVPS
global.doToken = "APIKEY"
global.linodeToken = "APIKEY"

//Set Limit User
global.setlimit = 100

// ==========================
// 🌐 SETTING API BOT WHATSAPP
// ==========================
global.baseurl = "https://ciaatopup.my.id"
global.pay = {
  apikey: "CiaaTopUp_v8ts7hoaslsg9cqt",
  fee: 300,
  metode: "QRISFAST",
  expired: Date.now() + (30 * 60 * 1000)
}
// ==========================
// 🌐 MESSAGE 
// ==========================
global.mess = {
 owner: "Maaf Hanya Untuk Owner Bot",
 prem: "Maaf Hanya Untuk Pengguna Premium",
 admin: "Maaf Hanya Untuk Admin Group",
 botadmin: "Maaf Bot Harus Dijadikan Admin",
 group: "Maaf Hanya Dapat Digunakan Di Dalam Group",
 wait: "Tunggu sebentar ya, Kak... aku lagi proses nih! ⏳🤗",
 private: "Silahkan Gunakan Fitur Di Private Chat",
}

global.vircsetz = ['☼', '✘', '✦', '✧', '❀', '○', '⏣', '♧', '々', '〆', '✎'] // Emoticon

global.gamewaktu = 60 // Game waktu
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar2 = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            naga: "🐉",
            phonix: "🦅",
            kyubi: "🦊",
            griffin: "🦒",
            centaur: "🎠",
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}
//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
