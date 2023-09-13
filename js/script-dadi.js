
const numeroPc = Math.round(Math.random()*5)+1;

const numeroGiocatore = Math.round(Math.random()*5)+1;

if (numeroPc > numeroGiocatore) {
  message = "ha vinto il computer!";

} else if (numeroPc === numeroGiocatore) {
  message = "quindi avete pareggiato!";
  
} else  message = "hai vinto tu!";

document.getElementById("diceGame").innerHTML = " Dopo la verifica dell'email, è stato estratto un numero da 1 a 6, per te e per il computer: vince chi ha il numero più alto!";

document.querySelector(".result").innerHTML =  "Per il pc è uscito il numero " + numeroPc + ", mentre per te il numero " + numeroGiocatore + " : " + message; 


