/*Nome: Ludmila de Azevedo Silva
3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console. */



let teclado = require (`Prompt-sync`)();
let numeros = new Array ();
let maior = 0;

for (let x = 0; x < 10; x++){
    numeros[x] = parseInt(teclado(`Digite o número do índice ${x} do Array: `));
}

for (let i = 0; i < 10; i++){
    if (numeros[i] > maior){
        maior = numeros[i];
    }
}

console.log(`O maior número é ${maior}`);
