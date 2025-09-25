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

let partPaul = partParEnfantOuBranche;
let partMarie = partParEnfantOuBranche;
let partBrancheAlain = partParEnfantOuBranche;
let partEric = partBrancheAlain / 2;
let partClaire = partBrancheAlain / 2;

// 5-  Deuxième catégorie : Le conjoint survivant et les frères/sœurs

let partParPersonneCat2 = partCategorie2 / 3;

let partMadameMUKUNA = partParPersonneCat2;
let partJoseph = partParPersonneCat2;
let partSarah = partParPersonneCat2;

// 6-  Calcul des parts

// Première catégorie : Répartition des 75% 

console.log("Paul   :", partPaul);
console.log("Marie  :", partMarie);
console.log("Éric   :", partEric,   "(représente Alain)");
console.log("Claire :", partClaire, "(représente Alain)");

// Deuxième catégorie : Répartition des 25% 

console.log("Madame MUKUNA :", partMadameMUKUNA);
console.log("Joseph        :", partJoseph);
console.log("Sarah         :", partSarah, "(représente Daniel)");


let sommeADistribuee = partPaul + partMarie + partEric + partClaire + partMadameMUKUNA + partJoseph + partSarah;
console.log("\nSomme distribuée :", sommeADistribuee);
console.log("Vérification OK ? ", sommeADistribuee === total);

console.log("Paul :", partPaul);
console.log("Marie :", partMarie);
console.log("Éric :", partEric);
console.log("Claire :", partClaire);
console.log("Madame MUKUNA :", partMadameMUKUNA);
console.log("Joseph :", partJoseph);
console.log("Sarah :", partSarah);





