$(function() {

    $('#monBouton').on('click', function() {
        const message = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.";
        $('#resultat').text(message);
    });

    $('#cacherBouton').on('click', function() {
        $('#resultat').hide();
    });
})