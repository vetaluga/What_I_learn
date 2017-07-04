var timer;
var left = 0;

autoSlider();

function startSlader(){
    autoSlider();
}

function autoSlider(){
    timer = setTimeout(function(){
      var gallery = document.getElementById('gallery');
      left = left - 400;
      if( left < -3200){
        left = 0;
        clearTimeout(timer);
      }
      gallery.style.left = left + 'px';
      autoSlider();
    }, 3000);

}

function stopSlider(){
    clearTimeout(timer);
}

//анонимная цункция???
//пробелы картинок и убирается флоатом
//clearTime out ???
