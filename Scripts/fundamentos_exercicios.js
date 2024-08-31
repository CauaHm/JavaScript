// Exercícios de fundamentos

// Exercício 1: Olá, Mundo!
// Crie um script que imprima "Olá, Mundo!" no console

console.log("Olá, Mundo!");

// Exercício 2: Conversão de tipos 
// Dado o valor de um string "1234", converta-o em um número e exiba o tipo da variável no console

const num1 = "1234";
const convertNum = Number(num1);
console.log(convertNum);
console.log(typeof convertNum);

// Exercício 3: Manipulação de strings 
// Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem  na frase
const str1 = "JavaScript é incrível";
const str1NumeroCaracteres = str1.length;
const str1NumeroPalavras = str1.split(" ").length;
console.log(`A String "${str1}" tem ${str1NumeroCaracteres} caracteres, e possui ${str1NumeroPalavras} palavras `);

// Exercício 4: Loops e Arrays 
// Crie um Array com 5 nomes, Use um loop for para imprimir cada nome no console.

const listaNomes = ["Cauã", "Tainá", "Ana", "Tifanny", "Riven" ];
for(let i = 0; i < listaNomes.length; i++) {
    console.log(listaNomes[i]);
}

// Exercício 5: Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato 24 horas (por exemplo, "14:30").
// A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2,30 PM").
// Use o objeto Math para auxiliar nesta conversão. 
// Certifique-se de que sua função lida corretamente com horários na meia noite e no meio dia

function horario(horario24h){
    // 14:20 => hora = 14, minuto = 20 => split(":") => [0] = hora => [1] = minuto
    // const hora = horario24h.split(':')[0]
    // const minuto = horario24h.split(':')[1]
    let [hora, minuto] = horario24h.split(':')
    let hora12 = hora % 12 || 12;
    if(hora >= 12 ) { 
        console.log(hora12+ ":" + minuto +" PM") 
    } else {
        console.log(hora12+ ":" + minuto +" AM") 
    }
    
}

horario("12:00")


