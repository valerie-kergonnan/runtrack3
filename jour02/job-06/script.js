document.addEventListener("DOMContentLoaded", function() {
    // Code Konami : ↑ ↑ ↓ ↓ ← → ← → B A
    const konamiCode = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    
    let konamiIndex = 0;
    
    document.addEventListener("keydown", function(event) {
        const key = event.key;
        
        const expectedKey = konamiCode[konamiIndex];
        const match = (key === expectedKey) || (key.toLowerCase() === expectedKey.toLowerCase());
        
        if (match) {
            konamiIndex++;
            console.log(`Touche ${konamiIndex}/${konamiCode.length} correcte : ${key}`);
            
            if (konamiIndex === konamiCode.length) {
                activateKonami();
                konamiIndex = 0; // Réinitialiser pour permettre de le refaire
            }
        } else {
            // Si la touche ne correspond pas, réinitialiser
            if (konamiIndex > 0) {
                console.log(`Réinitialisation - Touche incorrecte : ${key}`);
            }
            konamiIndex = 0;
        }
    });
    
    function activateKonami() {
        document.body.classList.add('konami-activated');
        
        // Ajouter le contenu
        const content = document.getElementById('content');
        content.innerHTML = `
            <h1>Bienvenue sur La Plateforme_</h1>
            <p>Code Konami activé avec succès !</p>
        `;
        
        console.log("🎮 Code Konami activé ! Bienvenue sur La Plateforme_ !");
    }
});
