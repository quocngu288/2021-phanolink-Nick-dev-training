(function ($) {
  $(document).ready(function () {
    //hire navbarscroll
    $(".nav-scroll").hide();
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $(".nav-scroll").fadeIn();
        } else {
          $(".nav-scroll").fadeOut();
        }
      });
    });
  });
})(jQuery);

//sua lai dung JQUERY
const handleClickOpenSidebar = () => {
  $(".nav-mobile__menu").addClass("open");
};

const handleClickCloseSidebar = () => {
  $(".nav-mobile__menu").removeClass("open");
};

//click to show from login-register
const hanndleClickForm=(formname)=>{

}
// -------------------------------------------------------------------------
var owl1 = $(".owl-caro-bonus");
var owl2 = $(".owl-caro-hot-product");
var owl3 = $(".owl-caro-brand");
owl1.owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  responsive: {
    600: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
// $
owl2.owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    660: {
      items: 1,
    },
    800: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
owl3.owlCarousel({
  loop: true,
  margin: 35,
  nav: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 6,
    },
    800: {
      items: 7,
    },
    1000: {
      items: 9,
    },
  },
});
