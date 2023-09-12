
const listaMailsUtentiRegistrati = [" "];


const mailUtente = prompt("Per verificare che tu sia registrato, inserisci il tuo indirizzo email");


let message 

for (let i= 0; i < listaMailsUtentiRegistrati.length; i++) {

 
  if (listaMailsUtentiRegistrati[i] === mailUtente) {
    message = "La tua email " + mailUtente + "risulta registrata";
  } else {
    message = "La tua email " + mailUtente + " non risulta registrata";
  }
 
}

const display = document.querySelector("#output");
display.innerHTML = message;



