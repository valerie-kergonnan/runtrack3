$(function() {
    let grid = [];
    let emptyPos = { row: 2, col: 2 }; // Position de la case vide (bas-droite)
    let gameBlocked = false;
    
    // Initialiser le jeu
    function initGame() {
        grid = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 0]  // 0 = case vide
        ];
        emptyPos = { row: 2, col: 2 };
        gameBlocked = false;
        $('#message').text('').removeClass('success');
        $('#restart').hide();
        renderGrid();
    }
    
    // Afficher la grille
    function renderGrid() {
        $('#puzzle-grid').empty();
        
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const value = grid[row][col];
                const tile = $('<div>');
                
                if (value === 0) {
                    tile.addClass('tile empty');
                } else {
                    tile.addClass('tile')
                        .css('background-image', `url(assets/${value}.PNG)`)
                        .attr('data-row', row)
                        .attr('data-col', col)
                        .attr('data-value', value);
                }
                
                $('#puzzle-grid').append(tile);
            }
        }
        
        // Ajouter les événements de clic
        $('.tile:not(.empty)').on('click', function() {
            if (!gameBlocked) {
                const row = parseInt($(this).attr('data-row'));
                const col = parseInt($(this).attr('data-col'));
                moveTile(row, col);
            }
        });
    }
    
    // Déplacer une tuile
    function moveTile(row, col) {
        // Vérifier si la case vide est adjacente
        const rowDiff = Math.abs(row - emptyPos.row);
        const colDiff = Math.abs(col - emptyPos.col);
        
        if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
            // Échanger la tuile avec la case vide
            grid[emptyPos.row][emptyPos.col] = grid[row][col];
            grid[row][col] = 0;
            emptyPos = { row, col };
            
            renderGrid();
            checkWin();
        }
    }
    
    // Vérifier si le joueur a gagné
    function checkWin() {
        const target = [[1,2,3],[4,5,6],[7,8,0]];
        
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (grid[row][col] !== target[row][col]) {
                    return;
                }
            }
        }
        
        // Gagné !
        gameBlocked = true;
        $('#message').text('Vous avez gagné').addClass('success');
        $('#restart').show();
        $('#shuffle').hide();
    }
    
    // Mélanger le puzzle
    function shuffleGrid() {
        // Faire 100 mouvements aléatoires valides
        for (let i = 0; i < 100; i++) {
            const validMoves = [];
            
            // Trouver les mouvements valides (tuiles adjacentes à la case vide)
            if (emptyPos.row > 0) validMoves.push({ row: emptyPos.row - 1, col: emptyPos.col });
            if (emptyPos.row < 2) validMoves.push({ row: emptyPos.row + 1, col: emptyPos.col });
            if (emptyPos.col > 0) validMoves.push({ row: emptyPos.row, col: emptyPos.col - 1 });
            if (emptyPos.col < 2) validMoves.push({ row: emptyPos.row, col: emptyPos.col + 1 });
            
            // Choisir un mouvement aléatoire
            const move = validMoves[Math.floor(Math.random() * validMoves.length)];
            
            // Déplacer
            grid[emptyPos.row][emptyPos.col] = grid[move.row][move.col];
            grid[move.row][move.col] = 0;
            emptyPos = move;
        }
        
        renderGrid();
    }
    
    // Bouton Mélanger
    $('#shuffle').on('click', function() {
        shuffleGrid();
        $('#message').text('').removeClass('success');
    });
    
    // Bouton Recommencer
    $('#restart').on('click', function() {
        $('#shuffle').show();
        initGame();
        shuffleGrid();
    });
    
    // Démarrer le jeu
    initGame();
    shuffleGrid();
});