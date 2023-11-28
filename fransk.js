/*function lastOppFil(){
    const xhttp = new XMLHttpRequest(); //lager en forbindelse til server for å hente fil
    xhttp.onload = function() { //når fila er lastet opp
        viseInfo(this.responseText);//en funksjon som kjøres når fila er lastet opp. velg navn selv

    }
    xhttp.open("GET", "fransk frukt.csv?t=2"); //GET er metoden data sendes fra klient til server. 
    //deretter er filnavnet. Her sendes variabelen t med verdien 2
    xhttp.send(); //sender forespørsel til server.
}*/
let frukt = [["orange","appelsin.jpeg"],["pomme","eple.jpeg"],["pasjonsfrukt","pasjonsfrukt.jpg"]];
let nr=-1;
let score = 0

function oppstart(){
    Eltabell= document.getElementById("hoved");     
      giOppgave();
 }      


function giOppgave() {
    nr++;

    fjernFelter()
    if (nr === frukt.length) {
        bildeDiv = document.getElementById('bilde');
        bildeDiv.innerHTML = "<img class='bilder' src='goodjob.jpg'>";
        document.getElementById("spørsmål").textContent = "Du er ferdig!";

        nesteKnapp = document.getElementById('nesteKnapp');
        nesteKnapp.disabled = true;

        sjekkSvarKnapp = document.getElementById("sjekkKnapp")
        sjekkSvarKnapp.disabled = true;
    } else {
        const bildeDiv = document.getElementById('bilde');
        bildeDiv.innerHTML = `<img class='bilder' src='${frukt[nr][1]}'>`;
        
        
    }
}

// starter spille på nytt med å resette alle variabler som score og nummer(passer på frukt index)
// også setter jeg alle knappene tilbake til ikke disabled
function startPaaNytt() {
    nr = 0;

    document.getElementById("spørsmål").textContent = "Hva er dette på fransk?";
    nesteKnapp = document.getElementById('nesteKnapp');
    nesteKnapp.disabled = false;

    sjekkSvarKnapp = document.getElementById("sjekkKnapp"); // Corrected ID
    sjekkSvarKnapp.disabled = false;

    bildeDiv = document.getElementById('bilde');
    bildeDiv.innerHTML = "<img class='bilder' src='appelsin.jpeg'>";

    score = 0
    poengSum = document.getElementById("scoreFelt"); 

    poengSum.innerHTML=""
}

//
//Setter felter tilbake til tom streng
function fjernFelter() {
    inputFelt = document.getElementById('svar');
    inputFelt.value = "";

    Erespons = document.getElementById("respons"); 
    Erespons.innerHTML=""
}

function sjekkSvar(){
    let Esvar = document.getElementById("svar");
    svart = Esvar.value;
    let riktig = frukt[nr][0];
    let Erespons = document.getElementById("respons"); 

    let poengSum = document.getElementById("scoreFelt"); 
    if (riktig == svart){ //bruker skriver inn riktig, gir han poeng
       console.log("rett")
       //skriver respons i p-element med id respons
       Erespons.innerHTML="Riktig";
       score++
       poengSum.innerHTML=score+"/3"
    } 
    else{ //bruker har svart feil
        //skriver respons i p-element med id respons
        Erespons.innerHTML="Dette ble ikke riktig";
    }
    
}