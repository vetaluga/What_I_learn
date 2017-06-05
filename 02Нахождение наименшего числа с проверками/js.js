var a = +prompt('1-num');
var b = +prompt('2-num');
var c = +prompt('3-num');
var res;

while(isNaN(a) || isNaN(b) || isNaN(c)){
  a = +prompt('first num');
  b = +prompt('second num');
  c = +prompt('third num');
}

if((a == b) || (b == c) || (a ==c)) {
  res = 'одно из чисел одинаковое (равноценно). ' + a + ' ' + b + ' ' + c;
}
else if ((a < b) && (a < c)) {
  res = a;
}
else if((b < a) && (b < c)) {
  res = b;
}
else {
  res = c;
}
alert(res);
