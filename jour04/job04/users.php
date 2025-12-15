<?php
// users.php

$host = "localhost";
$dbname = "utilisateurs";
$user = "root";
 $pass = "";     // change si besoin

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->query("SELECT * FROM utilisateurs");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($users);

} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
