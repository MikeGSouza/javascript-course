/*
var texto = "Exemplo de string";
var n1 = 30;
var n2 = 20;
alert(texto + " " + (n1 * n2));
console.log(texto.replace("string", "texto"));
console.log(texto.toUpperCase());
console.log(n1/n2);
*/

/*
var lista = ["João", "Maria", "Pedro"];
console.log(lista.push("Carla"));
console.log(lista.pop());
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/

/*
var dicionario = {nome:"João", idade:15};
console.log(dicionario.nome);
var dic2 = [{nome:"Maria", idade:27}, {nome:"Pedro", idade:32}];
console.log(dic2[1].idade);
*/

/*
var nota1 = parseInt(prompt("Digite o valor da nota da primeira prova"));
var nota2 = parseInt(prompt("Digite o valor da nota da segunda prova"));
var media = (nota1 + nota2)/2;
alert(media);
if(media>=5){
	alert("Você foi aprovado!");
}
else{
	alert("Você foi reprovado!");
}
*/

/*
var contador1 = 0;
while(contador1 <= 10){
	console.log(contador1);
	contador1++;
}
*/

/*
var contador2 = 10
for(contador2; contador2>0; contador2--){
	console.log(contador2);
}
*/

/*
var data = new Date();
console.log(data);
console.log(data.getMonth());
console.log(data.getDay());
console.log(data.getHours());
*/

/*
function verificaIdade(idade){
	if(idade>=18){
		isAdult = true;
	}
	else{
		isAdult = false;
	}
	return isAdult;
}
var idade = parseInt(prompt("Digite sua idade:"));

if(verificaIdade(idade)){
	alert("Você pode acessar a página.");
}
else{
	alert("Você não pode acessar a página.");
}
*/

function clicou(){
	alert("Clicou no botão!");
	document.getElementById("mensagem").innerHTML = "Passe o mouse aqui";
}

function redirecionar(){
	window.open("https://www.youtube.com/");
	//window.location.href = "https://www.youtube.com/";
}

/*
function trocar(){
	document.getElementById("mensagem").innerHTML = "Está com o mouse aqui";
}

function voltar(){
	document.getElementById("mensagem").innerHTML = "Passe o mouse aqui";
}
*/

function trocar(elemento){
	elemento.innerHTML = "Está com o mouse aqui";
}

function voltar(elemento){
	elemento.innerHTML = "Passe o mouse aqui";
}

function loaded(){
	alert("Página foi carregada.");
}

function getValue(elemento){
	console.log(elemento.value);
}