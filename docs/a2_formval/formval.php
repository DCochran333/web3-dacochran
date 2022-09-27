<?php
$x=$_REQUEST['x'] ?? "";
$y=$_REQUEST['y'] ?? ""; 

$ok = TRUE;
$ok = $ok && preg_match("/^(|-?[a-z]+([,][A-Z]+)?)$/", $x);
$ok = $ok && preg_match("/^(|-?[0-9]+([.][0-9]+)?)$/", $y);

if (!$ok)
{
    exit("bad form data.");
}

if ($x == ((float) $x) && $y == ((float) $y))
{
    $z = ((float)$x) + ((float)$y);
}
else 
{
    $z = "";
}

function noHTMLentities($x)
{
    return $x;
}
?>

<!DOCTYPE html>

<form action="add.php" method="GET" >
<input type="text" name="x" placeholder="x" value="<?php echo htlmentities($x) ?>" >
+
<input type="text" name="y" placeholder="y" value="<?php echo htmlentities($y) ?>">
=
<input type="text" name="z" placeholder="x+y" value="<?php echo htmlentities($z) ?>" >
<input type="submit" value="?">
</form>
