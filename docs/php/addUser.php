<?php

require_once('db.php');
$request = json_decode($_REQUEST['request'], true);

$name = $request['name'];
$level = 1;

$data = [
    'name' => $name,
    'level' => $level,
];

$sql = "INSERT INTO user (name, level) VALUES (:name, :level)";
$stmt= $pdo->prepare($sql);
$id = NULL;

try {
    $pdo->beginTransaction();
    $stmt->execute($data);
    $id = $pdo->lastInsertId();
    $pdo->commit();
    $response = array('status' => 'ok', 'result' => $id);
} catch(PDOExecption $e) {
    $pdo->rollback();
    $response = array('status' => 'fail', "message" => $e->getMessage());
} 

header('Conent-Type: application/json; charset=utf-8');
echo json_encode($response);

