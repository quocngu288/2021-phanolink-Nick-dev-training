(function ($) {
  $(document).ready(function () {
    //hire navbarscroll
    $(".nav-scroll").hide();
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
          $(".nav-scroll").fadeIn();

          // $(".desktop-header").addClass("fixed");
        } else {
          $(".nav-scroll").fadeOut();
          // $(".desktop-header").removeClass("fixed");
        }
      });
    });
  });
})(jQuery);

// $("#nav-mobile__bars").click(function () {
//   console.log("click");
//   $("#nav-mobile__menu").addClass("open");
// });
// $(window).click(function () {
//   $("#nav-mobile__menu").removeClass("open");
// });

const handleClickOpenSidebar = () => {
  document.querySelector(".nav-mobile__menu").classList.add("open");
};

const handleClickCloseSidebar = () => {
  document.querySelector(".nav-mobile__menu").classList.remove("open");
};
window.onclick = function (e) {
  if (e.target == $(".nav-mobile__menu")) {
    document.querySelector(".nav-mobile__menu").classList.remove("open");
  }
};
