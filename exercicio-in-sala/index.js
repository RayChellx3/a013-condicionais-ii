// EXERCICIO 1
let idadeDependente = 19

//IFS COM ANINHAMENTO
if(idadeDependente>=13){
    if(idadeDependente<=17){
        console.log("Seu dependente já pode ter um cartão");        
    }
    else{
        console.log("Ele tem mais de 17 anos")
    }
}
else{
    console.log("Ele tem menos de 13 anos")
}

// OPERADOR LOGICO
if (idadeDependente>=13 && idadeDependente<=17){
    console.log("Seu dependente já pode ter um cartão")
}
else{
    console.log("Ele tem menos de 13 anos")
}
//IF TERNARIO
console.log(idadeDependente === 13)

    //condicao             ?      expressao1 (true)     :     expressao2 (false)   
    idadeDependente === 13 ? console.log("Tem 13 anos") : console.log("Não tem 13 anos")

// SWITCH CASE

let cartao = Number(prompt("Qual opção de cartão?"))

switch(cartao){
    case 1:
        console.log("Cartão Fácil escolhido");
        break;
    case 2:
          console.log("Cartão Black escolhido");
        break;
    case 3:
        console.log("Cartão Platinum escolhido");
        break;
    case 4:
        console.log("Cartão Master Gold escolhido");
        break;
    default:
        console.log("Escolha uma das 4 opções disponiveis!");

}



