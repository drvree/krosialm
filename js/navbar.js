$(document).ready(function(){
  document.onload = function(){
    $('.navbar-brand').remove("navbar-brand");
  }

});

document.onscroll = function() {
    if( $(document).scrollTop() > $('header').height() ) {
        $('nav > div.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
    }
    else {
        $('nav > div.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
    }
};
