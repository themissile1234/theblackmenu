var tabletWidth = 965;

// expand relevant child menu on hover
$('.main-menu ul li').mouseenter(function(){
  
  if ($(window).width() < tabletWidth) {
    return false;
  }
  
  // hide other sections
  $('.section').hide();

  // reveal child menu
  var child = $(this).attr('data-item');
  var section = $(".child-menu .section[data-parent='" + child + "']");
  section.slideDown();
});

// hide child menu when we are done with it
$('.child-menu .section').mouseleave(function(){
  $(this).slideUp();  
});

// search
$('.search').hover(function() {
  // hide other sections
  $('.section').hide();  
});
$('.search-icon').click(function() {
  $('.search-field').animate({width: 'toggle'});
});

// burger button
$('.burger').click(function() {
  $('.main-menu ul li').toggle();
});

// auto toggling of menu items based on screen size
$(document).ready(function() {
    $(window).resize(function() {
        if($(window).width() >= tabletWidth) {
            // if larger or equal
            $('.main-menu ul li').show();
        } else {
            // if smaller
            $('.main-menu ul li').hide();
        }
        $('.section').hide();
    }).resize();
});