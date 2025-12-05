function addone() {
    // Récupérer l'élément compteur
    const compteur = document.getElementById("compteur");
    
 
    let valeurActuelle = parseInt(compteur.textContent);
    valeurActuelle++;
    
    // Mettre à jour le contenu du compteur
    compteur.textContent = valeurActuelle;
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");
    button.addEventListener("click", addone);
});