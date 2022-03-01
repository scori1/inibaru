var 
{
 WAConnection,
  MessageType,
   Presence,
    MessageOptions,
     Mimetype,
      WALocationMessage,
       WA_MESSAGE_STUB_TYPES,
        WA_DEFAULT_EPHEMERAL,
         ReconnectMode,
          ProxyAgent,
           GroupSettingChange,
            waChatKey,
             mentionedJid,
              processTime,
} = 
    require('@adiwajshing/baileys')
    var fs = require('fs')
    var moment = require('moment-timezone')
    var { exec, spawn } = require('child_process')
    var qrcode = require('qrcode')
    var ffmpeg = require('fluent-ffmpeg')
    var fetch = require('node-fetch')
    var fs = require('fs-extra')
    var ms = require('parse-ms')
    var axios = require('axios')
    var hx = require('hxz-api')
    var fromBuffer = require('file-type')
    var FormData = require('form-data')
    var speed = require('performance-now')
    var yts = require('yt-search')
    var PhoneNumber = require('awesome-phonenumber')
    var JSDOM = require('jsdom')
    var fetch = require('node-fetch')
    var qs = require('qs')
    var cheerio = require('cheerio')
  
var { color, bgcolor, biocolor, KirLog } = require('./KIR1/color')
var { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./KIR1/functions')
var { fetchJson } = require('./KIR1/krbtz')
var { yta } = require('./KIR1/ytdl')

var _scommand = JSON.parse(fs.readFileSync('./KIR2/scommand.json'))
var antilink = JSON.parse(fs.readFileSync('./KIR2/antilink.json'))
var welkom = JSON.parse(fs.readFileSync('./KIR2/welcome.json'))

var kirrfake = fs.readFileSync('./KIR4/kirbotz1.jpg')
var kirrfoto = fs.readFileSync('./KIR4/kirbotz2.jpg')
var kirrtod = fs.readFileSync('./KIR4/kirbotz3.jpg')

var editkirtod = JSON.parse(fs.readFileSync('./editdisini.json'))

ownerName = editkirtod.NamaOwner
ownerNumber = editkirtod.NomorOwner
owner = editkirtod.NomorOwner2
lolkey = editkirtod.LolKeyy
api = editkirtod.apiweb
api2 = editkirtod.apiweb2
api3 = editkirtod.apiweb3
api4 = editkirtod.apiweb4
api5 = editkirtod.apiweb5
api6 = editkirtod.apiweb6

KirSelfPublic = false

var getCmd = (id) => {
let position = null;
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i;
}
});
if (position !== null) {
return _scommand[position].chats;
}
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}
if(time2 < "19:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠'
}
if(time2 < "18:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'
}
if(time2 < "15:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
}
if(time2 < "11:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'
}
if(time2 < "05:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}

module.exports = KirBotz = async (KirBotz, todd) => {
	   try {
       if (!todd.hasNewMessage) return
       todd = todd.messages.all()[0]
	   if (!todd.message) return
	   if (todd.key && todd.key.remoteJid == 'status@broadcast') return
	   global.blocked
	   todd.message = (Object.keys(todd.message)[0] === 'ephemeralMessage') ? todd.message.ephemeralMessage.message : todd.message
	   var { text, extendedText, contact, contactsArray, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
       var content = JSON.stringify(todd.message)
	   var from = todd.key.remoteJid
	   var type = Object.keys(todd.message)[0]
       var cmd = (type === 'conversation' && todd.message.conversation) ? todd.message.conversation : (type == 'imageMessage') && todd.message.imageMessage.caption ? todd.message.imageMessage.caption : (type == 'videoMessage') && todd.message.videoMessage.caption ? todd.message.videoMessage.caption : (type == 'extendedTextMessage') && todd.message.extendedTextMessage.text ? todd.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
       var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
       body = (type === 'conversation' && todd.message.conversation.startsWith(prefix)) ? todd.message.conversation : (type == 'imageMessage') && todd.message[type].caption.startsWith(prefix) ? todd.message[type].caption : (type == 'videoMessage') && todd.message[type].caption.startsWith(prefix) ? todd.message[type].caption : (type == 'extendedTextMessage') && todd.message[type].text.startsWith(prefix) ? todd.message[type].text : (type == 'listResponseMessage') && todd.message[type].singleSelectReply.selectedRowId ? todd.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && todd.message[type].selectedButtonId ? todd.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(todd.message[type].fileSha256.toString('base64')) !== null && getCmd(todd.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(todd.message[type].fileSha256.toString('base64')) : ""
       budy = (type === 'conversation') ? todd.message.conversation : (type === 'extendedTextMessage') ? todd.message.extendedTextMessage.text : ''
       var command = body.slice(1).trim().split(/ +/).shift().toLowerCase()       
       var args = body.trim().split(/ +/).slice(1)
       var arg = body.substring(body.indexOf(' ') + 1)
       var ar = args.map((v) => v.toLowerCase())
       var argz = body.trim().split(/ +/).slice(1)
       var is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
       var isCmd = body.startsWith(prefix) 
       var q = args.join(' ')
       var Verived = "0@s.whatsapp.net"
       var txt = todd.message.conversation
       var botNumber = KirBotz.user.jid
       var isGroup = from.endsWith('@g.us')
       var sender = isGroup ? todd.participant : todd.key.remoteJid
       var senderr = todd.key.fromMe ? KirBotz.user.jid : todd.key.remoteJid.endsWith('@g.us') ? todd.participant : todd.key.remoteJid
       var totalchat = await KirBotz.chats.all()
       var groupMetadata = isGroup ? await KirBotz.groupMetadata(from) : ''
       var groupName = isGroup ? groupMetadata.subject : ''
       var groupId = isGroup ? groupMetadata.jid : ''
       var groupMembers = isGroup ? groupMetadata.participants : ''
       var groupDesc = isGroup ? groupMetadata.desc : ''
       var groupOwner = isGroup ? groupMetadata.owner : ''
       var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
       var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
       var isGroupAdmins = groupAdmins.includes(sender) || false
       var conts = todd.key.fromMe ? KirBotz.user.jid : KirBotz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
       var pushname = todd.key.fromMe ? KirBotz.user.name : conts.notify || conts.vname || conts.name || '-'
       var isOwner = ownerNumber.includes(sender)
       var readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏"

var isAntiLink = isGroup ? antilink.includes(from) : false
var isWelkom = isGroup ? welkom.includes(from) : false
       
selectedButton = (type == 'buttonsResponseMessage') ? todd.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? todd.message.listResponseMessage.title : ''

var sendButton = async (from, context, fortext, but, todd) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
KirBotz.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: todd
})
}
var sendButImage = async (from, context, fotext, img, but) => {
gam = img
kirtoddd = await KirBotz.prepareMessage(from, gam, MessageType.image)
buttonMessagesI = {
imageMessage: kirtoddd.message.imageMessage,
contentText: context,
footerText: fotext,
buttons: but,
headerType: 4
}
KirBotz.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: krtd1})}
var sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await KirBotz.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
KirBotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButloc = (from, title, text, desc, button, sen, men, file) => {
return KirBotz.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: todd, contextInfo: {"mentionedJid": men ? men : []}})
}

