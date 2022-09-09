//Crie um código que receba um número por **prompt** 
//e verifique se um número é divisível por 2 **ou** por 3

const num = Number(prompt("Digite um número:")) //seu numero aqui

// 1. Utilizando ifs aninhados
if(num % 2 === 0 ){
    if(num % 3 === 0){
        console.log("o numero é divisivel por 2 e 3")
    }
    else{
        console.log("o numero é divisivel somente por 2")
    }
}
else if (num % 3 === 0){
    console.log("o numero é divisivel somente por 3")
}
else{
    console.log("o numero não é divisivel por 2 nem por 3")
}

// 2. Utilizando um operador lógico para unir duas operações relacionais
//expressao && expressao para E
//expressao || expressao para OU  

    if(num % 2 === 0 || num % 3 === 0){ 
           console.log("Ambos divisiveis por 2 e 3")
    
    }
