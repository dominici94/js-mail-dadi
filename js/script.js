// Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// JavaScript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento! :computerrage::malditesta:


// chiedo all'utente di inserire la sua email. La inserisco in una variabile.

const userMail = prompt("Prego user inserisci la tua mail");


// console.log(userMail);

// faccio un array delle persone che possono accedere

const whiteList = ['AlbertoAngela@gmail.com', 'BrandoBollini@gmail.com', 'CostanzoMaurizio@gmail.com', 'DanieleDiodato@gmail.com', 'EnnioEnni@gmail.com', 'FedericoFazio@gmail.com', 'GiulioGiuliani@gmail.com'];

// console.log(whiteList[0]);

// scorro tutta la lista per controllare se trovo un riscontro della userMail nella lista

//dichiaro una variabile di controllo 
let accesso = false;

for(let i=0; i < whiteList.length ; i++){

    if(userMail == whiteList[i]){
        accesso = true;
        console.log(userMail + " hai accesso al sistema.");
    }

}



