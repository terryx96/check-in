const QRcode = require('qrcode')

generateQR = () => {
    qr = QRcode.toString("Hello from qr", (err, url) => {
        if(err) throw err 
        console.log(url)
    })
}

module.exports = {
    generateQR: generateQR
}