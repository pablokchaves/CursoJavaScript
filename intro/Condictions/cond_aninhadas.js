/*
let censura = 18
let idade = 32

if (idade >= censura) {
    console.log(`Você tem ${idade} anos. Pode usufruir do conteúdo.`)
} else if (idade >= 16) {
    console.log('Tem certeza?')
} else {
    console.log(`Sai daqui fedelh@! Tu tem só ${idade} anos`)
}


*/


var rnow = new Date()
var hora = rnow.getHours()


if (hora <= 12) {
    console.log('Bom dia carai!')
} else if (hora <= 18) {
    console.log('Segundo round!')
} else {
    console.log('Stamina is low...')
}



