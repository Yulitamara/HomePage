// SIDEBAR

$(document).ready(function () {
  // toggle sub menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  // expand and collapse the sidebar
  //   $(".menu-btn").click(function () {
  //     $(".sidebar").addClass("active-sidebar");
  //     $(".main-content").addClass("active-main-content");
  //     $(".menu-btn").css("visibility", "hidden");
  //   });

  //   $(".nav-close-btn").click(function () {
  //     $(".sidebar").removeClass("active-sidebar");
  //     $(".main-content").removeClass("active-main-content");
  //     $(".menu-btn").css("visibility", "visible");
  //   });
});

// Debit Plan Tabs

$(function () {
  $("#tabs").tabs();
});

$(function () {
  $(".link").click(function () {
    if ($(this).hasClass("active-link")) {
      return;
    }
    $(".link").removeClass("active-link");
    $(this).addClass("active-link");
  });
});

$(function () {
  $(".close-section").click(function () {
    $(".tab-content").hide();

    $(".link").removeClass("active-link");
  });
});
