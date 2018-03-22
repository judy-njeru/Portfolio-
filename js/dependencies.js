

// menu overlay

// $('#toggle').on("click", function() {
//   $(this).toggleClass('active');
//   $('#overlay').toggleClass('open');
//   $('#overlay').removeClass('slideLeft');
//   $('#overlay').removeClass('slideRight');
// });


// (function () {
// 	$('.hamburger-menu').on('click', function() {
// 		$('.bar').toggleClass('animate');
//     // $('.bar').css('background', 'purple');
// 	})
// })();


	$('.hamburger-menu').on('click', function() {
    $('.bar').toggleClass('animate');
    // $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('#overlay').removeClass('slideLeft');
    $('#overlay').removeClass('slideRight');

});




// more projects slideshow
$(document).ready(function(){

  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
           swipeToSlide: true,
          centerPadding: '33px',
          slidesToShow: 1
        }
      }
    ]
  });
});
