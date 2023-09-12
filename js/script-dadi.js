

// Gioco dei dadi: generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1. creo un array con per i 6 numeri;
// 2. creo la scelta del pc in base a quei numeri


const gamingDice = [1,2,3,4,5,6];

console.log(gamingDice);

const computerNumber = Math.floor(Math.random() * gamingDice.lenght);


console.log(computerNumber);


