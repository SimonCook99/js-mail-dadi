let mailUtente = prompt("Inserisci la tua email");

let mailAutorizzate = [
    "pinco.pallino@gmail.com",
    "pluto.paperino@gmail.com",
    "mario.rossi@virgilio.it"
];



for(let i = 0; i < mailAutorizzate.length; i++){

    if(mailAutorizzate.includes(mailUtente)){
        alert("Sei autorizzato ad accedere");
        break;
    }else{
        alert("Non sei autorizzato");
        break;
    }

}