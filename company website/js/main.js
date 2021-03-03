
 $(function () {
  "use strict";
 
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();

    $("body").niceScroll({cursorborder:"",autohidemode:false,cursorcolor:"#003781",boxzoom:true});
    $(window).on('load', function() {

     

});
$('.loading').fadeOut(2000);
$('html').css("overflow", "visible");


  $('.collapsible').collapsible();


  $('.toggle-menu').click(function(){
     $('.exo-menu').toggleClass('display');
     
  });

  // when click on li in featured-work
$('.featured-work ul li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
 
  if ($(this).data('class') === 'all') {
      $('.shuffle-image .col').css('opacity', '1');
      
  } else {
      $('.shuffle-image .col').css('opacity', '.6');
      $($(this).data('class')).parent().css("opacity", "1");
  
  }
});

$('.counter').counterUp({
  delay: 10,
  time: 2000
});
  
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
})




});