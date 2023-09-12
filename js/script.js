//  Mail: chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo;


// -  creo una lista utenti registrati come dato di partenza;
// -  creo una variabile const con un prompt per richiedere all'utente l'email personale;
// - aggiungo un ciclo per la verifica stabilendo due condizioni (se l'utente è presente/assente quindi scrivo un messaggio diverso in pagina).


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
