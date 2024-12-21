//Desafio 1: Mostre um alerta com a mensagem "Boas vindas ao nosso site!
/* 
alert('Bem vindo ao nosso site!'); 
*/

//Desafio 2: Declare uma variável chamada nome e atribua a ela o valor "Lua". 
/* 
let nome = ('Lua');
console.log(nome);
*/

//Desafio 3: Crie uma variável chamada idade e atribua a ela o valor 25. 
/*
let idade = 25;
console.log(idade);
*/

//Desafio 4: Defina uma variável numeroDeVendas e atribua a ela o valor 50.
/*
let numeroDeVendas = 50;
console.log(numeroDeVendas);
*/

//Desafio 5: Defina uma variável saldoDisponivel e atribua a ela o valor 1000. 
/*
let saldoDisponivel = 1000;
console.log(saldoDisponivel);
*/

//Desafio 6: Exiba um alerta com o texto "Erro! Preencha todos os campos". 
/*
alert('Erro! Preencha todos os campos');
*/

//Desafio 7: Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
/*
let mensagemDeErro = ('Erro! Preencha todos os campos');
alert(mensagemDeErro);
*/

//Desafio 8: Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
/*
let nome = prompt('Qual seu nome? ');
console.log(nome);
*/

//Desafio 9: Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
/*
let idade = prompt('Digite sua idade: ');
console.log(idade);
*/

//Desafio 10: Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
/*
let idade = prompt('Digite sua idade: ');
if (idade >= 18){
    alert('Pode tirar a habilitação!');
} 
else{
    alert('Não pode tirar a habiçitação!');
}
*/

//Desafio 11: Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
/*
alert('Digite a seguir o dia da semana em letra maiúscula!!!')

let diaDigitado = prompt('Digite o nome do dia: ');
if (diaDigitado == 'Sábado') {
    alert('Bom fim de semana!');
}
else if (diaDigitado == 'Domingo'){
    alert('Bom fim de semana!');
}
else if (diaDigitado == 'Segunda'){
    alert('Boa semana!');
}
else if (diaDigitado == 'Terça'){
    alert('Boa semana!');
}
else if (diaDigitado == 'Quarta'){
    alert('Boa semana!');
}
else if (diaDigitado == 'Quinta'){
    alert('Boa semana!');
}
else if (diaDigitado == 'Sexta'){
    alert('Boa semana!');
}
else {
    alert('Vai se fuder, que quebrar meu código fila da puta');
}
*/

//Desafio 12: Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

/*
let numeroDigitado = prompt('Digitre um número:')
while (isNaN(numeroDigitado)) {
    alert('Digite apenas números!')
    numeroDigitado = prompt('Digitre um número:')
}
if (numeroDigitado >= 0) {
    alert('Número Positivo!');
}
else {
    alert('Número Negativo');
}
*/

// Desafio 13: Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
/*
alert('Bem vindo ao jogo da Vida!')

let pontuacao = prompt('Digite sua pontuação no jogo da vida: ');
while (isNaN(pontuacao)){
    alert('Digite apenas a pontuação!');
    pontuacao = prompt('Digite sua pontuação no jogo da vida: ');
}
if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
}
else{
    alert('Tente adquirir mais pontos para ganhar.')
}
*/

//Desafio 14: Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
/*
let saldoConta = 350;
alert(`Saldo na conta é de R$${saldoConta}.`);
*/

//Desafio 15: Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
/*
let nome = prompt('Digite seu nome: ');
alert(`Bem Vindo ${nome}`);
*/

//Desafio Jogo Secreto

/*
alert('Bem vindo ao Jogo do Número Secreto!');
let numeroSecreto = 27;
console.log(numeroSecreto);
let numeroTentativas = 1;

let chute = prompt('Digite um número entre 1 e 30: ');

while (isNaN(chute) || chute != numeroSecreto){
    if (isNaN(chute)){
        alert('Digite apenas números!');
    }
    else if (chute <1 || chute > 30){
        alert('Por gentileza, digite apenas números entre 1 e 30!');
    }
    else{
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
        numeroTentativas++;
    }
    chute = prompt('Digite um número ente 1 e 30: ')
}

alert(`Você descobriu o número secreto: ${numeroSecreto}, número de tentativas: ${numeroTentativas}`);

*/

// Desafio 15: Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

/*
let = contador = 0;

while (contador <= 9){
    contador = contador +1;
    alert(`Número: ${contador}`);
}

*/

//Desafio 16: Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

/*
let contador = 10;

while (contador > 0) {
    contador = contador -1;
    console.log(`Número: ${contador}`);
}

*/

//Desafio 17: Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

/*
contador = prompt('Digite um número: ');

while (contador > 0){
    contador = contador -1
    alert(`Número: ${contador}`);
}

*/

//Com barramento de caracteres que não sejam números.

/*
let contador = prompt('Digite um número: ');

while (true) {
    if (isNaN(contador) || contador <= 0) {
        contador = prompt('Entrada de Dados não permitida. Por favor, digite um número válido: ');
    }
    else {
        while (contador > 0 ) {
            contador = contador -1;
            alert(`Número: ${contador}`)
        }
        break;
    }
}

*/


//Desafio 18: Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

/*
let numerodigitado =  prompt('Digite um número: ');
let contador = 0;

while (true) {
    if(isNaN(numerodigitado) || numerodigitado <= 0) {
        contador = prompt('Entrada de Dados não permitida. Por favor, digite um número válido: ');
    }
    else {
        while (numerodigitado > contador){
            contador++;
            alert(`Número: ${contador}`)
        }
        break;
    }
}

*/


//Desafio Jogo Secreto sem ISNAN


alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


