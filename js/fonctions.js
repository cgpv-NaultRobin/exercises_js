
loge("yo");
function loge (texte) {
    console.log(texte);
}
saison("novembre");
function saison (mois) {
    if (mois == "decembre" || mois == "janvier"|| mois == "fevrier") {
        console.log("Hivers");
    }
    else if (mois == "mars" || mois == "avril"|| mois == "mai") {
        console.log("Printemps");
    }
    else if (mois == "septembre" || mois == "octobre"|| mois == "novembre") {
        console.log("Automne");
    }
    else {
        console.log("Ete");
    }
}

console.log(EstMajeur(18));
function EstMajeur (age) {
    if (age > 17) {
        return "Vous Pouvez entrer";
    }
    else {
        return "Nice try bud";
    }
}
function button () {
    var rep = prompt("Quel est votre nom complet ?");
    alert("Bonjour " + rep)
}
