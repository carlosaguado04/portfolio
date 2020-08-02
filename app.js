$(function () {
  var header = $(".nav-bar");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(top);
    if (scroll >= 770 && scroll <= 1565) {
      header.addClass("scrolled");
    } else if (scroll >= 2440) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
});
