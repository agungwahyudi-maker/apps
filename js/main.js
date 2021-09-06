$(document).ready(function () {
  // navbar
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });
  //video popup
  const videoSrc = $("#player-1").attr("src");
  $(".btn-video-play, .video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "") {
        $("#player-1").attr("src", videoSrc);
      }
    }
  });
  //carousel features
  $(".features-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  //Apps Screenshoot
  $(".screenshoot-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Testimonials
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Team Carousel
  $(".team-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // scroll
  $.scrollIt({
    topOffset: -50,
  });

  // Navbar-collapse
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Theme
  function toggleTheme() {
    if (localStorage.getItem("agung-theme") != null) {
      if (localStorage.getItem("agung-theme") === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }
  toggleTheme();

  $(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("agung-theme", "dark");
    } else {
      localStorage.setItem("agung-theme", "light");
    }
  });
  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-theme i").removeClass("fa-moon");
      $(".toggle-theme i").addClass("fa-sun");
    } else {
      $(".toggle-theme i").removeClass("fa-sun");
      $(".toggle-theme i").addClass("fa-moon");
    }
  }

  // Preloader
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
  });
});
