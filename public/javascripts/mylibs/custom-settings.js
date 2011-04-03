/* Code for the Slider in the Works section */
$(document).ready(function(){
  var currentPosition = 0;
  var slideWidth = 610; // Size of each slide
  var slides = $('.slide');
  var numberOfSlides = slides.length;

  // Remove scrollbar in JS
  $('#slidesContainer').css('overflow', 'hidden');

  // Wrap all .slides with #slideInner div
  slides
    .wrapAll('<div id="slideInner"></div>')
    // Float left to display horizontally, readjust .slides width
  .css({
      'float' : 'left',
      'width' : slideWidth
    });

  // Set #slideInner width equal to total width of all slides
  $('#slideInner').css('width', slideWidth * numberOfSlides);

  // Insert controls in the DOM
  $('#work')
    .prepend('<span class="control" id="leftControl">Clicking moves left</span>')
    .append('<span class="control" id="rightControl">Clicking moves right</span>');

  // Hide left arrow control on first load
  manageControls(currentPosition);

  // Create event listeners for .controls clicks
  $('.control')
    .bind('click', function(){
    // Determine new position
  currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;
    
  // Hide / show controls
    manageControls(currentPosition);
    // Move slideInner using margin-left
    $('#slideInner').animate({
      'marginLeft' : slideWidth*(-currentPosition)
    });
  });

  // manageControls: Hides and Shows controls depending on currentPosition
  function manageControls(position){
    // Hide left arrow if position is first slide
  if(position==0){ $('#leftControl').hide() } else{ $('#leftControl').show() }
  // Hide right arrow if position is last slide
    if(position==numberOfSlides-1){ $('#rightControl').hide() } else{ $('#rightControl').show() }
  }
});


/* Code for the Fade effect for each page on clicking the main navigation */
$(function(){
    $('#content').tabs({ fxFade: true, fxSpeed: 'fast' });
  });


/* Code to get the latest tweets */
getTwitters('myTweets', {
        id: 'robotmode',  // replace with your twitter user id
        prefix: '<a href="http://twitter.com/%screen_name%">%name%</a> said: ', 
        clearContents: false, // leave the original message in place
        count: 1, 
        withFriends: true,
        ignoreReplies: false,
    enableLinks: true,
        newwindow: true
    });


/* Code for the Pretty photo effect on clicking thumbnails in Works section */
$(document).ready(function(){
  $(".gallery a[rel^='prettyPhoto']").prettyPhoto({theme:'light_rounded'});
});


