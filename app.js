$(function () {
  var header = $(".nav-bar");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(top);
    if (scroll >= 770 && scroll <= 1565) {
      header.addClass("scrolled");
    } else if (scroll >= 2420) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
});

$(document).on("click", "ul li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
