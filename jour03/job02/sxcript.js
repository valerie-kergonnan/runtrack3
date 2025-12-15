$(function() {
    let draggedElement = null;
    
    // Fonction pour initialiser les événements de drag and drop
    function initDragAndDrop() {
        $('.puzzle-piece').off('dragstart dragend dragover drop');
        $('.container').off('dragover drop dragenter dragleave');
        
        // Événements sur les pièces
        $('.puzzle-piece').on('dragstart', function(e) {
            draggedElement = this;
            $(this).css('opacity', '0.5');
            e.originalEvent.dataTransfer.effectAllowed = 'move';
        });
        
        $('.puzzle-piece').on('dragend', function(e) {
            $(this).css('opacity', '1');
            $('.container').css('background', '');
        });
        
        // Événements sur les pièces (pour réorganiser dans le même conteneur)
        $('.puzzle-piece').on('dragover', function(e) {
            e.preventDefault();
            e.originalEvent.dataTransfer.dropEffect = 'move';
            return false;
        });
        
        $('.puzzle-piece').on('dragenter', function(e) {
            e.preventDefault();
            if (this !== draggedElement) {
                $(this).css('border', '2px dashed #4CAF50');
            }
        });
        
        $('.puzzle-piece').on('dragleave', function(e) {
            $(this).css('border', 'none');
        });
        
        $('.puzzle-piece').on('drop', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).css('border', 'none');
            
            if (draggedElement !== this) {
                // Échanger les positions dans le même conteneur
                const parent = $(this).parent();
                const allPieces = parent.children('.puzzle-piece').toArray();
                const draggedIndex = allPieces.indexOf(draggedElement);
                const droppedIndex = allPieces.indexOf(this);
                
                if (draggedIndex < droppedIndex) {
                    $(this).after(draggedElement);
                } else {
                    $(this).before(draggedElement);
                }
                
                // Vérifier l'ordre après chaque déplacement
                verifierOrdre();
            }
            
            return false;
        });
        
        // Événements sur les conteneurs (pour déposer dans un conteneur vide ou à la fin)
        $('.container').on('dragover', function(e) {
            e.preventDefault();
            e.originalEvent.dataTransfer.dropEffect = 'move';
            return false;
        });
        
        $('.container').on('dragenter', function(e) {
            e.preventDefault();
            $(this).css('background', '#d4edda');
        });
        
        $('.container').on('dragleave', function(e) {
            $(this).css('background', '');
        });
        
        $('.container').on('drop', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).css('background', '');
            
            // Ajouter la pièce à la fin du conteneur
            if (draggedElement) {
                $(this).append(draggedElement);
                verifierOrdre();
            }
            
            return false;
        });
    }
    
    // Initialiser les événements au chargement
    initDragAndDrop();
    
    // Fonction pour mélanger les images
    $('#melanger').on('click', function() {
        const sourceContainer = $('#puzzle-source');
        const targetContainer = $('#puzzle-target');
        
        // Récupérer toutes les pièces des deux conteneurs
        const allPieces = sourceContainer.children('.puzzle-piece').toArray()
            .concat(targetContainer.children('.puzzle-piece').toArray());
        
        // Algorithme de mélange (Fisher-Yates)
        for (let i = allPieces.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allPieces[i], allPieces[j]] = [allPieces[j], allPieces[i]];
        }
        
        // Remettre toutes les pièces dans le conteneur source
        sourceContainer.empty();
        targetContainer.empty();
        allPieces.forEach(piece => sourceContainer.append(piece));
        
        // Réinitialiser les événements après le mélange
        initDragAndDrop();
        
        // Effacer le message
        $('#message').text('').removeClass('success error');
    });
    
    // Fonction pour vérifier si l'ordre est correct
    function verifierOrdre() {
        const targetPieces = $('#puzzle-target').children('.puzzle-piece').toArray();
        
        // Vérifier si toutes les 6 pièces sont dans le conteneur cible
        if (targetPieces.length !== 6) {
            $('#message').text('').removeClass('success error');
            return;
        }
        
        let correct = true;
        
        for (let i = 0; i < targetPieces.length; i++) {
            const position = $(targetPieces[i]).attr('data-position');
            if (parseInt(position) !== i + 1) {
                correct = false;
                break;
            }
        }
        
        if (correct) {
            $('#message').text(' Bravo, vous avez gagné').removeClass('error').addClass('success');
        } else {
            $('#message').text('Dommage vous avez perdu').removeClass('success').addClass('error');
        }
    }
});