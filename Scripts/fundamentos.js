//Fundamentos
// var nome = "valor"
var minhaVariavel = "Olá mundo!";
console.log(minhaVariavel);

//Comentários
/*
Comentários em multiplas linhas
*/

//Variáveis e tipos de dados
var meuNumero = 10;
console.log(meuNumero);
console.log(meuNumero + 5);
console.log(typeof meuNumero); // Tipo da variável

var booleano = true; // False

console.log(typeof booleano);

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log(typeof meuObjeto)
console.log(typeof meuArray)
console.log(typeof meuNull)
console.log(typeof meuUndefined)

// Let e const
// Novas formas de declarar variáveis
let x = 10; // Substituir o var
const y = 5; // Um valor constante, que eu não posso mudar

// Operadores Aritméticos
console.log(x + y);
console.log(x - y); 
console.log(x * y); 
console.log(x / y);

// Operadores de comparação
console.log(x == y);
console.log(x != y);

console.log("5" == 5);
console.log("5" === 5); // Verifica o tipo do valor 

// Operadore lógicos 
// And &&
// Or ||
console.log(10 > 5 && 20 > 5); 
console.log(10 > 5 && 20 < 5); 
console.log(10 < 5 && 20 < 5); 

console.log(10 > 5 || 20 > 5); 
console.log(10 > 5 || 20 < 5); 
console.log(10 < 5 || 20 < 5); 

// Conversão de tipos
const meuNumero2 = "123";
const meuNumeroConvertido = Number(meuNumero2);
console.log(meuNumeroConvertido);
console.log(typeof meuNumeroConvertido);

// Estrutura de condição - if, else , else if
const idade = 20;
if(idade < 13) {
    console.log("Criança");
} else if(idade<20) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}

// Switch 
const fruta = "banana";

switch(fruta) {
    case "banana":
        console.log("Banana é a fruta!");
        break;
    case "Maça":
        console.log("Maça é a fruta!");
        break;
        default:
            console.log("Fruta não encontrada!");
            break;
}

// Estruturas de repetição

//Contador, Condição de limite, incremento
for(let i=0; i<=5; i++) {
    console.log(`O valor de I é: ${i}`);
}

// While

let k = 0;

while(k <= 5){
    console.log(k);
    k++;
}

// do while
let j = 0;

do{
    console.log(j)
    j++
}while(j<5)

//funções 
//function nome(argumento1, argumento2) {corpo}
function cumprimentar(nome) {
    console.log("Olá! " + nome);
}
//Invocação = nome() 
cumprimentar('Cauã');

//Escopo de variáveis
let cor = "Azul";

function mostrarCor() {
    let cor = "Verde";
    console.log(cor)
}

console.log(cor);
mostrarCor();

// Hoisting = içamento
testeHosting();

function testeHosting() {
    console.log("Deu certo!");
}

// Arrow function
const testeArrow = () => console.log("Isso também é uma função.")
testeArrow();

// truthy e falsy
const minhaVariavel1 = ""; //falsy
const minhaVariavel2 = "Algum texto"; //truthy
if(minhaVariavel1){
    console.log("É verdadeiro");
} else{
    console.log("É falso");
}
if(minhaVariavel2){
    console.log("É verdadeiro 2");
} else{
    console.log("É falso 2");
}

// Array, listas
const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

console.log(numeros[0]);
console.log(numeros[2]);

numeros.push(6); // Vai adicionar um número a array
console.log(numeros);

numeros.pop(); // Vai remover o ultimo número da array
console.log(numeros);

// Strings 
const minhaStringNova = "Olá, mundo!";
const minhaString3 = minhaStringNova + "Como você está?";
console.log(minhaString3);

// interpolação 
const minhaString4 = `${minhaStringNova}Como você está? `;
console.log(minhaString4);

console.log(minhaString4.length); //qtd de caracteres 
console.log(minhaString4[5]);
console.log(minhaString4.toUpperCase());

// Data e hora 
const agora = Date();
console.log(agora);

const natal = new Date(2024, 11, 25);
console.log(natal);

// Math
console.log(Math.PI);
console.log(Math.round(3.6));
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));
