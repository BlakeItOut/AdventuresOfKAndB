new Vue({
  el: '#pictures',
  data: {
    slides: 7
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
})

$(".nav-link").on('click',function(e) {
   e.preventDefault(); // stops link from loading
   $('.content').hide(); // hides all content divs
   $($(this).attr('href')).show(); //get the href and use it find which div to show
});

$(".slide").on('click',function(e) {
   e.preventDefault(); // stops link from loading
   $('.caption').hide(); // hides all content divs
   $('#' + $(this).attr('id') + "Caption").show(); //get the href and use it find which div to show
});