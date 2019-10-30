(function($) {
  $(function() {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 150) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});

$(document).ready(function() {
  // MODAL
  $('.sidenav').sidenav();
  $('.fixed-action-btn').floatingActionButton();
  $('.tooltipped').tooltip();
});

var header = $('header');
var range = 200;

$(window).on('scroll', function() {
  var scrollTop = $(this).scrollTop(),
    height = header.outerHeight(),
    offset = height / 1.1,
    calc = 1 - (scrollTop - offset + range) / range;

  header.css({ opacity: calc });

  if (calc > '1') {
    header.css({ opacity: 1 });
  } else if (calc < '0') {
    header.css({ opacity: 0 });
  }
});

$(window).on('load', function() {
  $('.fade').css('transition', '4s');
  $('.fade').css('opacity', 1);
});

$(window).scroll(function() {
  $('.fade').css('transition', '1s');
  $('.fade').css('opacity', 1 - $(window).scrollTop() / 500);
});

$(document).ready(function() {
  $('.dropdown-trigger').dropdown();
});
