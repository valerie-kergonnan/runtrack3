<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Puzzle Arc-en-ciel</title>
    <style>
        body {
            font-family: Arial;
            max-width: 900px;
            margin: 50px auto;
            padding: 20px;
            text-align: center
        }

        button {
            background: #4CAF50;
            color: #fff;
            padding: 15px 30px;
            margin: 20px 0;
            font-size: 18px;
            cursor: pointer;
            border: 0;
            border-radius: 5px
        }

        button:hover {
            background: #45a049
        }

        .container {
            display: flex;
            justify-content: center;
            gap: 5px;
            margin: 20px 0;
            min-height: 200px;
            padding: 20px;
            border-radius: 10px
        }

        #puzzle-source {
            background: #ffe6e6
        }

        #puzzle-target {
            background: #e6f7ff;
            border: 3px dashed #4CAF50
        }

        .puzzle-piece {
            cursor: move;
            transition: transform .2s
        }

        .puzzle-piece:hover {
            transform: scale(1.05)
        }

        .puzzle-piece img {
            display: block;
            height: 200px;
            width: auto
        }

        #message {
            font-size: 24px;
            font-weight: bold;
            margin-top: 20px;
            min-height: 30px
        }

        .success {
            color: green
        }

        .error {
            color: red
        }
    </style>
</head>

<body>
    <h1>Puzzle Arc-en-ciel</h1>
    <button id="melanger">Mélanger</button>
    <h2>Pièces mélangées</h2>
    <div id="puzzle-source" class="container">
        <div class="puzzle-piece" draggable="true" data-position="1"><img src="asset/arc1.png" alt="Arc 1"></div>
        <div class="puzzle-piece" draggable="true" data-position="2"><img src="asset/arc2.png" alt="Arc 2"></div>
        <div class="puzzle-piece" draggable="true" data-position="3"><img src="asset/arc3.png" alt="Arc 3"></div>
        <div class="puzzle-piece" draggable="true" data-position="4"><img src="asset/arc4.png" alt="Arc 4"></div>
        <div class="puzzle-piece" draggable="true" data-position="5"><img src="asset/arc5.png" alt="Arc 5"></div>
        <div class="puzzle-piece" draggable="true" data-position="6"><img src="asset/arc6.png" alt="Arc 6"></div>
    </div>
    <h2>Zone de reconstruction</h2>
    <div id="puzzle-target" class="container"></div>
    <div id="message"></div>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="sxcript.js"></script>
</body>

</html>