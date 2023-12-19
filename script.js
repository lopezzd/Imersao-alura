// Conversor
function ConversorMoeda() {
  var cambioDolarReal = 5.32;
  let valorReal = document.getElementById("input-coin").value;

  var cambioCalculado = cambioDolarReal * valorReal;
  document.getElementById("resultado-moeda").innerHTML =
    "O valor em reais é R$" + cambioCalculado.toFixed(2);
}

// Mentalista
var sortearBotao = document.getElementsByClassName("sortear")[0];
var visor = document.getElementById("visor");

var inputRandom = document.getElementById("input-random");

function SortearNumero() {
  inputRandom.placeholder = '';
  visor.innerHTML = "";
  var numeroSecreto = Math.floor(Math.random() * 10) + 1;
  var contador = 1;

  sortearBotao.disabled = true;
  sortearBotao.innerHTML = "Sorteado!!!"
  inputRandom.disabled = false;

  inputRandom.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      var chute = parseInt(inputRandom.value);

      if (isNaN(chute)) {
        visor.innerHTML = "Valor digitado não é um número";
        inputRandom.value = "";
      } else if (chute < 1 || chute > 10) {
        visor.innerHTML = "Digite um número entre 1 e 10";
        inputRandom.value = "";
      } else if (chute === numeroSecreto) {
        visor.innerHTML = "Acertou!!! Número de chutes: " + contador;
        inputRandom.value = "";
        sortearBotao.disabled = false;
        sortearBotao.innerHTML = "Sortear"
        inputRandom.disabled = true;
        inputRandom.placeholder = "🔒";
      } else if (chute > numeroSecreto) {
        visor.innerHTML = "Errou... Chute maior que o número";
        contador++;
        inputRandom.value = "";
      } else {
        visor.innerHTML = "Errou... Chute menor que o número secreto";
        contador++;
        inputRandom.value = "";
      }
    }
  });
}
// Catálogo

var discografia = [
  "https://i.pinimg.com/originals/c6/38/93/c63893ec1ef982b2159cc905eb7f0634.jpg",
  "https://i.pinimg.com/564x/60/8d/89/608d89a50a25cd41d53eb27be9414fd3.jpg",
  "https://i.pinimg.com/564x/de/c5/8d/dec58dffd0d0e2d9c8c7f972177c6266.jpg",
  "https://i.pinimg.com/564x/99/b3/3c/99b33cf8e4a1c55897819cc33722a28a.jpg",
  "https://i.pinimg.com/564x/da/88/49/da88494bc4028ada4f613bd00a351a75.jpg",
];
var divsExistente = document.getElementsByClassName("discografiacoco");

for (var j = 0; j < divsExistente.length; j++) {
  var divExistente = divsExistente[j];

  for (var i = 0; i < discografia.length; i++) {
    var novaImagem = document.createElement("img");
    novaImagem.className = "disco";
    novaImagem.src = discografia[i];
    novaImagem.alt = "Disco " + (i + 1);

    divExistente.appendChild(novaImagem);
  }
}

// Adicionar Filme

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var listaFilmes = document.getElementById("listaFilmes");

  if (filmeFavorito == "") {
    alert("Insira uma URL");
  } else {
    listaFilmes.innerHTML =
      listaFilmes.innerHTML + "<img src=" + filmeFavorito + ">";
    document.getElementById("filme").value = "";
  }
}