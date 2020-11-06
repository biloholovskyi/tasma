$('.owl-catalog').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots: false,
  responsive:{
    0:{
      items:3,
      dots: true
    },
    600:{
      items:3,
      dots: true
    },
    800:{
      items: 4
    },
    1200:{
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