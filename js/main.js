new Vue({
  el: '#pictures',
  data: {
    slides: 7,
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
})

$(".nav-link").on('click',function(e) {
  $('.content').hide(); // hides all content divs
  $($(this).attr('href')).show(); //get the href and use it find which div to show
});

$("#homeLink").on('click',function(e) {
  $('.content').hide(); // hides all content divs
  $($(this).attr('href')).show(); //get the href and use it find which div to show
});

$(".slide").on('click',function(e) {
  $('.caption').hide(); // hides all caption divs
  $('#' + $(this).attr('id') + "Caption").show(); //get the slide number and use it find which div to show
});

$(function() {
  $('.content').hide(); // hides all content divs
  $(window.location.hash).show(); //get the href and use it find which div to show
  $('.caption').hide(); // hides all caption divs
  $('#slide1Caption').show(); //get the slide number and use it find which div to show
  if(window.location.hash==""){
    $('#home').show();
  }
});