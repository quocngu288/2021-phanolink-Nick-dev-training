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
//-------------------------------------------------------------------------
//click to show from login-register
$("#title-login").click(function () {
  console.log("login clicl");
  $("#title-login").addClass("active");
  $("#title-register").removeClass("active");
  // $(".left__form-register").slideUp("slow", function () {
  //   $(".left__form-login").slideDown("slow");
  // });
  $(".left__form-register").hide(0, function () {
    $(".left__form-login").show();
  });
});
$("#title-register").click(function () {
  console.log("register clicl");
  $("#title-register").addClass("active");
  $("#title-login").removeClass("active");
  // $(".left__form-login").slideUp("slow", function () {
  //   $(".left__form-register").slideDown("slow");
  // });
  $(".left__form-login").hide(0, function () {
    $(".left__form-register").show();
  });
});
//-------------------------------------------------------------------------
// click to show not pass/ form success
$("#ModalLogin").on("shown.bs.modal", () => {
  console.log("show fomr");
  $(".dialog__content-notpass").css("display", "none");
  $(".dialog__content-account").css("display", "block");
});
$(".form__not-pass > a").click((e) => {
  e.preventDefault();
  $(".dialog__content-account").css("display", "none");
  $(".dialog__content-notpass").css("display", "block");
});
$("#createAccount").click((e) => {
  e.preventDefault();
  $("#form-notpass").css("display", "none");
  $("#notpass-success").css("display", "block");
});
$("#btnRegister").click((e) => {
  e.preventDefault();
  $(".left__form-register").css("display", "none");
  $(".left__form-register-success").css("display", "block");
});
// -------------------------------------------------------------------------
// own carosel
var owl1 = $(".owl-caro-bonus");
var owl2 = $(".owl-caro-hot-product");
var owl3 = $(".owl-caro-brand");
var owl4 = $(".owl-caro-banner");
owl1.owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
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
owl4.owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  responsive: {
    600: {
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
