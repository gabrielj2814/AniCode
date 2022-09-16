document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        autoWidth:10,
        // gap: "10rem",
        perPage: 3,
        rewind : true,
        // breakpoints: {
        //     640: {
        //         perPage: 1,
        //     },
        // }
    });
    splide.mount();
} );