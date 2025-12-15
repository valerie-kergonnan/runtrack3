<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filtrage Pokémon</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            background: #f5f5f5
        }

        h1 {
            color: #333;
            text-align: center
        }

        #filterForm {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px
        }

        .form-group {
            display: inline-block;
            margin-right: 15px;
            margin-bottom: 10px
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555
        }

        input[type="text"],
        select {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 200px
        }

        button {
            background: #4CAF50;
            color: #fff;
            padding: 10px 25px;
            border: 0;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px
        }

        button:hover {
            background: #45a049
        }

        #results {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px
        }

        .pokemon-card {
            background: #fff;
            border-radius: 10px;
            padding: 15px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s
        }

        .pokemon-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2)
        }

        .pokemon-id {
            color: #888;
            font-size: 14px
        }

        .pokemon-name {
            font-size: 20px;
            font-weight: bold;
            color: #333;
            margin: 10px 0
        }

        .pokemon-types {
            display: flex;
            gap: 5px;
            flex-wrap: wrap
        }

        .type-badge {
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 12px;
            color: #fff;
            font-weight: bold
        }

        .type-Grass {
            background: #78C850
        }

        .type-Poison {
            background: #A040A0
        }

        .type-Fire {
            background: #F08030
        }

        .type-Water {
            background: #6890F0
        }

        .type-Bug {
            background: #A8B820
        }

        .type-Normal {
            background: #A8A878
        }

        .type-Electric {
            background: #F8D030
        }

        .type-Ground {
            background: #E0C068
        }

        .type-Fairy {
            background: #EE99AC
        }

        .type-Fighting {
            background: #C03028
        }

        .type-Psychic {
            background: #F85888
        }

        .type-Rock {
            background: #B8A038
        }

        .type-Ghost {
            background: #705898
        }

        .type-Ice {
            background: #98D8D8
        }

        .type-Dragon {
            background: #7038F8
        }

        .type-Dark {
            background: #705848
        }

        .type-Steel {
            background: #B8B8D0
        }

        .type-Flying {
            background: #A890F0
        }

        .no-results {
            text-align: center;
            padding: 40px;
            color: #888;
            font-size: 18px
        }
    </style>
</head>

<body>
    <h1>🐾 Filtrage Pokémon</h1>

    <div id="filterForm">
        <div class="form-group">
            <label for="idFilter">ID:</label>
            <input type="text" id="idFilter" >
        </div>

        <div class="form-group">
            <label for="nameFilter">Nom:</label>
            <input type="text" id="nameFilter" >
        </div>

        <div class="form-group">
            <label for="typeFilter">Type:</label>
            <select id="typeFilter">
                <option value="">Tous les types</option>
                <option value="Grass">Grass</option>
                <option value="Poison">Poison</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Bug">Bug</option>
                <option value="Normal">Normal</option>
                <option value="Electric">Electric</option>
                <option value="Ground">Ground</option>
                <option value="Fairy">Fairy</option>
                <option value="Fighting">Fighting</option>
                <option value="Psychic">Psychic</option>
                <option value="Rock">Rock</option>
                <option value="Ghost">Ghost</option>
                <option value="Ice">Ice</option>
                <option value="Dragon">Dragon</option>
                <option value="Dark">Dark</option>
                <option value="Steel">Steel</option>
                <option value="Flying">Flying</option>
            </select>
        </div>

        <div class="form-group">
            <button id="filterBtn">Filtrer</button>
        </div>
    </div>

    <div id="results"></div>

    <script src="script.js"></script>
</body>

</html>