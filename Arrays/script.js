var numbers = ['One', 'Two', 'Three', 'Four'];

function fun1(){
  var p = document.getElementById('out');
  var str = '';
  for( var i = 0; i < numbers.length; i++){
    str += i + ' -- ' + numbers[i] + '<br>';
  }
    p.innerHTML = str;
}

fun1();

function push(){
    var i1 = document.getElementById('in1').value;
    numbers.push(i1);
    fun1();
}

function pop(){
    numbers.pop();
    fun1();
}
