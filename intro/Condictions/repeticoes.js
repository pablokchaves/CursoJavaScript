
// Faz a validação ANTES de executar o bloco;
var cont = 0 // inicialização
while (cont <= 10) //teste 
    {
    console.log(`Contagem em ${cont}`)
    cont ++ //incremento
    }


//Faz a validação DEPOIS de ter executado o bloco;
var cont = 0
do {
    console.log(`Contagem em ${cont}`)
    cont ++ //incremento
} while (cont <= 10)


// Repetição com variável de controle;

// for (início; teste; incremento){}
for (var cont = 0; cont <= 10; cont ++) {
    console.log(`Contagem em ${cont}`)
}