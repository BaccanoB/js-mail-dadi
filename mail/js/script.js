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
var user_mail = prompt("Inserisci qui la tua email!");
console.log(user_mail);

// Controllare che sia nella lista di chi può accedere

var listaMail = ["beatrice.baccano@yahoo.it","michela.franchini@hotmail.it","stefano.zina@gmail.it","gianluca.pesce@yahoo.it","adriano.grimaldi@yahoo.it","andrea.castenetto@gmail.it"];
console.log(listaMail);

var mailIsValid = false;  

for (var l = 0; l <= listaMail.length; l++ ) {
    if (user_mail == listaMail[l]) {
        mailIsValid = true;
    }
}

// Stampare un messaggio appropriato sull'esito del controllo

if (mailIsValid == false) {
    document.getElementById("mail").innerHTML = "Gentile utente la sua mail <i>" + user_mail + "</i>  risulta errata";
} else {
    document.getElementById("mail").innerHTML = "Gentile utente la sua mail " + user_mail + " risulta corretta" ;
}

console.log(mailIsValid);

