import 'slick-carousel';
svg4everybody();

$(function() {
  /*----------PRODUCT SLIDER START--------------*/
  var $teamSlider = $('.team_slider');
  var $productsSlider = $('.products_slider');
  var $products = $productsSlider.find('.product');
  var $productsCounterElem = $('.products_counter_current');
  var productsСount = $products.length;
  $('.products_counter_total').text(productsСount);

  $productsSlider.slick({
    speed:250,
    rows:0,
    slidesToShow:1,
    slidesToScroll:1,
    appendArrows: $('.products_slider-nav')
  });

  updateSliderCount($productsSlider, $productsCounterElem);

  $products.on('mouseleave', function() {
    updateSliderCount($productsSlider, $productsCounterElem);
  });

  $('.slick-prev, .slick-next').on('click', function() {
    updateSliderCount($productsSlider, $productsCounterElem);
  });

  function updateSliderCount($slider, productsCurrent) {
    var sliderСurrentElem = $slider.find('.slick-current').data('slick-index');
    productsCurrent.text(sliderСurrentElem + 1);
  }
  /*----------PRODUCT SLIDER END--------------*/

  /*----------TEAM SLIDER START--------------*/
  $teamSlider.slick({
    speed: 250,
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
  /*----------TEAM SLIDER END--------------*/
});





/*----------ABOUT VIDEO START--------------*/

// 1. Разбить на модули
// 2. Исправить механизм отображения видео
// 3. Способ поиска переменых (get by ID...)
// 4.

// var vid =  document.getElementById('video');
// var button = document.getElementsByClassName('icon-play')[0];
// var preview = document.getElementsByClassName('about_video-preview')[0];


// function videoPlay() {

//   vid.contentWindow.play();
// }

// function videoPause() {

//   vid.contentWindow.pause();
// }

// button.addEventListener('click',function() {

//   videoPlay();
//   button.style.display = 'none';
//   preview.style.display = 'none';
// });

// vid.addEventListener('click',function() {
//   videoPause();
//   this.load();
//   this.style.zIndex = 1;
//   button.style.display = '';
//   preview.style.display = '';
// },false);

/*----------ABOUT VIDEO END--------------*/
