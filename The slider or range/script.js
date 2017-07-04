function fun1() {
    var rng = document.getElementById('r1');
    var i1 = document.getElementById('i1');
    var p = document.getElementById('one');
    var div = document.getElementById('test');
    div.style.width = rng.value + 'px';
    i1.value = rng.value;
    p.innerHTML = rng.value;
}

function fun2(){
    var rng = document.getElementById('r2');
    var div = document.getElementById('block');
    var num = document.getElementById('numbs');
    num.innerHTML = rng.value;
    div.style.width = rng.value + 'px';
    div.style.height = rng.value + 'px';
}
