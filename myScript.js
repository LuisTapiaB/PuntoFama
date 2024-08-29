
function aleatorioDeTamañoN(n){
  //Función aleatorioDeTamañoN que genera un aleatorio sin repetirse ningún numero
  do{numeroAleatorio = [...new Set(Array(n).fill(0).map(() => Math.floor(Math.random() * 10)))].join('');}
  while (numeroAleatorio.length < n);
  return numeroAleatorio;
}

function nuevo() {
  tachar();
  numeroAleatorio = aleatorioDeTamañoN(4);
  console.log(numeroAleatorio);
  document.getElementById("rendirse").disabled = false;
  document.getElementById("numeroSecreto").innerHTML = "xxxx";
  document.getElementById("contadorfamas").innerHTML = 0;
  document.getElementById("contadorPuntos").innerHTML = 0;
  document.getElementById("entrada").disabled = false;
  document.getElementById("checar").disabled = false;
  document.getElementById("nuevo").disabled = true;
  document.getElementById("contadorIntentos").innerHTML = 0;
  document.getElementById("titulo").innerHTML = "Adivina el número";
  if (!!document.getElementById("lista")) {
    document.querySelector("#lista").remove();
  }
  //crear div de lista nuevo
  let casilla = document.createElement("div");
  casilla.setAttribute("id", "lista");
  let aside = document.querySelector(".aside")
  aside.appendChild(casilla)
  intentos = 0;
  return numeroAleatorio;
}
function evaluar() {
  famas = 0;
  puntos = 0;
  texto = document.getElementById("entrada").value;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == numeroAleatorio[i]) {
      famas++;
    } else if ( numeroAleatorio.includes(texto[i])){
        puntos++;
      }
  }
  return [famas, puntos];
}

function rendirse() {
    document.getElementById("numeroSecreto").innerHTML = numeroAleatorio;
    document.getElementById("nuevo").disabled = false;
    document.getElementById("rendirse").disabled = true;
    document.getElementById("checar").disabled = true;    
    document.getElementById("titulo").innerHTML = "Intentalo de nuevo";
}

function comprobar() {
  a = texto[0];
  b = texto[1];
  c = texto[2];
  d = texto[3];
  if (a == 0 && b == 0 && c == 0 && d == 0) {
    alert("escribe un numero para jugar ");
  } else if (a == b || a == c || a == d || b == c || b == d || c == d) {
    alert("numero invalido, verifique q no se repitan los numeros");
  } else {
    document.getElementById("contadorfamas").innerHTML = famas;
    document.getElementById("contadorPuntos").innerHTML = puntos;
  }
      if (famas == 4) {
    document.getElementById("numeroSecreto").innerHTML = numeroAleatorio;
    document.getElementById("titulo").innerHTML = "Ganaste, Felicidades";
    document.getElementById("nuevo").disabled = false;
    document.getElementById("rendirse").disabled = true;
    document.getElementById("checar").disabled = true; 
  }
}

function listar() {
  for (let i = 0; i < famas; i++) {
    texto += " f ";
  }
  for (let i = 0; i < puntos; i++) {
    texto += " * ";
  }
  let elemento = document.createElement("p");
  elemento.setAttribute("id", "elemento");
  let textoParrafo = document.createTextNode(texto);
  elemento.appendChild(textoParrafo);
  document.querySelector("#lista").appendChild(elemento);
  intentos += 1;
  document.getElementById("contadorIntentos").innerHTML = intentos;
}
//opción de función listar inyectando código
/*function listar() {
  texto = document.getElementById("entrada").value;
  for (let i = 0; i < famas; i++) {
    texto += " f ";
  }
  for (let i = 0; i < puntos; i++) {
    texto += " * ";
  }
  html = document.getElementById("demo").innerHTML
  html += `<p id="lista">${texto}</p>`;
  document.getElementById("demo").innerHTML = html;
  intentos += 1;
  document.getElementById("contadorIntentos").innerHTML = intentos;
}*/

function tachar() {
  const tachados = document.getElementsByClassName('tachado');
  Array.from(tachados).forEach(elemento => {
    elemento.addEventListener('click', () => {
      elemento.classList.toggle('line-through');
    });
  });
  return;
}