<?php

require_once('db.php');

$stmt = $pdo->query("SELECT * FROM user");
$rows = array();
while ($row = $stmt->fetch()) {
    array_push($rows,$row);
}

header('Conent-Type: application/json; charset=utf-8');
echo json_encode($response);
