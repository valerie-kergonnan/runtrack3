<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
</head>
<body>
   
<header>
    <nav>
        <ul>
            <li><a href="index.php">Accueil</a></li>
            <li><a href="index.php">Inscription</a></li>
            <li><a href="index.php">Connexion</a></li>
            <li><a href="index.php">Recherche</a></li>
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

<buttom type="submit">Envoyer</button>

</form>
</section>
</main>

<footer>
    <ul>
        <li><a href="index.php">Accueil</a></li>
        <li><a href="index.php">Inscription</a></li>
        <li><a href="index.php">Connexion</a></li>
        <li><a href="index.php">Recherche</a></li>
    </ul>
</footer>

</body>
</html>