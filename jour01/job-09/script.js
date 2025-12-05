function tri(numbers, order) {
    // Créer une copie du tableau pour ne pas modifier l'original
    let result = [...numbers];
    
    // Utiliser la fonction sort() avec une fonction de comparaison
    result.sort(function(a, b) {
        if (order === "asc") {
            return a - b; // Ordre ascendant
        } else if (order === "desc") {
            return b - a; // Ordre décroissant
        }
        return 0;
    });
    
    return result;
}

// Tests
console.log("Test 1 - Tri ascendant:");
let nombres1 = [5, 2, 9, 1, 7, 3];
console.log("Tableau original:", nombres1);
console.log("Tableau trié (asc):", tri(nombres1, "asc"));

console.log("\nTest 2 - Tri décroissant:");
let nombres2 = [5, 2, 9, 1, 7, 3];
console.log("Tableau original:", nombres2);
console.log("Tableau trié (desc):", tri(nombres2, "desc"));

console.log("\nTest 3 - Avec nombres négatifs:");
let nombres3 = [-5, 10, -3, 8, 0, -1];
console.log("Tableau original:", nombres3);
console.log("Tableau trié (asc):", tri(nombres3, "asc"));
console.log("Tableau trié (desc):", tri(nombres3, "desc"));