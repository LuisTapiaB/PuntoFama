
function aleatorioDeTamañoN(n){
  //Función aleatorioDeTamañoN que genera un aleatorio sin repetirse ningún numero
  do{numeroAleatorio = [...new Set(Array(n).fill(0).map(() => Math.floor(Math.random() * 10)))].join('');}
  while (numeroAleatorio.length < n);
  return numeroAleatorio;
}

function nuevo() {
  numeroAleatorio = aleatorioDeTamañoN(4);
  console.log(numeroAleatorio);
  document.getElementById("prueba").style.color = "white";
  document.getElementById("rendirse").disabled = false;
  document.getElementById("prueba").innerHTML = "xxxx";
  document.getElementById("famas").innerHTML = 0;
  document.getElementById("puntos").innerHTML = 0;
  document.getElementById("entrada").disabled = false;
  document.getElementById("checar").disabled = false;
  document.getElementById("nuevo").disabled = true;
  document.getElementById("contador").innerHTML = 0;
  document.getElementById("titulo").innerHTML = "Adivina el número";
  if (!!document.getElementById("lista")) {
    document.querySelector("#lista").remove();
  }
  //crear div de lista nuevo
  let casilla = document.createElement("div");
  casilla.setAttribute("id", "lista");
  let aside = document.querySelector("aside")
  aside.appendChild(casilla)
  document.querySelectorAll('.tachado').forEach(elemento => elemento.classList.remove('line-through'));
  tachar();
  intentos = 0;
}
/*
function evaluar() {
  famas = 0;
  puntos = 0;
  texto = document.getElementById("entrada").value;
  k = numeroAleatorio[0];
  l = numeroAleatorio[1];
  m = numeroAleatorio[2];
  n = numeroAleatorio[3];
  a = texto[0];
  b = texto[1];
  c = texto[2];
  d = texto[3];
  if (a == k) {
    famas += 1;
  } else if (a == l || a == m || a == n) {
    puntos+= 1;
  }
  if (b == l) {
    famas += 1;
  } else if (b == k || b == m || b == n) {
    puntos += 1;
  }
  if (c == m) {
    famas += 1;
  } else if (c == l || c == k || c == n) {
    puntos += 1;
  }
  if (d == n) {
    famas += 1;
  } else if (d == l || d == m || d == k) {
    puntos += 1;
  }
}
*/
function evaluar() {
  famas = 0;
  puntos = 0;
  texto = document.getElementById("entrada").value;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == numeroAleatorio[i]) {
    famas++;
    }
    if (texto[i] == numeroAleatorio.indexOf())
  }
}

function rendirse() {
    document.getElementById("prueba").innerHTML = numeroAleatorio;
    document.getElementById("nuevo").disabled = false;
    document.getElementById("rendirse").disabled = true;
    document.getElementById("checar").disabled = true;    
    document.getElementById("titulo").innerHTML = "Intentalo de nuevo";
    document.getElementById("titulo").style.color = "red";
    document.getElementById("prueba").style.color = "yellow";
}

function comprobar() {
  if (a == 0 && b == 0 && c == 0 && d == 0) {
    alert("escribe un numero para jugar ");
  } else if (a == b || a == c || a == d || b == c || b == d || c == d) {
    alert("numero invalido, verifique q no se repitan los numeros");
  } else {
    document.getElementById("famas").innerHTML = famas;
    document.getElementById("puntos").innerHTML = puntos;
  }
      if (famas == 4) {
    document.getElementById("prueba").innerHTML = numeroAleatorio;
    document.getElementById("titulo").innerHTML = "Ganaste, Felicitaciones";
    document.getElementById("titulo").style.color = "yellow";
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
  document.getElementById("contador").innerHTML = intentos;
}

function tachar() {
  const tachados = document.querySelectorAll('.tachado');
  tachados.forEach(elemento => {
    elemento.addEventListener('click', () => {
      elemento.classList.toggle('line-through');
    });
  });
}