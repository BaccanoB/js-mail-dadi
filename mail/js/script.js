// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"



// Chiedere all'utente email
var mail = prompt("Inserisci qui la tua email!");
console.log(mail);

// Controllare che sia nella lista di chi può accedere

var listaMail = ["beatrice.baccano@yahoo.it","michela.franchini@hotmail.it","stefano.zina@gmail.it","gianluca.pesce@yahoo.it","adriano.grimaldi@yahoo.it","andrea.castenetto@gamil.it"];
console.log(listaMail);

var controlloMail = true;

for (var l = 0; l <= listaMail.length; l++ ) {
    if (mail == listaMail[l]) {
        controlloMail = "corretta";
    }
}

if (controlloMail == true) {
    document.getElementById("mail").innerHTML = "Gentile utente la sua mail " + mail + " risulta errata";
}else {
    document.getElementById("mail").innerHTML = "Gentile utente la sua mail " + mail + " risulta " + controlloMail;}

console.log(controlloMail);

// Stampare un messaggio appropriato sull'esito del controllo
