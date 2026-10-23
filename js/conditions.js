var age = 17;
// Directement dans la condition du si
if (Number.isInteger(age) && age < 0) { 
    console.log("Age invalide");
}
// En récupérant le résultat pour plus tard
let isAgeValide = Number.isInteger(age);
console.log(isAgeValide);
if (age >=18) {
    console.log("tu es majeur");
} else {
    console.log("tu n'est pas majeur");
}


var nombre = 4;
(nombre%2 === 0) ? console.log("Le nombre " + nombre + " est pair.") : console.log("Le nombre " + nombre + " n'est pas pair.")


var note = 1;
if (note >= 90) {
    console.log("exellant");
}
else if (note >= 75) {
    console.log("tres bien");
}
else if (note >= 60) {
    console.log("bien");
}
else {
    console.log("echec");
}


var temperature = 26;
if (temperature < 0) {
    console.log("il gel");
}
else if (temperature <= 15) {
    console.log("il fait frais");
}
else if (temperature <= 25) {
    console.log("agreable");
}
else {
    console.log("chaud");
}


var connecte = false;
var role = "admin"
