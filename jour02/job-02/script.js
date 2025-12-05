function showhide() {
    // Vérifier si l'article existe déjà
    let article = document.getElementById("citation-article");
    
    if (article) {
        
        article.remove();
    } else {
        // Sinon, créer et ajouter l'article
        article = document.createElement("article");
        article.id = "citation-article";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");
    button.addEventListener("click", showhide);
});