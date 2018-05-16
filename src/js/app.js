import 'slick-carousel';
import 'svgxuse';

$(function() {

  /*----------PRODUCT SLIDER START--------------*/

  var product_count = $('.product').length;

  $('.products_slider').slick({
    speed:250,
    rows:0,
    slidesToShow:1,
    slidesToScroll:1,
    appendArrows: $('.products_slider-nav')
  });

  function getCurrProd() {
    var slick_curr = $('.products_slider').find('.slick-current').data('slick-index');
    var curr_count = $(slick_curr);
    $('.counter_curr').text(slick_curr + 1);

  }

  getCurrProd();

  $('.product').on('mouseleave', function() {
    getCurrProd();
  });

  $('.slick-prev, .slick-next').on('click', function() {
    getCurrProd();
  });
  
  $('.counter_total').text(product_count);

});

/*----------PRODUCT SLIDER END--------------*/

/*----------TEAM SLIDER START--------------*/

$('.team_slider').slick({
  speed: 250,
  rows: 1,
  slidesToShow: 4,
  slidesToScroll: 4,
});
/*----------TEAM SLIDER END--------------*/

/*----------ABOUT VIDEO START--------------*/

var vid =  document.getElementById('video');
var button = document.getElementsByClassName('icon-play')[0];
var preview = document.getElementsByClassName('about_video-preview')[0];


function videoPlay() {

  vid.contentWindow.play();
}

function videoPause() {

  vid.contentWindow.pause();
}

button.addEventListener('click',function() {

  videoPlay();
  button.style.display = 'none';
  preview.style.display = 'none';
});

vid.addEventListener('click',function() {
  videoPause();
  this.load();
  this.style.zIndex = 1; 
  button.style.display = '';
  preview.style.display = '';
},false);

/*----------ABOUT VIDEO END--------------*/


/*  $gallery.on('init', function(event, slick){
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
  var $el = $('.slide-count-wrap').find('.total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
  var $el = $('.slide-count-wrap').find('.current');
  $el.text(currentSlide + 1);
}*/


