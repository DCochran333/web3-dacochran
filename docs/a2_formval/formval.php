<?php
$x1=$_REQUEST['x1'] ?? "";
$y1=$_REQUEST['y1'] ?? ""; 
$x2=$_REQUEST['x2'] ?? "";
$y2=$_REQUEST['y2'] ?? ""; 

$ok = TRUE;
$ok = $ok && preg_match("/^(|-?[0-9]+([.][0-9]+)?)$/",$x1);
$ok = $ok && preg_match("/^(|-?[0-9]+([.][0-9]+)?)$/",$y1);
$ok = $ok && preg_match("/^(|-?[0-9]+([.][0-9]+)?)$/",$x2);
$ok = $ok && preg_match("/^(|-?[0-9]+([.][0-9]+)?)$/",$y2);


if (!$ok)
{
    exit("bad form data.");
}
else
{
$xdist = (((float)$x2) - ((float)$x1)) * (((float)$x2) - ((float)$x1));
$ydist = (((float)$y2) - ((float)$y1)) * (((float)$y2) - ((float)$y1));
$z = sqrt($xdist + $ydist);
}
?>

<!DOCTYPE html>
    <head>
        <title>
            Page Demonstrating Form Validation
        </title>
    </head>
    <body>
        <h1>Assingment 2: Form Validation</h1>
        <form action="formval.php" method="get">
            (
            <input type="text" name="x1" placeholder="Enter a value for x1" value=<?php echo htmlentities($x1)?>>
            ,
            <input type="text" name="y1" placeholder="Enter a value for y1" value=<?php echo htmlentities($y1)?>>
            )
            
        </br>
            (
            <input type="text" name="x2" placeholder="Enter a value for x2" value=<?php echo htmlentities($x2)?>>
            ,
            <input type="text" name="y2" placeholder="Enter a value for y2" value=<?php echo htmlentities($y2)?>>
            )
        </br>
            <input type="text" name="z" placeholder="Distance between point 1 and 2" value=<?php echo htmlentities($z)?>>
            <input type="submit" value="?">
        </form>
    </body>

</html>