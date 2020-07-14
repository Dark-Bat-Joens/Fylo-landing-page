// Flickity
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  pageDots: false,
  prevNextButtons: true,
  autoPlay: false, //1500
  cellAlign: 'left',
  contain: true
 });