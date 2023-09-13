
const listaMailsUtentiRegistrati = ["utente@hotmail.it", "ciao@yahoo.com", "ciao2@yahoo.com"];

const mailUtente = prompt("Per verificare che tu sia registrato, inserisci il tuo indirizzo email");


let message = "la tua email " + mailUtente + " non risulta registrata";

for (let i= 0; i < listaMailsUtentiRegistrati.length; i++) {

 
  if (listaMailsUtentiRegistrati[i] === mailUtente) {
     message = "La tua email " + mailUtente + " risulta registrata";
  } 

  }
    
  
const display = document.querySelector("#output");
display.innerHTML = message;




