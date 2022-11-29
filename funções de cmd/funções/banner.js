const cfonts = require("cfonts")
const chalk = require("chalk")
const axios = require("axios")
const fetch = require("node-fetch")
const mimetype = require("mime-types")
const FormData = require("form-data")
const { fromBuffer } = require("file-type")

var cores = ["greenBright", "whiteBright"]
const cor1 = cores[Math.floor(Math.random() * (cores.length))]
const cor2 = cores[Math.floor(Math.random() * (cores.length))]

 const banner = cfonts.render((`NEZUKO`), {
font: 'block',
align: "center",
gradient: ['red', 'magenta']
});                

const banner2 = cfonts.render((`Desenvolvedor: Daniel`), {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
});

module.exports = { banner, banner2 }