botz = {
		  wait: '[ Tunggu ]',
		  success: 'Nih Kak',
		  error: {
		  stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !!!',
		  Iv: 'Linknya Error Tod !!!'
		  },
		  only: {
		  admin: 'Kusus Admin Tod !!!',
		  group: 'Khusus Group Tod !!!'
		  }
		  }

var jam = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         
var hour_now = moment().format('HH:mm:ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();

switch(hari) 
{
case 0: hari = "𝐌𝐢𝐧𝐠𝐠𝐮"; break;
case 1: hari = "𝐒𝐞𝐧𝐢𝐧"; break;
case 2: hari = "𝐒𝐞𝐥𝐚𝐬𝐚"; break;
case 3: hari = "𝐑𝐚𝐛𝐮"; break;
case 4: hari = "𝐊𝐚𝐦𝐢𝐬"; break;
case 5: hari = "𝐉𝐮𝐦′𝐚𝐭"; break;
case 6: hari = "𝐒𝐚𝐛𝐭𝐮"; break;
}
switch(bulan) 
{
case 0: bulan = "𝐉𝐚𝐧𝐮𝐚𝐫𝐢"; break;
case 1: bulan = "𝐅𝐞𝐛𝐫𝐮𝐚𝐫𝐢"; break;
case 2: bulan = "𝐌𝐚𝐫𝐞𝐭"; break;
case 3: bulan = "𝐀𝐩𝐫𝐢𝐥"; break;
case 4: bulan = "𝐌𝐞𝐢"; break;
case 5: bulan = "𝐉𝐮𝐧𝐢"; break;
case 6: bulan = "𝐉𝐮𝐥𝐢"; break;
case 7: bulan = "𝐀𝐠𝐮𝐬𝐭𝐮𝐬"; break;
case 8: bulan = "𝐒𝐞𝐩𝐭𝐞𝐦𝐛𝐞𝐫"; break;
case 9: bulan = "𝐎𝐤𝐭𝐨𝐛𝐞𝐫"; break;
case 10: bulan = "𝐍𝐨𝐯𝐞𝐦𝐛𝐞𝐫"; break;
case 11: bulan = "𝐃𝐞𝐬𝐞𝐦𝐛𝐞𝐫"; break;
}

var Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;

var uploadImages = (buffData, type) => {      
return new Promise(async (resolve, reject) => {        
var { ext } = await fromBuffer(buffData)       
var cmd = text.toLowerCase()      
var filePath = 'utils/tmp.' + ext 
var _buffData = type ? await resizeImage(buffData, false) : buffData  
fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {			
if (err) return reject(err)
console.log('© - FucxXx')			
var fileData = fs.readFileSync(filePath)			
var form = new FormData()			
form.append('file', fileData, 'tmp.' + ext)    
fetch('https://telegra.ph/upload', {			   
method: 'POST',     	
body: form			
})     	
.then(res => res.json())     	
.then(res => {			
if (res.error) return reject(res.error)			
resolve('https://telegra.ph' + res[0].src)     	
})     	
.then(() => fs.unlinkSync(filePath))			   
.catch(err => reject(err))			   
})			 
})		
}

