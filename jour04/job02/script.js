function jsonValueKey(jsonString, key) {
    try {
        // Parser la chaîne JSON
        const jsonObject = JSON.parse(jsonString);
        
        // Retourner la valeur associée à la clé
        return jsonObject[key];
    } catch (error) {
        console.error("Erreur lors du parsing JSON:", error);
        return undefined;
    }
}

// Tests
const jsonStr = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

console.log("Test 1 - clé 'city':", jsonValueKey(jsonStr, "city"));
console.log("Test 2 - clé 'name':", jsonValueKey(jsonStr, "name"));
console.log("Test 3 - clé 'nb_staff':", jsonValueKey(jsonStr, "nb_staff"));
console.log("Test 4 - clé 'creation':", jsonValueKey(jsonStr, "creation"));
console.log("Test 5 - clé 'address':", jsonValueKey(jsonStr, "address"));
