$(document).ready(function() {
    // Citations de Blade Runner
    const bladeRunnerQuotes = [
        "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion.",
        "All those moments will be lost in time, like tears in rain. Time to die.",
        "It's too bad she won't live! But then again, who does?",
        "I want more life, father.",
        "Wake up. Time to die.",
        "You've done a man's job, sir!",
        "If only you could see what I've seen with your eyes.",
        "Quite an experience to live in fear, isn't it? That's what it is to be a slave."
    ];

    // Contenus pour la pagination
    const jumbotronContents = [
        {
            title: "Bonjour, Monde!",
            subtitle: "Il existe plusieurs vision du terme :",
            content: `<p class="card-text">Le monde est la matiere, l'espace et les phenomenes qui nous sont accessibles par les sens, l'experience ou la raison.</p>
                     <p class="card-text">Le sens le plus courant designe notre planete, la Terre, avec ses habitants, et son environnement plus ou moins naturel.</p>
                     <p class="card-text">Le sens etendu designe l'univers dans son ensemble.</p>`
        },
        {
            title: "La Technologie",
            subtitle: "L'avenir est maintenant",
            content: `<p class="card-text">La technologie transforme notre monde a une vitesse incroyable.</p>
                     <p class="card-text">De l'intelligence artificielle aux voyages spaciaux, les possibilites sont infinies.</p>`
        },
        {
            title: "L'Innovation",
            subtitle: "Creer le futur",
            content: `<p class="card-text">L'innovation est au coeur du progres humain.</p>
                     <p class="card-text">Chaque jour apporte de nouvelles decouvertes et opportunites.</p>`
        }
    ];

    // 1. Bouton papillon 
    $('#btnPapillon').click(function() {
        $('#papillonModal').modal('show');
    });

    // 2. Bouton Rebooter le Monde - Citation aleatoire
    $('#btnReboot').click(function() {
        const randomQuote = bladeRunnerQuotes[Math.floor(Math.random() * bladeRunnerQuotes.length)];
        $('#jumbotronTitle').text('Blade Runner');
        $('#jumbotronSubtitle').text('Citation du film');
        $('#jumbotronContent').html(`<p class="card-text fst-italic">"${randomQuote}"</p>`);
    });

    // 3. Pagination
    $('.page-link').click(function(e) {
        e.preventDefault();
        const page = $(this).data('page') - 1;
        const content = jumbotronContents[page];
        
        $('#jumbotronTitle').text(content.title);
        $('#jumbotronSubtitle').text(content.subtitle);
        $('#jumbotronContent').html(content.content);
        
        // Mettre à jour la pagination active
        $('.page-item').removeClass('active');
        $(this).parent().addClass('active');
    });

    // 4. Liste groupee - Element actif
    $('#listGroup .list-group-item').click(function() {
        $('#listGroup .list-group-item').removeClass('active');
        $(this).addClass('active');
    });

    // 5. Progress bar - Boutons + et -
    $('#btnProgressPlus').click(function() {
        let currentValue = parseInt($('#progressBar').attr('aria-valuenow'));
        if (currentValue < 100) {
            currentValue = Math.min(100, currentValue + 10);
            $('#progressBar').css('width', currentValue + '%').attr('aria-valuenow', currentValue);
        }
    });

    $('#btnProgressMinus').click(function() {
        let currentValue = parseInt($('#progressBar').attr('aria-valuenow'));
        if (currentValue > 0) {
            currentValue = Math.max(0, currentValue - 10);
            $('#progressBar').css('width', currentValue + '%').attr('aria-valuenow', currentValue);
        }
    });

    // 6. Touches D, G, C - Modale recap formulaire
    let keySequence = [];
    const targetSequence = ['d', 'g', 'c'];

    $(document).keydown(function(e) {
        const key = e.key.toLowerCase();
        
        if (key === targetSequence[keySequence.length]) {
            keySequence.push(key);
            
            if (keySequence.length === targetSequence.length) {
                // Sequence complete - Afficher la modale
                const login = $('#loginInput').val() || 'Non renseigné';
                const password = $('#passwordLeftInput').val() || 'Non renseigné';
                const dogecoin = $('#dogecoinInput').val() || 'Non renseigné';
                const url = $('#basic-url').val() || 'Non renseigné';
                
                const recap = `
                    <p><strong>Login:</strong> ${login}</p>
                    <p><strong>Mot de passe:</strong> ${password}</p>
                    <p><strong>DogeCoin:</strong> ${dogecoin}</p>
                    <p><strong>URL:</strong> ${url}</p>
                `;
                
                $('#dgcModalBody').html(recap);
                $('#dgcModal').modal('show');
                
                keySequence = [];
            }
        } else {
            keySequence = [];
        }
    });

    // 7. Formulaire droit - Changer couleur spinner
    $('#formRight').submit(function(e) {
        e.preventDefault();
        
        const email = $('#emailInput').val();
        const password = $('#passwordInput').val();
        
        if (email && password) {
            const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Retirer toutes les classes de couleur existantes
            $('#spinner').removeClass('text-primary text-secondary text-success text-danger text-warning text-info text-dark');
            // Ajouter la nouvelle couleur
            $('#spinner').addClass('text-' + randomColor);
        }
    });
});
