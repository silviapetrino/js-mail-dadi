

// Gioco dei dadi: generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

//1. estraggo dei numeri casuali inserendoli in variabili;
// 2. confronto i numeri 
// 3. stabilisco vincitore


let numeroPc = Math.round(Math.random()*5)+1;

let numeroGiocatore = Math.round(Math.random()*5)+1;

if (numeroPc > numeroGiocatore) {
  message = "ha vinto il computer!";

} else if (numeroPc === numeroGiocatore) {
  message = "quindi siete pari!";
  
} else  message = "hai vinto tu!";



document.getElementById("diceGame").innerHTML = " Dopo la verifica dell'email, è stato estratto un numero da 1 a 6, per te e per il computer: vince chi ha il numero più alto!";

document.querySelector(".result").innerHTML =  "Per il pc è uscito il numero " + numeroPc + ", mentre per te il numero " + numeroGiocatore + " : " + message; 
