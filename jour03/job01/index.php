<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>button</title>
    <style>
        body {
            font-family: Arial;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }

        button {
            background: #d46d6dff;
            color: white;
            padding: 10px 20px;
            margin: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <h1>cliquez sur le bouton</h1>

    <button id="monBouton">Cliquez-moi</button>
    <button id="cacherBouton">Cacher</button>

    <div id="resultat"></div>

    

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="script.js"></script>
</body>

</html>