$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    //    autoWidth: true,
    items: 3,
    nav:false,
    smartSpeed: 1000,
    autoHeight: true,
    autoplay: true,    
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})