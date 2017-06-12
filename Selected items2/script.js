function radio1(){
    var radi = document.getElementsByName('r1');
    for( i = 0; i < radi.length; i++){
      if (radi[i].checked) {
        alert('Enter ' + i)
      }
    }
}

function radio2(){
    var radi = document.getElementsByName('r2');
    for( i = 0; i < radi.length; i++){
      if (radi[i].checked) {
        alert('Enter ' + i)
      }
    }
}

function radio3(){
    var radi = document.getElementsByName('r3');
    var i = 0;
    while( i < radi.length ){
      i++;
      if (radi[i].checked) {
        alert('Enter ' + i)
      }
    }
}
