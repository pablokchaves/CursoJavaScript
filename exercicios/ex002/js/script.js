

function verify() {
    let data = new Date();
    let anoat = data.getFullYear();
    let ano = document.querySelector('#year');
    let resp = document.querySelector('#retorna')

    
    //let radm = document.querySelector('#masc');
    //let radf = document.querySelector('#fem');

    if (ano.value.length == 0 || ano.value > anoat) {
        resp.innerHTML = 'Ano digitado inválido.';
    }
    else {
        let form = document.getElementsByName('formsex');
        let idade = anoat - Number(ano.value)
        var gen = ''

        if (form[0].checked) {
            var gen = 'masculino';
        } else if (form[1].checked) {
            var gen = 'feminino';
        } else {
            var gen = ''
        }
        
        resp.innerHTML = `Detectamos uma pessoa do sexo ${gen} com ${idade} anos.`
    }
}
