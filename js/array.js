// var noms = ["bob" , "Jo", "tijo","bozo", "roberto"];

// noms.push("justin");
// noms.unshift("jericho");

// for (let i = 0; i < noms.length; i++) {
//     console.log(noms[i]);
// }

// noms.forEach(nom => {
//     console.log(nom);
// });

// for (const nom of noms) {
//     console.log(nom); 
// }

// var notes = [85, 42, 67, 90, 58, 73];

// let notesReussites = notes.filter((note) => { 
//     return note >= 60;
// });

// console.log(notesReussites[notesReussites.length - 1]);


// var prix = [10, 25, 30, 5, 15];
// var prixTaxes = prix.map((prix) => {
//     return prix * 1.15;
// })
// console.log(prix);
// console.log(prixTaxes);

// var nombres = [2, 5, 8, 11, 14, 17];

// var pairs = nombres.filter((nombre) => {
//     return nombre %2 == 0;
// })
// var x3 = pairs.map((pair) => {
//     return pair * 3; 
// })

// console.log(x3);



let produits = [
  { nom: "Chocolat", prix: 3 },
  { nom: "Chips", prix: 2 },
  { nom: "Café", prix: 8 },
  { nom: "Pain", prix: 4 }
];

let produitAbordables = produits.filter((produit) => {
    return produit.prix <= 5 
})
console.log(produitAbordables);

let produitsv2 = produitAbordables.map((produce) => {
    return produce.nom;
})

console.log(produitsv2)