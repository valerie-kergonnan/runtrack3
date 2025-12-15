document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.getElementById('filterBtn');
    const idFilter = document.getElementById('idFilter');
    const nameFilter = document.getElementById('nameFilter');
    const typeFilter = document.getElementById('typeFilter');
    const resultsDiv = document.getElementById('results');
    
    // Fonction pour filtrer les Pokémon
    function filterPokemon() {
        const id = idFilter.value.trim();
        const name = nameFilter.value.trim().toLowerCase();
        const type = typeFilter.value;
        
        // Récupérer les données avec Fetch
        fetch('pokemon.json')
            .then(response => response.json())
            .then(data => {
                // Filtrer les Pokémon selon les critères
                let filtered = data.filter(pokemon => {
                    let matchId = true;
                    let matchName = true;
                    let matchType = true;
                    
                    // Filtre par ID
                    if (id !== '') {
                        matchId = pokemon.id === parseInt(id);
                    }
                    
                    // Filtre par nom (en français)
                    if (name !== '') {
                        matchName = pokemon.name.french.toLowerCase().includes(name);
                    }
                    
                    // Filtre par type
                    if (type !== '') {
                        matchType = pokemon.type.includes(type);
                    }
                    
                    return matchId && matchName && matchType;
                });
                
                // Afficher les résultats
                displayResults(filtered);
            })
            .catch(error => {
                console.error('Erreur:', error);
                resultsDiv.innerHTML = '<div class="no-results">Erreur lors du chargement des données</div>';
            });
    }
    
    // Fonction pour afficher les résultats
    function displayResults(pokemons) {
        resultsDiv.innerHTML = '';
        
        if (pokemons.length === 0) {
            resultsDiv.innerHTML = '<div class="no-results">Aucun Pokémon ne correspond aux critères</div>';
            return;
        }
        
        pokemons.forEach(pokemon => {
            const card = document.createElement('div');
            card.className = 'pokemon-card';
            
            const types = pokemon.type.map(t => 
                `<span class="type-badge type-${t}">${t}</span>`
            ).join('');
            
            card.innerHTML = `
                <div class="pokemon-id">#${pokemon.id}</div>
                <div class="pokemon-name">${pokemon.name.french}</div>
                <div class="pokemon-types">${types}</div>
            `;
            
            resultsDiv.appendChild(card);
        });
    }
    
    // Événement sur le bouton filtrer
    filterBtn.addEventListener('click', filterPokemon);
    
    // Filtrer au chargement pour afficher tous les Pokémon
    filterPokemon();
});