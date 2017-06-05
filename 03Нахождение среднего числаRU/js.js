 var a = +prompt('1 - number');
 var b = +prompt('2 - number');
 var c = +prompt('3 - number');
 var res;


while(isNaN(a) || isNaN(b) || isNaN(c)){
  a = +prompt('1! - number');
  b = +prompt('2! - number');
  c = +prompt('3! - number');
}
if((a == b) || (b == c) || (a == c)){
  res = 'Введены равноценные числа или пропущена одна из строк '
}
else if(((a > b) && (a < c)) || ((a < b) && (a > c))) {
  res = a;
}
else if ((b > a && b < c) || (b < a && b > c)) {
  res = b;
} else {
  res = c;
}
alert(res);
