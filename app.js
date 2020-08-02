$(function () {
  var header = $(".nav-bar");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 770) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
});
