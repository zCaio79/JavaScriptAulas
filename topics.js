
// IF, ELSE IF, ELSE

//Ex 01:    Verifica se idade é maior, menor ou igual a 18 anos.
const idade = 15;

if (idade == 18) {
    console.log("Você completou 18 anos!!");
}
else if (idade < 18) {
    console.log("Você é menor de idade!!");
}
else {
    console.log("Você é maior de idade!!");
}

//Ex 02:    Verfica se ativo é True ou False.
const ativo = true;

if (ativo) {
    console.log("Ativado!!");
}
else {
    console.log("Desativado!!");
}

// SWITCH CASE

//Ex: 01: Verifica se Número é igual a alguma das opções.
const numero = 2;

switch (numero) {
    case 1:
        console.log("Número 1");
        break;
    case 2:
        console.log("Número 2");
        break;
    case 3:
        console.log("Número 3");
        break;
    default:
        console.log("Outro Número");
        break;
}

//Ex 02:    Verifica se Soma corresponde a algum dos calculos deisponiveis.
const soma = 4;

switch (soma) {
    case (1 + 2):
        console.log("1 + 2 = 3");
        break;
    case (2 + 2):
        console.log("2 + 2 = 4");
        break;
    case (3 + 2):
        console.log("3 + 2 = 5");
        break;
    case (4 + 2):
        console.log("4 + 2 = 6");
        break;
    default:
        console.log("Modo de Auto-Destruição Ativado!")
}

