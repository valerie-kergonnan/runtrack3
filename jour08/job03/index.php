<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body class="bg-gray-50">

    <header class="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <nav class="container mx-auto px-6 py-4">
            <ul class="flex justify-center space-x-8">
                <li><a href="index.php" class="text-white hover:text-blue-200 font-semibold transition duration-300">Accueil</a></li>
                <li><a href="index.php" class="text-white hover:text-blue-200 font-semibold transition duration-300">Inscription</a></li>
                <li><a href="index.php" class="text-white hover:text-blue-200 font-semibold transition duration-300">Connexion</a></li>
                <li><a href="index.php" class="text-white hover:text-blue-200 font-semibold transition duration-300">Recherche</a></li>
            </ul>
        </nav>
    </header>

    <main>

        <section>

            <h1>Creation de compte</h1>

            <form action="index.php" method="post">

                <p>Civilité :</p>
                <label>
                    <input type="radio" name="Civilite" value="Madame">
                    Madame
                </label>
                <label>
                    <input type="radio" name="Civilite" value="Monsieur">
                    Monsieur
                </label>

                <br><br>

                <label>
                    Prenom
                    <input type="text" name="Prenom">
                </label>
                <br><br>

                <label>
                    Nom
                    <input type="text" name="Nom">
                </label>
                <br><br>

                <label>
                    Adresse
                    <input type="text" name="Adresse">
                </label>
                <br><br>

                <label>
                    Email
                    <input type="email" name="Email">
                </label>
                <br><br>

                <label>
                    Mot de passe
                    <input type="password" name="MotDePasse">
                </label>
                <br><br>

                <label>
                    confirmer mot de passe
                    <input type="password" name="ConfirmerMotDePasse">
                </label>
                <br><br>

                <p>Passion :</p>
                <label>
                    <input type="checkbox" name="Passion[]" value="Informatique">
                    Informatique
                </label>
                <label>
                    <input type="checkbox" name="Passion[]" value="Voyages">
                    Voyages
                </label>
                <label>
                    <input type="checkbox" name="Passion[]" value="Sport">
                    Sport
                </label>
                <br><br>

                <label>
                    <input type="checkbox" name="Passion[]" value="Musique">
                    Musique
                </label>
                <br><br>

                <button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">envoyer</button>

            </form>
        </section>
    </main>

    <footer class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8 mt-12 shadow-2xl">
        <div class="container mx-auto px-6">
            <ul class="flex justify-center space-x-8">
                <li><a href="index.php" class="hover:text-purple-200 font-medium transition duration-300 ease-in-out transform hover:scale-110">Accueil</a></li>
                <li><a href="index.php" class="hover:text-purple-200 font-medium transition duration-300 ease-in-out transform hover:scale-110">Inscription</a></li>
                <li><a href="index.php" class="hover:text-purple-200 font-medium transition duration-300 ease-in-out transform hover:scale-110">Connexion</a></li>
                <li><a href="index.php" class="hover:text-purple-200 font-medium transition duration-300 ease-in-out transform hover:scale-110">Recherche</a></li>
            </ul>
        </div>
    </footer>

</body>

</html>