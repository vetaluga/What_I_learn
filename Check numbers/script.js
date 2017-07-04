function fun1(){
  var numberOne, addNumber,result;
  numberOne = 100;
  addNumber = document.getElementById('num1').value;
  if(addNumber > numberOne){
    result = 'Number > 100';
  } else if(addNumber == numberOne){
    result = 'Number = 100';
  }else if( addNumber == isNaN(addNumber)){
    result = 'Please write number';
  } else if( addNumber < numberOne){
    result = 'Number < 100';
  } else {
    result = 'Please write number';
  }
  document.getElementById('out').innerHTML = result
}
