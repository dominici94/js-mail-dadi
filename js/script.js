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

const userMail = prompt("Inserisci la tua mail");

// faccio un array delle persone che possono accedere

const whiteList = ['AlbertoAngela@gmail.com', 'BrandoBollini@gmail.com', 'CostanzoMaurizio@gmail.com', 'DanieleDiodato@gmail.com', 'EnnioEnni@gmail.com', 'FedericoFazio@gmail.com', 'GiulioGiuliani@gmail.com'];

//dichiaro una variabile di controllo 
let accesso;

// scorro tutta la lista per controllare se trovo un riscontro della userMail nella lista

for(let i=0; i < whiteList.length ; i++){
     if(userMail == whiteList[i]){
        accesso = true;
     }
}

// se la mail inserita dall'utente rientra nella mia lista stampo a console l'accesso

if(accesso){
     console.log("Hai accesso al sistema.");
}else{
    console.log("Non hai accesso al sistema.");
}

// generare un numero random da 1 a 6 per entrambi i giocatori

// dichiaro i due dadi casuali

let player1 = Math.floor(Math.random() * 6) + 1;
console.log(player1);

let player2 = Math.floor(Math.random() * 6) + 1;
console.log(player2);

// ciclo in caso i due dadi continuino ad essere pari finchè non hanno due valori diversi

for(;player1 == player2;){
    player1 = Math.floor(Math.random() * 6) + 1;
    console.log(player1);
    player2 = Math.floor(Math.random() * 6) + 1;
    console.log(player2);
}

// stabilisco il vincitore

if(player1 > player2){
    console.log('player1 vincitore');
}else{
    console.log('player2 vincitore');
}
