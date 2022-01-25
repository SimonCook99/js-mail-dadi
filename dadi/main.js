
let numeroGiocatore = parseInt(prompt("Inserisci un numero da 1 a 6"));


//Il programma non prosegue se l'utente mette una stringa, o un numero maggiore di 6
while(isNaN(numeroGiocatore) || numeroGiocatore > 6){
    numeroGiocatore = parseInt(prompt("Inserisci un numero valido, deve essere compreso tra 1 e 6"));
}

//numero random del PC tra 1 e 6
let numeroNPC = Math.floor((Math.random() * 6) + 1);

console.log(numeroNPC);

if(numeroGiocatore > numeroNPC){
    alert("Congratualzioni, hai vinto");
} else if(numeroNPC > numeroGiocatore){
    alert("Peccato, hai perso");
} else{
    alert("Pareggio");
}

//metto i 2 numeri all'interno dei div appositi
document.getElementById("numeroGiocatore").innerHTML = "Il tuo numero è: " + numeroGiocatore;
document.getElementById("numeroPC").innerHTML = "Il numero del PC è: " + numeroNPC;
