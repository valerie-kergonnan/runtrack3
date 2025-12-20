<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
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

    <main class="container mx-auto px-4 py-12">

        <section class="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-95">

            <h1 class="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Création de compte</h1>

            <form action="index.php" method="post" class="space-y-6">

                <!-- Civilité -->
                <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-md">
                    <p class="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                        <i class="fas fa-venus-mars text-purple-600 mr-3"></i>
                        Civilité :
                    </p>
                    <div class="flex gap-6">
                        <label class="flex items-center cursor-pointer group">
                            <input type="radio" name="Civilite" value="Madame" class="w-5 h-5 text-purple-600 focus:ring-purple-500 focus:ring-2 cursor-pointer">
                            <span class="ml-2 text-gray-700 group-hover:text-purple-600 transition">Madame</span>
                        </label>
                        <label class="flex items-center cursor-pointer group">
                            <input type="radio" name="Civilite" value="Monsieur" class="w-5 h-5 text-blue-600 focus:ring-blue-500 focus:ring-2 cursor-pointer">
                            <span class="ml-2 text-gray-700 group-hover:text-blue-600 transition">Monsieur</span>
                        </label>
                    </div>
                </div>

                <!-- Prénom -->
                <div class="relative">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        <i class="fas fa-user text-blue-500 mr-2"></i>
                        Prénom
                    </label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                            <i class="fas fa-user"></i>
                        </span>
                        <input type="text" name="Prenom"
                            class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition duration-300 shadow-sm hover:shadow-md bg-white bg-opacity-80"
                            placeholder="Entrez votre prénom">
                    </div>
                </div>

                <!-- Nom -->
                <div class="relative">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        <i class="fas fa-id-card text-indigo-500 mr-2"></i>
                        Nom
                    </label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                            <i class="fas fa-id-card"></i>
                        </span>
                        <input type="text" name="Nom"
                            class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition duration-300 shadow-sm hover:shadow-md bg-white bg-opacity-80"
                            placeholder="Entrez votre nom">
                    </div>
                </div>

                <!-- Adresse -->
                <div class="relative">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        <i class="fas fa-home text-green-500 mr-2"></i>
                        Adresse
                    </label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                            <i class="fas fa-home"></i>
                        </span>
                        <input type="text" name="Adresse"
                            class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 transition duration-300 shadow-sm hover:shadow-md bg-white bg-opacity-80"
                            placeholder="Entrez votre adresse">
                    </div>
                </div>

                <!-- Email -->
                <div class="relative">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        <i class="fas fa-envelope text-red-500 mr-2"></i>
                        Email
                    </label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <input type="email" name="Email"
                            class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-4 focus:ring-red-100 transition duration-300 shadow-sm hover:shadow-md bg-white bg-opacity-80"
                            placeholder="exemple@email.com">
                    </div>
                </div>

                <!-- Mot de passe -->
                <div class="relative">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        <i class="fas fa-lock text-orange-500 mr-2"></i>
                        Mot de passe
                    </label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                            <i class="fas fa-lock"></i>
                        </span>
                        <input type="password" name="MotDePasse"
                            class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition duration-300 shadow-sm hover:shadow-md bg-white bg-opacity-80"
                            placeholder="••••••••">
                    </div>
                </div>

                <!-- Confirmer mot de passe -->
                <div class="relative">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        <i class="fas fa-lock-open text-yellow-500 mr-2"></i>
                        Confirmer mot de passe
                    </label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                            <i class="fas fa-lock-open"></i>
                        </span>
                        <input type="password" name="ConfirmerMotDePasse"
                            class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition duration-300 shadow-sm hover:shadow-md bg-white bg-opacity-80"
                            placeholder="••••••••">
                    </div>
                </div>

                <!-- Passions -->
                <div class="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6 rounded-xl shadow-md">
                    <p class="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                        <i class="fas fa-heart text-pink-600 mr-3"></i>
                        Passions :
                    </p>
                    <div class="grid grid-cols-2 gap-4">
                        <label class="flex items-center cursor-pointer group bg-white bg-opacity-60 p-3 rounded-lg hover:bg-opacity-100 hover:shadow-md transition duration-300">
                            <input type="checkbox" name="Passion[]" value="Informatique"
                                class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer">
                            <span class="ml-3 text-gray-700 group-hover:text-blue-600 transition">
                                <i class="fas fa-laptop-code text-blue-500 mr-2"></i>
                                Informatique
                            </span>
                        </label>
                        <label class="flex items-center cursor-pointer group bg-white bg-opacity-60 p-3 rounded-lg hover:bg-opacity-100 hover:shadow-md transition duration-300">
                            <input type="checkbox" name="Passion[]" value="Voyages"
                                class="w-5 h-5 text-green-600 rounded focus:ring-green-500 focus:ring-2 cursor-pointer">
                            <span class="ml-3 text-gray-700 group-hover:text-green-600 transition">
                                <i class="fas fa-plane text-green-500 mr-2"></i>
                                Voyages
                            </span>
                        </label>
                        <label class="flex items-center cursor-pointer group bg-white bg-opacity-60 p-3 rounded-lg hover:bg-opacity-100 hover:shadow-md transition duration-300">
                            <input type="checkbox" name="Passion[]" value="Sport"
                                class="w-5 h-5 text-red-600 rounded focus:ring-red-500 focus:ring-2 cursor-pointer">
                            <span class="ml-3 text-gray-700 group-hover:text-red-600 transition">
                                <i class="fas fa-running text-red-500 mr-2"></i>
                                Sport
                            </span>
                        </label>
                        <label class="flex items-center cursor-pointer group bg-white bg-opacity-60 p-3 rounded-lg hover:bg-opacity-100 hover:shadow-md transition duration-300">
                            <input type="checkbox" name="Passion[]" value="Musique"
                                class="w-5 h-5 text-purple-600 rounded focus:ring-purple-500 focus:ring-2 cursor-pointer">
                            <span class="ml-3 text-gray-700 group-hover:text-purple-600 transition">
                                <i class="fas fa-music text-purple-500 mr-2"></i>
                                Musique
                            </span>
                        </label>
                    </div>
                </div>

                <!-- Bouton -->
                <button type="submit"
                    class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95">
                    <i class="fas fa-paper-plane mr-2"></i>
                    Envoyer
                </button>

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