var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var listmsg = (from, title, desc, list) => { 
let po = KirBotz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©KirBotz*_","listType": "SINGLE_SELECT","sections": list}}, {})
return KirBotz.relayWAMessage(po, {waitForAck: true})
}
var reply = (teks) => {
KirBotz.sendMessage(from, teks, text, {quoted:krtd1})
}
var sendMess = (hehe, teks) => {
KirBotz.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? KirBotz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : KirBotz.sendMessage(from, teks.trim(), extendedText, { quoted: todd, contextInfo: { "mentionedJid": memberr } })
}            
var getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
var costum = (pesan, tipe, target, target2) => {
KirBotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
var costum = (pesan, tipe, target, target2) => {
KirBotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
var runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " 𝙷𝙰𝚁𝙸, " : " 𝙷𝙰𝚁𝙸, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " 𝙹𝙰𝙼, " : " 𝙹𝙰𝙼, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " 𝙼𝙴𝙽𝙸𝚃, " : " 𝙼𝙴𝙽𝙸𝚃, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " 𝙳𝙴𝚃𝙸𝙺" : " 𝙳𝙴𝚃𝙸𝙺") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
function monospace(string) {
return '```' + string + '```'
}   

if (isGroup && !todd.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'white'))
reply(`「 *LINK TERDETEKSI* 」\n\n_Link Group Terdeteksi!!_\n_Kamu Akan Di Kick Dari Group!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}

emote = ['😁','😆','😉','😋','😎','😍','😘','🥴','🤩','🤪','🤫','😗','😚','☺','🙂','🤗','🤥','🤔','😐','😣','😮','😝','🙃','😲','😤','☹️','😦','😬','😳','😡']
var emoji = emote[Math.floor(Math.random() * (emote.length))]	
krtd1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: {extendedTextMessage: {text: `© - FucxXx\n[ Emote : ${emoji} ]`,contextInfo: {participant: `0@s.whatsapp.net`}}}}

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (isCmd && !isGroup) {console.log(color('| PRIVATE |', 'greenyellow'), color(moment(todd.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
if (isCmd && isGroup) {console.log(color('| GROUP |', 'greenyellow'), color(moment(todd.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}

if (!todd.key.fromMe && KirSelfPublic === true) return

KirBotz.updatePresence(from, Presence.composing)
KirBotz.chatRead(from, "read")

// Fitur!

switch (command) {

case 'allmenu': 
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
var Yy = 0
var menu = 
`*🜲 Info Pengguna 🜲*

*- Name : ${pushname}*
*- Bio : ${thu.status}*

*🜲 Menu 🜲*
${readmore}
❲ *OWNER* ❳

${Yy+=1} ${prefix}public
${Yy+=1} ${prefix}self
${Yy+=1} ${prefix}bc

❲ *OTHER* ❳
${Yy+=1} ${prefix}tes
${Yy+=1} ${prefix}runtime
${Yy+=1} ${prefix}owner

❲ *GROUP* ❳
${Yy+=1} ${prefix}welcome
${Yy+=1} ${prefix}antilink
${Yy+=1} ${prefix}tagall
${Yy+=1} ${prefix}add
${Yy+=1} ${prefix}kick
${Yy+=1} ${prefix}setname
${Yy+=1} ${prefix}hidetag
${Yy+=1} ${prefix}open
${Yy+=1} ${prefix}close

❲ *DOWNLOAD* ❳
${Yy+=1} ${prefix}play
${Yy+=1} ${prefix}ytmp3
${Yy+=1} ${prefix}ytmp4
${Yy+=1} ${prefix}tiktok

❲ *NULIS* ❳
${Yy+=1} ${prefix}nulis
${Yy+=1} ${prefix}nuliskanan
${Yy+=1} ${prefix}nuliskiri
${Yy+=1} ${prefix}foliokanan
${Yy+=1} ${prefix}foliokiri

❲ *STICKER* ❳
${Yy+=1} ${prefix}sticker
${Yy+=1} ${prefix}toimg
${Yy+=1} ${prefix}attp

❲ *RANDOM CECAN* ❳
${Yy+=1} ${prefix}cecan
${Yy+=1} ${prefix}cogan
${Yy+=1} ${prefix}china
${Yy+=1} ${prefix}malaysia
${Yy+=1} ${prefix}korea
${Yy+=1} ${prefix}japan
${Yy+=1} ${prefix}indonesia
${Yy+=1} ${prefix}thailand
${Yy+=1} ${prefix}vietnam
${Yy+=1} ${prefix}jeni
${Yy+=1} ${prefix}jiso
${Yy+=1} ${prefix}justina
${Yy+=1} ${prefix}lisa
${Yy+=1} ${prefix}rose
${Yy+=1} ${prefix}ryujin

❲ *RANDOM FOTO* ❳
${Yy+=1} ${prefix}darkjokes
${Yy+=1} ${prefix}motor
${Yy+=1} ${prefix}mobil
${Yy+=1} ${prefix}memeindo
${Yy+=1} ${prefix}renungan
${Yy+=1} ${prefix}quotesimage
${Yy+=1} ${prefix}katakataimage
${Yy+=1} ${prefix}aesthetic
${Yy+=1} ${prefix}yulibocil
${Yy+=1} ${prefix}doraemon
${Yy+=1} ${prefix}pokemon
${Yy+=1} ${prefix}pentol
${Yy+=1} ${prefix}tatasurya
${Yy+=1} ${prefix}kartun
${Yy+=1} ${prefix}anjing
${Yy+=1} ${prefix}kucing
${Yy+=1} ${prefix}satanic
${Yy+=1} ${prefix}boneka
${Yy+=1} ${prefix}wallpaperhacker
${Yy+=1} ${prefix}wallpaperhacker2
${Yy+=1} ${prefix}wallpaperharley
${Yy+=1} ${prefix}wallpaperjoker
${Yy+=1} ${prefix}wallpaperpubg
${Yy+=1} ${prefix}wallpaperhp
${Yy+=1} ${prefix}wallpaperhp2
${Yy+=1} ${prefix}wallpaperkpop
${Yy+=1} ${prefix}wallpaperblackpink
${Yy+=1} ${prefix}wallpapergame

❲ *RANDOM VIDEO* ❳
${Yy+=1} ${prefix}bokep
${Yy+=1} ${prefix}jedagjedugff
${Yy+=1} ${prefix}jedagjedugml
${Yy+=1} ${prefix}jedagjedugpubg
${Yy+=1} ${prefix}storywa
${Yy+=1} ${prefix}storygalau
${Yy+=1} ${prefix}storyanime
${Yy+=1} ${prefix}storytruk
${Yy+=1} ${prefix}storybus
${Yy+=1} ${prefix}storysholawatan`;
sendButImage(from, menu, 
`*© - FucxXx*`, kirrfoto, [
{
buttonId: `${prefix}sc`,
buttonText: {
displayText: `📄 - Script`,
},
type: 1,
}
])
break
break
case 'script':
case 'sc':
reply(`𝘚𝘤𝘳𝘪𝘱𝘵 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 𝘉𝘳𝘰.`)
break
case 'bokep':
reply(botz.wait)
get_result = await getBuffer(`${api2}/api/bokep?apikey=RakuKeyTod`)
pll = `𝘕𝘰𝘯𝘵𝘰𝘯 𝘈𝘫𝘢 𝘑𝘨𝘯 𝘊𝘰𝘭𝘭𝘪 𝘠𝘢!︎`
sendButVideo(from, pll, `IG : _rygii`, get_result, [      
{
buttonId: `!GiiXyz`,
buttonText: {
displayText: `© - FucxXx︎`,
},
type: 1,
},
])            
break
case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'storywa':
case 'storygalau':
case 'storyanime':
case 'storytruk':
case 'storybus':
case 'storysholawatan':
reply(botz.wait)
get_result = await getBuffer(`${api3}/api/randomvideo/${command}?apikey=NisaaCantik`)
pll = `Nih Kak シ︎`
sendButVideo(from, pll, `IG : _rygii`, get_result, [      
{
buttonId: `!GiiXyz`,
buttonText: {
displayText: `© - FucxXx`,
},
type: 1,
},
])            
break
case 'motor':
case 'mobil':
case 'memeindo':
case 'renungan':
case 'quotesimage':
case 'katakataimage':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':
reply(botz.wait)
get_result = await getBuffer(`${api3}/api/randomimage/${command}?apikey=NisaaCantik`)
pll = `Nih Kak シ︎`
sendButImage(from, pll, `IG : _rygii`, get_result, [      
{
buttonId: `!GiiXyz`,
buttonText: {
displayText: `© - FucxXx︎`,
},
type: 1,
},
])
break
case 'vietnam':
case 'indonesia':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
case 'jeni':
case 'jiso':
case 'justina':
case 'lisa':
case 'rose':
case 'ryujin':
reply(botz.wait)
get_result = await getBuffer(`${api3}/api/cecan/${command}?apikey=NisaaCantik`)
pll = `Nih Kak シ︎`
sendButImage(from, pll, `IG : _rygii`, get_result, [      
{
buttonId: `!GiiXyz`,
buttonText: {
displayText: `© - FucxXx︎`,
},
type: 1,
},
])
break
case 'cecan':
case 'cogan':
reply(botz.wait)
get_result = await getBuffer(`${api4}/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
sendButImage(from, pll, `IG : _rygii`, get_result, [      
{
buttonId: `!GiiXyz`,
buttonText: {
displayText: `© - FucxXx︎`,
},
type: 1,
},
])
break
case 'nulis':
if(!q) return reply('𝘛𝘦𝘹𝘵𝘯𝘺𝘢?')
listMsg = {
buttonText: 'Pilih',
footerText: `${ucapanWaktu} @${sender.split('@')[0]}
© - FucxXx`,
description: `Nulis Menu!`,
sections: [
{
"title": `NULIS BUKU`,
 rows: [
{
"title": `BUKU KANAN`,
"rowId": `${prefix}nuliskanan ${q}`
}
,
{
"title": `BUKU KIRI`,
"rowId": `${prefix}nuliskiri ${q}`
}
]
}
,
{
"title": `NULIS FOLIO`,
 rows: [
{
"title": `FOLIO KANAN`,
"rowId": `${prefix}foliokanan ${q}`
}
,
{
"title": `FOLIO KIRI`,
"rowId": `${prefix}foliokiri ${q}`
}
]
}],
listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:krtd1})
break
case 'nuliskiri':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
reply(botz.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./KIR4/NULIS/FOTO/BUKU/sebelumkiri.jpg','-font','./KIR4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./KIR4/NULIS/FOTO/BUKU/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
KirBotz.sendMessage(from, fs.readFileSync('./KIR4/NULIS/FOTO/BUKU/setelahkiri.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
case 'nuliskanan':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
reply(botz.wait)
var tulisan = body.slice(12)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./KIR4/NULIS/FOTO/BUKU/sebelumkanan.jpg','-font','./KIR4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./KIR4/NULIS/FOTO/BUKU/setelahkanan.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
KirBotz.sendMessage(from, fs.readFileSync('./KIR4/NULIS/FOTO/BUKU/setelahkanan.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
case 'foliokiri':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
reply(botz.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', ['./KIR4/NULIS/FOTO/FOLIO/sebelumkiri.jpg','-font','./KIR4/NULIS/FONT/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./KIR4/NULIS/FOTO/FOLIO/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
KirBotz.sendMessage(from, fs.readFileSync('./KIR4/NULIS/FOTO/FOLIO/setelahkiri.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
case 'foliokanan':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
reply(botz.wait)
var tulisan = body.slice(12)
var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', ['./KIR4/NULIS/FOTO/FOLIO/sebelumkanan.jpg','-font','./KIR4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./KIR4/NULIS/FOTO/FOLIO/setelahkanan.jpg'])
.on('error', () => reply(mess.error.api))
.on('exit', () => {
KirBotz.sendMessage(from, fs.readFileSync('./KIR4/NULIS/FOTO/FOLIO/setelahkanan.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
case 'play':
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
reply(botz.wait)
var yut = await yts(q)
yta(yut.videos[0].url)         
.then(async(res) => {
var { thumb, title, filesizeF, filesize } = res
var capti = `🜲 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬 🜲

𖥸 Judul : ${yut.all[0].title}
𖥸 ID Video : ${yut.all[0].videoId}
𖥸️ Diupload Pada : ${yut.all[0].ago}
𖥸️️ Views : ${yut.all[0].views}
𖥸️ Durasi : ${yut.all[0].timestamp}
𖥸 Channel : ${yut.all[0].author.name}
𖥸 Link Channel : ${yut.all[0].author.url}
𖥸 Link Video : ${yut.videos[0].url}`
ya = await getBuffer(thumb)
py =await KirBotz.prepareMessage(from, ya, image)
sendButloc(from,monospace(capti),'',`*© - FucxXx*`,
[
{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1}
,
{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}
],null,null,ya)
})
break
case 'ytmp4':
if (args.length < 1) return reply('Link?')     
reply(botz.wait)
KirTid = await fetchJson(`${api3}/api/download/ytmp4?url=${q}&apikey=NisaaCantik`)
kirmp4 = await getBuffer(KirTid.result.url)
await KirBotz.sendMessage(from, kirmp4, video, { mimetype: 'video/mp4', quoted: krtd1 })
break
case 'ytmp3':
if (args.length < 1) return reply('Link?')         
reply(botz.wait)      
KirTid = await fetchJson(`${api3}/api/download/ytmp3?url=${q}&apikey=NisaaCantik`)
kirmp3 = await getBuffer(KirTid.result.url)
await KirBotz.sendMessage(from, kirmp3, audio, { mimetype: 'audio/mp4', quoted: krtd1})
break
case 'tiktok': 
if (!q) return reply('Linknya?')
reply(botz.wait)
if (!q.includes('tiktok')) return reply(`Link Error Bang`)
data = await fetchJson(`${api4}/api/tiktok?apikey=${lolkey}&url=${q}`)
ini_video = await getBuffer(data.result.link)
KirBotz.sendMessage(from, ini_video, video, { quoted: krtd1 })
break
case 'setname':
if (!q) return reply(`Nama?`)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kontol`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
KirBotz.groupUpdateSubject(from, `${body.slice(9)}`)
KirBotz.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: todd })
break
case 'tagall':
if (!q) return reply('Tekss?')
if (!isGroup) return reply(`Khusus Group Kak`)
var arr = [];
var txti = `*[ TAG ALL ]*\n\n*Teks :* ${q ? q : ''}\n\n`
for (var i of groupMembers)
{
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'add':
if (todd.message.extendedTextMessage === null || todd.message.extendedTextMessage === undefined) {
entah = arg.split("|")[0]
entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
entah = `${entah}@s.whatsapp.net`
KirBotz.groupAdd(from, [entah])
} else {
entah = todd.message.extendedTextMessage.contextInfo.participant
KirBotz.groupAdd(from, [entah])
}
break
case 'kick':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(`Khusus Admin Kak`)
if (!q) return reply(`Format Error!\n\nContoh : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
y = q.split('@')[1] + '@s.whatsapp.net'
KirBotz.groupRemove(from, [y])
reply(`Succses kick target!`)
break
case 'hidetag':
if (!isGroup) return reply(`Khusus Group Bang`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(`Khusus Admin`)
var value = body.slice(9)
var group = await KirBotz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: todd
}
KirBotz.sendMessage(from, options, text)
break
case 'open':
if (!isGroup) return reply(`Khusus Group Bang`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
reply(`Sukses Membuka Grup ${groupName}`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'close':
if (!isGroup) return reply(`Khusus Group Bang`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
reply(`Sukses Menutup Grup ${groupName}`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'menu':
case 'help':
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`*🜲 Date 🜲*

*🜲 - Contact : @${sender.split('@')[0]}*
*🜲 - TimeBoot : ${runtime(process.uptime())}*
*🜲 - Speed Boot : ${latensie.toFixed(4)}*
*🜲 - Tanggal : ${Tanggal}*
*🜲 - Waktu Wib : ${wib}*`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `© - FucxXx`, 
buttons: [
{ buttonId: `.allmenu`, buttonText: { displayText: '📄 - Menu' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./KIR4/kirbotz${menhe}.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'tts':
if (!q) return reply(`Contoh ${prefix + command} KirTod`)
titidakira = await getBuffer(`${api}/speech?lang=id&text=${q}&apikey=zekais`)
KirBotz.sendMessage(from, titidakira, MessageType.audio, {quoted: todd, mimetype: 'audip/mp4', ptt:true})
break
case 'public':
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (KirSelfPublic === false) return
uptime = process.uptime()
KirSelfPublic = false
reply(`「 *PUBLIC-MODE* 」`)
break
case 'self':
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (KirSelfPublic === true) return
uptime = process.uptime()
KirSelfPublic = true
reply(`「 *SELF-MODE* 」`)
break
case 'tes':
reply(` Bot On Kak Silahkan Ketik .menu `)
break
case 'runtime':
reply(`Aktip Selama ${runtime(process.uptime())}\n\n${wib} *WIB*\n${wit} *WIT*\n${wita} *WITA*`)
break
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 
'BEGIN:VCARD\n' +
'VERSION:3.0\n' +
'N:Sy;Bot;;;\n' +
`FN:${ownerName}\n` +
`item1.TEL;waid=${owner}:${owner}\n` +
`item1.X-ABLabel:👑 Creator\n` +
`item2.EMAIL;type=INTERNET:GiiXyz@Gmail.Com\n` +
`item2.X-ABLabel:📧 Email\n` +
`item3.URL:Https://Wa.me/6285755825621\n` +
`item3.X-ABLabel:⚙️ Owner\n` +
`item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
`item4.X-ABADR:ac\n` +
`item4.X-ABLabel:🌍 Region\n` +
`item5.X-ABLabel:⚔️ GiiXyz Developer\n` +
'END:VCARD'.trim()
KirBotz.sendMessage(from, {displayName: `Creator Akira`, vcard: vcard2}, contact, 
{ quoted: todd, 
})
reply('Itu Nomor Owner!')
break
case 'sticker':
case 'stiker':
case 's':
if (isMedia && !todd.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
var media = await KirBotz.downloadAndSaveMediaMessage(encmedia, `./KIR3/${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(botz.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./KIR3/data.exif ./KIR3/${sender}.webp -o ./KIR3/${sender}.webp`, async (error) => {
if (error) return reply(botz.error.api)
KirBotz.sendMessage(from, fs.readFileSync(`./KIR3/${sender}.webp`), sticker, {quoted: todd})
fs.unlinkSync(media)
fs.unlinkSync(`./KIR3/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./KIR3/${sender}.webp`)
} else if ((isMedia && todd.message.videoMessage.fileLength < 10000000 || isQuotedVideo && todd.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
var encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
var media = await KirBotz.downloadAndSaveMediaMessage(encmedia, `./KIR3/${sender}`)
reply(botz.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(botz.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./KIR3/data.exif ./KIR3/${sender}.webp -o ./KIR3/${sender}.webp`, async (error) => {
if (error) return reply(botz.error.api)
KirBotz.sendMessage(from, fs.readFileSync(`./KIR3/${sender}.webp`), sticker, {quoted: todd})
fs.unlinkSync(media)
fs.unlinkSync(`./KIR3/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./KIR3/${sender}.webp`)
} else {
reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await KirBotz.downloadAndSaveMediaMessage(encmedia, './KIR3/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `© - FucxXx`)
fs.unlinkSync(ran)
})
break
case 'darkjokes':
case 'darkjoke':
reply(botz.wait)
data = fs.readFileSync('./KIR1/darkjokes.js')
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
KirBotz.sendMessage(from, hasil, image, {quoted: todd, caption: 'IG : _rygii'})
break
case 'attp':
if (args.length == 0) return reply(`Contoh: ${prefix + command} Hai`)
reply(botz.wait)
buffer = await getBuffer(`${api6}/attp?file&text=${encodeURI(q)}`)
KirBotz.sendMessage(from, buffer, sticker, { quoted: todd })
break
case 'antilink':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (!q) return reply(`Buat Nyalain : ${prefix + command} enable\nBuat Matiin : ${prefix + command} disable`)
if (args[0].toLowerCase() === 'enable'){
if (isAntiLink) return reply(`Udah aktif`)
antilink.push(from)
fs.writeFileSync('./KIR2/antilink.json', JSON.stringify(antilink))
reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Bakal Ke Kick!')
} else if (args[0].toLowerCase() === 'disable'){
var anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./KIR2/antilink.json', JSON.stringify(antilink))
reply('*「 ANTILINK DI NONAKTIFKAN 」*')
} else {
reply(`Pilih enable atau disable`)
}
break
case 'welcome':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (args.length < 1) return reply(`Buat Nyalain : ${prefix + command} enable\nBuat Matiin : ${prefix + command} disable`)
if ((args[0]) === 'enable') {
if (isWelkom) return reply('Udah aktif')
welkom.push(from)
fs.writeFileSync('./KIR2/welcome.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
} else if ((args[0]) === 'disable') {
welkom.splice(from, 1)
fs.writeFileSync('./KIR2/welcome.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
} else {
reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
break
case 'bc':
if (!todd.key.fromMe && !isOwner) return reply(`Khusus Owner Kak\nBtw Lu Siapa Owner Bukan???`)
if (args.length < 1) return reply('teks?')
anu = await KirBotz.chats.all()
if (isMedia && !todd.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : todd
bc = await KirBotz.downloadMediaMessage(encmedia)
for (let _ of anu) {
tes = `${body.slice(4)}`
KirBotz.sendMessage(_.jid, bc, { contentText: `⌜ ⚝ BROADCAST ⚝ ⌟\n\n⌦ : ${tes}`, 
footerText: `*GiiXyz ꪶ𖣂ꫂ*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirrfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
textt = `${body.slice(4)}`
KirBotz.sendMessage(_.jid, { contentText: `⌜ ⚝ BROADCAST ⚝ ⌟\n\n⌦ : ${textt}`, 
footerText: `*GiiXyz ꪶ𖣂ꫂ*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirrfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
}
break

default:
if (isCmd) {      
menu = monospace(`Sorry ${pushname}
Command ${prefix + command} Tidak Tersedia Di List Menu
Mohon Cek Kembali :)`)
but = [{ buttonId: `!menu`, buttonText: { displayText: '📄 - Menu' }, type: 1 }]
sendButton(from, menu, '© - FucxXx', but, krtd1)
break
}
if (budy.startsWith('to')){
if (!todd.key.fromMe) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
}
} 
catch 
(e) 
{
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('ERROR : %s', color(e, 'magenta'))
}
}
}