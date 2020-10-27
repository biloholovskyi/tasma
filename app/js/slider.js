$('.owl-catalog').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots: false,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:6
    }
  }
})

$('.owl-about').owlCarousel({
  loop:false,
  margin:10,
  nav:true,
  dots: true,
  items: 1
})