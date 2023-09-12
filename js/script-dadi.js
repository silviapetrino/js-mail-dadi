

// Gioco dei dadi: generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

//1. estraggo dei numeri casuali inserendoli in variabili;
// 2. confronto i numeri 
// 3. stabilisco vincitore


let numeroPc = Math.round(Math.random()*5)+1;

let numeroGiocatore = Math.round(Math.random()*5)+1;

let messageWin = false;

console.log(numeroPc);
console.log(numeroGiocatore);

if (numeroPc > numeroGiocatore) {
  messageWin = true;
  console.log("ha vinto il pc")
} else if (numeroPc == numeroGiocatore) {
  console.log("siete pari");
} else console.log("hai vinto tu");