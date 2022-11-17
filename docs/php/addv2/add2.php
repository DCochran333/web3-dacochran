<?php 

$request = json_decode($_REQUEST['request'], true);

if ($request['op'] == "add")
{
    $sum = 0.0;
    
    $ok = TRUE;

    foreach ($request['args'] as $key => $value)
    {
        $ok = $ok && preg_match("/^(-?[0-9]+([.][0-9]+)?)$/",$value);
        if ($ok) {
            $sum += (float)$value;
        }
    }
    if($ok)
    {
        $response = array('status' => 'ok', 'value' => $sum);
        // { "status" : "ok" , "value" : "324123.33" }
    }
    else 
    {
        $response = array('status' => 'fail', 'message' => 'unkown op');
    }
}
else 
{
    $response = array('status' => 'fail', 'message' => 'unkown op');
}

header('Conent-Type: application/json; charset=utf-8');
echo json_encode($response);

