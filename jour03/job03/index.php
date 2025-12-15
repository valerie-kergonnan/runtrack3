<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Jeu du Taquin</title>
    <style>
        body {
            font-family: Arial;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            text-align: center;
            background: #f5f5f5
        }

        h1 {
            color: #333;
            margin-bottom: 30px
        }

        #game-container {
            position: relative;
            margin: 20px auto
        }

        #puzzle-grid {
            display: grid;
            grid-template-columns: repeat(3, 150px);
            grid-template-rows: repeat(3, 150px);
            gap: 2px;
            background: #333;
            padding: 2px;
            border-radius: 10px;
            margin: 0 auto;
            width: fit-content
        }

        .tile {
            width: 150px;
            height: 150px;
            cursor: pointer;
            transition: all 0.3s;
            background-size: cover;
            background-position: center;
            border: 2px solid #fff;
            box-sizing: border-box
        }

        .tile:hover:not(.empty) {
            transform: scale(1.05);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)
        }

        .empty {
            background: #222 !important;
            cursor: default;
            border: 2px dashed #666
        }

        button {
            background: #4CAF50;
            color: #fff;
            padding: 15px 30px;
            margin: 20px 10px;
            font-size: 18px;
            cursor: pointer;
            border: 0;
            border-radius: 5px;
            display: inline-block
        }

        button:hover {
            background: #45a049
        }

        #message {
            font-size: 28px;
            font-weight: bold;
            margin: 20px 0;
            min-height: 40px
        }

        .success {
            color: #4CAF50
        }

        #restart {
            display: none
        }
    </style>
</head>

<body>
    <h1>Jeu du Taquin - La Plateforme_</h1>
    <button id="shuffle">Mélanger</button>
    <button id="restart">Recommencer</button>
    <div id="game-container">
        <div id="puzzle-grid"></div>
    </div>
    <div id="message"></div>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="script.js"></script>
</body>

</html>