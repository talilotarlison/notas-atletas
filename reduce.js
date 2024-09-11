// soma array
let numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(soma); // 39
