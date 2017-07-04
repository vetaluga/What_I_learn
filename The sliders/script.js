// function fun1() {
//  var rtl=document.getElementById('rtl');
//  var rtr=document.getElementById('rtr');
//  var rbr=document.getElementById('rbr');
//  var rbl=document.getElementById('rbl');
//  var ttl=document.getElementById('ttl');
//  var ttr=document.getElementById('ttr');
//  var tbr=document.getElementById('tbr');
//  var tbl=document.getElementById('tbl');
//
//  var block =document.getElementById('block');
//
//  ttl.value=rtl.value;
//  ttr.value=rtr.value;
//  tbr.value=rbr.value;
//  tbl.value=rbl.value;
//
// block.style.borderRadius=rtl.value + "px " + rtr.value + "px " + rbr.value + "px " + rbl.value + "px ";
// }
/*function fun1(){
  var rtl = document.getElementById('rtl').value;
  var rtr = document.getElementById('rtr').value;
  var rbl = document.getElementById('rbl').value;
  var rbr = document.getElementById('rbr').value;
  var ttl = document.getElementById('ttl');
  var ttr = document.getElementById('ttr');
  var tbl = document.getElementById('tbl');
  var tbr = document.getElementById('tbr');

  var block = document.getElementById('block');

  ttl.value = rtl;
  ttr.value = rtr;
  tbl.value = rbl;
  tbr.value = rbr;

  block.style.borderRadius = rtl+'px ' +rtr+'px ' +rbr+'px ' + rbl+ 'px ';
}*/

function fun1(){
    var rangeTopleft = document.getElementById('rtl').value;
    var rangeTopRight = document.getElementById('rtr').value;
    var rangeBottomLeft = document.getElementById('rbl').value;
    var rangeBottomRight = document.getElementById('rbr').value;
    var textTopLeft = document.getElementById('ttl');
    var textTopRight = document.getElementById('ttr');
    var textBottomLeft = document.getElementById('tbl');
    var textBottomRight = document.getElementById('tbr');

    var block = document.getElementById('block');

    textTopLeft.value = rangeTopleft;
    textTopRight.value = rangeTopRight;
    textBottomLeft.value = rangeBottomLeft;
    textBottomRight.value = rangeBottomRight;

    block.style.borderRadius = rangeTopleft + 'px ' + rangeTopRight + 'px ' +rangeBottomLeft + 'px ' + rangeBottomRight + 'px ';
}
