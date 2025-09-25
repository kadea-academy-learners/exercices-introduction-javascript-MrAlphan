// Exercice 8

// 1. Attribuer la valeur 500 à la variable `salaireMensuel`.

let salaireMensuel = 500;

// 2. Calculer la valeur de `loyer` en prenant 30% de `salaireMensuel`.

let loyer = salaireMensuel * 0.30;

// 3. Calculer la valeur de `nourriture` en prenant 20% de `salaireMensuel`.

let nourriture = salaireMensuel * 0.20;

//  4. Calculer la valeur de `transport` en prenant 10% de `salaireMensuel`.

let transport = salaireMensuel * 0.10;

// 5. Ajouter 25 à la variable `autresDepenses` initialisée à 50.

let autresDepenses = 25;
autresDepenses += 50; 

//  6. Calculer la somme des dépenses (`loyer`, `nourriture`, `transport`, et `autresDepenses`) et l'attribuer à `totalDepenses`.

let totalDepenses = loyer + nourriture + transport + autresDepenses;

//7. Calculer le reste (`salaireMensuel - totalDepenses`) et l'attribuer à la variable `reste`.

let reste = salaireMensuel - totalDepenses;

//  8. Vérifier si `reste` est supérieur ou égal à 100. Si oui, afficher "Budget bien géré", sinon afficher "Attention, budget serré".

if (reste >= 100) {
  console.log("Budget bien géré");
} else {
  console.log("Attention, budget serré");
}

// Ajouter une nouvelle catégorie de dépense appelée `loisirs`, initialisée à 15%

let loisirs = salaireMensuel * 0.15;
reste = salaireMensuel - totalDepenses;

//0. Calculer le pourcentage du salaire mensuel utilisé pour chaque catégorie de dépense (`loyer`, `nourriture`, `transport`, `autresDepenses`, et `loisirs`) et afficher les résultats.

let pourcentageLoyer = (loyer / salaireMensuel) * 100;
let pourcentageNourriture = (nourriture / salaireMensuel) * 100;
let pourcentageTransport = (transport / salaireMensuel) * 100;
let pourcentageAutres = (autresDepenses / salaireMensuel) * 100;
let pourcentageLoisirs = (loisirs / salaireMensuel) * 100;

console.log("Loyer :", pourcentageLoyer, "%");
console.log("Nourriture :", pourcentageNourriture, "%");
console.log("Transport :", pourcentageTransport, "%");
console.log("Autres dépenses :", pourcentageAutres, "%");
console.log("Loisirs :", pourcentageLoisirs, "%");


//  11. Simuler une augmentation de 10% du `salaireMensuel` et recalculer toutes les valeurs (dépenses, total, reste, pourcentages).
salaireMensuel = salaireMensuel * 1.10; 

console.log("\n=== Augmentation de salaire +10% ===");
console.log("augmentation de salaire :", salaireMensuel);
console.log("Total de dépenses :", totalDepenses);
console.log("Reste :", reste);
console.log("Loyer :", (loyer / salaireMensuel) * 100, "%");
console.log("Nourriture :", (nourriture / salaireMensuel) * 100, "%");
console.log("Transport :", (transport / salaireMensuel) * 100, "%");
console.log("Autres dépenses :", (autresDepenses / salaireMensuel) * 100, "%");
console.log("Loisirs :", (loisirs / salaireMensuel) * 100, "%");


// Ajouter une condition pour vérifier si les dépenses totales dépassent 90% du `salaireMensuel`. Si oui, afficher "Dépenses trop élevées, réduisez vos charges".

console.log("Salaire :", salaireMensuel);
console.log("Total dépenses :", totalDepenses);
console.log("Reste :", reste);

if (totalDepenses > salaireMensuel * 0.90) {
  console.log("Dépenses trop élevées, réduisez vos charges");
} else {
  console.log("Vos dépenses sont sous contrôle");
}
