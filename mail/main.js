let mailUtente = prompt("Inserisci la tua email");

let mailAutorizzate = [
    "pinco.pallino@gmail.com",
    "pluto.paperino@gmail.com",
    "mario.rossi@virgilio.it"
];



for(let i = 0; i < mailAutorizzate.length; i++){

    if(mailAutorizzate.includes(mailUtente)){
        document.getElementById("autorizzato").innerHTML = "utente autorizzato";
    }else{
        document.getElementById("autorizzato").innerHTML = "utente NON autorizzato";
    }

}