// Exercice 9
//  Répartition de l'héritage de Monsieur Jean MUKUNA

// 1- Valeurs du patrimoine (en CDF)

let maison = 60000000;    
let terrains = 40000000;   
let liquidites = 20000000;

// 2- Total du patrimoine

let total = maison + terrains + liquidites; 

// 3- Héritiers et catégories

let partCategorie1 = total * 0.75; 
let partCategorie2 = total * 0.25; 


// 4- Première catégorie : Les enfants du défunt

let partParEnfantOuBranche = partCategorie1 / 3;
let partParPersonneCat2 = partCategorie2 / 3;

// Variables globales attendues par les tests
let paul = partParEnfantOuBranche;
let marie = partParEnfantOuBranche;
let eric = partParEnfantOuBranche / 2;
let clair = partParEnfantOuBranche / 2;
let madameMukuna = partParPersonneCat2;
let joseph = partParPersonneCat2;
let sarah = partParPersonneCat2;
// 6-  Calcul des parts

// Première catégorie : Répartition des 75% 

console.log("Claire :", partClaire, "(représente Alain)");

// Deuxième catégorie : Répartition des 25% 

console.log("Madame MUKUNA :", madameMukuna);
console.log("Joseph        :", joseph);
console.log("Sarah         :", sarah, "(représente Daniel)");


let sommeADistribuee = paul + marie + eric + clair + madameMukuna + joseph + sarah;
console.log("\nSomme distribuée :", sommeADistribuee);
console.log("Vérification OK ? ", sommeADistribuee === total);

console.log("Paul :", paul);
console.log("Marie :", marie);
console.log("Éric :", eric);
console.log("Claire :", clair);
console.log("Madame MUKUNA :", madameMukuna);
console.log("Joseph :", joseph);
console.log("Sarah :", sarah);





