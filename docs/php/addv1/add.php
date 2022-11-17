<?php 
    $x=$_REQUEST['x'] ?? "";
    $y=$_REQUEST['y'] ?? ""; 

    //Server-side Form Validation
    //Ususally some set of regular expressions describing what kind of data is okay
    //
    // RE are ways to describe sets of strings
    // 
    // a (some noraml letter) is just {"a"} the set containing one string, the string 'a'
    //
    // xy (two regular expressions next to each other).
    //
    // all strings that can be split into two parts (where one or the other part might be empty) where the first
    // part matches x and the second part matches y.
    //
    //cat example: {"cat"} is the only string that can satify cat
    //--------------------------------------------------------------------------------
    //x|y all strings that match x and all strings that match y
    // cat example: c|a|t = {"c", "a", "t"}
    //
    // (cat|dog)(|s) allows cat or dog for first part, and empty string or s for second
    //  cat, dog, cats, dogs are all legal here [(cat|dog)(|s) = {cat, dog, cats, dogs}]
    //
    //----------------------------------------------------------------------------------------
    // x{a,b}= (xxx(a times) | xxxx(a+1 times) | .... | xxxxxx(b times))
    //x?=x{0,1}, x*=x{0,infinity}, x+=x{1,infinity}
    // EX: (a|b){2,3}= ((a\b)|(a|b)(a|b) | (a|b)(a|b)(a|b))
    // x?=x{0,1}, x*=x{0, inf}, x+=x{1,inf}
    // (cat|dog)s? s is optional
    // (A|B|C|...|Z)+ is all uppercase letters, any repeats, no empties etc ANY UPPERCASE WORD
    // [A-Z]+ --shorthand for a range ex: [0-9],[a-z],[A-Z], [:alphanum:] -- . is any single char
    //
    // [0-9]+ (decimal number)
    // [0-9]+([.][0-9]+)? -- floating point number

    $ok = TRUE;
  $ok = $ok && preg_match("/^(|-?[0-9]+([.][0-9]+)?)$/",$x);
  $ok = $ok && preg_match("/^(|-?[0-9]+([.][0-9]+)?)$/",$y);

  if (!$ok) {
    exit("bad form data.");
  }

  if ($x == ((float) $x) && $y == ((float) $y)) {
    $z = ((float)$x) + ((float)$y); 
  }  else {
    $z = "";
  }

  function nohtmlentities($x) {
    return $x;
  }
  
?>
<!DOCTYPE html>
<form action="add.php" method="GET" >
    <input type="text" name="x" placeholder="x" 
       value="<?php echo htmlentities($x) ?>">
    +
    <input type="text" name="y" placeholder="y" 
       value="<?php echo htmlentities($y) ?>"
    >
=
<input type="text" name="z" placeholder="x+y" 
    value="<?php echo htmlentities($z) ?>"
>
<input type="submit" value="?">

</form>