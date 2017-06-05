var x = +prompt('Введите число');

while(isNaN(x)) {
  x = +prompt('Введи только цифры');
}

alert(x * 2);
