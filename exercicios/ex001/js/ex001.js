function carregar() {

    var hora = document.querySelector('div#hora')
    var img = document.querySelector('img#img')

    var timenow = new Date()
    var horagora = timenow.getHours()

    hora.innerHTML = `Agora são ${horagora} horas carai!`

    if (horagora >= 0 && horagora <= 12){
        //BOM DIA
        img.src = 'imgs/morning_crop_2.png'
        document.body.style.backgroundColor = '#468eec'
    } else if (horagora >= 13 && horagora <= 18){
        //boa tarde
        img.src = 'imgs/afternoon_crop_2.jpg'
        document.body.style.backgroundColor = '#ada966'
    } else {
        // boa noite
        img.src = 'imgs/evening_crop_2.jpg'
        document.body.style.backgroundColor = '#242424'
    }

}