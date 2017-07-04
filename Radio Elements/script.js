var radio = document.getElementsByName('turtle');

for( var i = 0; i < radio.length; i++ ){
    radio[i].onchange = choiseTurtle;
}

function choiseTurtle(){
      console.log( this.value );
}

document.getElementById('btn').onclick = showAnswerUser;

function showAnswerUser() {
      var m = radio;
      for(var i = 0; i < m.length; i++){
          if(m[i].checked){
            alert( "You choise " + m[i].value );
            break;
          }
      }
}
