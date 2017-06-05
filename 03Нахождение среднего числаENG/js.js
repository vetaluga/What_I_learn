var x = +prompt('Introductory first number');
var y = +prompt('Introductory second number');
var z = +prompt('Introductory third number');
var res;

while (isNaN(x) || isNaN(y) || isNaN(z)){
   x = +prompt('Enter a normal number. Introductory first number');
   y = +prompt('Enter a normal number. Introductory second number');
   z = +prompt('Enter a normal number. Introductory third number');
}
if ((x == y) || (x == z) || (y == z)) {
  res = 'Impossible find the average number';
}
else if(((x > y) && (x < z)) || ((x < y) && (x > z))){
    res = x;
  }
  else if(((y > x) && (y < z)) || ((y < x) && (y > z))){
      res = y;
  }
  else {
    res = z;
  }
  alert(res);
