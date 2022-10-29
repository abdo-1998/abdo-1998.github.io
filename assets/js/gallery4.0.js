// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'masonry'   //options: https://isotope.metafizzy.co/layout-modes.html
});
// filter functions
var filterFns = {
//   // show if number is greater than 50
//   numberGreaterThan50: function() {
//     var number = $(this).find('.number').text();
//     return parseInt( number, 10 ) > 50;
//   },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'span', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'span', function() {
    $buttonGroup.find('.active').removeClass('active');
    $( this ).addClass('active');
  });
});



//this sets the images in the grid when each image finishes loading
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});


// ALTERNATIVE TO THIS ^
// ONLOAD BODY FUNCTION
// <script>
//     function run(){
//         var $grid = $('.grid').isotope({
//           itemSelector: '.element-item',
//           layoutMode: 'masonry'   //options: https://isotope.metafizzy.co/layout-modes.html
//         });
//     }
// </script>
