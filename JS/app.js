// SIDEBAR
$(function () {
  $("#sidebar-out-btn").click(function () {
    $(".sidebar").toggle();
    $(".main-content").addClass("active-sidebar");
  });
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

// Expand Section
$(".links-expanded").hide();

$("#expand-btn-1").click(function () {
  $("#links-unexpand-1").addClass("links-unexpand-disabled");
  $("#title-text-1").addClass("type-header-disabled");
  $("#expand-btn-1").hide();
  $("#links-expanded-1").slideToggle();
});

$("#links-unexpand-1").click(function () {
  $("#links-unexpand-1").removeClass("links-unexpand-disabled");
  $("#title-text-1").removeClass("type-header-disabled");
  $("#expand-btn-1").show();
  $("#links-expanded-1").hide();
});

$("#expand-btn-2").click(function () {
  $("#links-unexpand-2").addClass("links-unexpand-disabled");
  $("#title-text-2").addClass("type-header-disabled");
  $("#expand-btn-2").hide();
  $("#links-expanded-2").slideToggle();
});

$("#links-unexpand-2").click(function () {
  $("#links-unexpand-2").removeClass("links-unexpand-disabled");
  $("#title-text-2").removeClass("type-header-disabled");
  $("#expand-btn-2").show();
  $("#links-expanded-2").hide();
});

$("#expand-btn-3").click(function () {
  $("#links-unexpand-3").addClass("links-unexpand-disabled");
  $("#title-text-3").addClass("type-header-disabled");
  $("#expand-btn-3").hide();
  $("#links-expanded-3").slideToggle();
});

$("#links-unexpand-3").click(function () {
  $("#links-unexpand-3").removeClass("links-unexpand-disabled");
  $("#title-text-3").removeClass("type-header-disabled");
  $("#expand-btn-3").show();
  $("#links-expanded-3").hide();
});

$("#expand-btn-4").click(function () {
  $("#links-unexpand-4").addClass("links-unexpand-disabled");
  $("#title-text-4").addClass("type-header-disabled");
  $("#expand-btn-4").hide();
  $("#links-expanded-4").slideToggle();
});

$("#links-unexpand-4").click(function () {
  $("#links-unexpand-4").removeClass("links-unexpand-disabled");
  $("#title-text-4").removeClass("type-header-disabled");
  $("#expand-btn-4").show();
  $("#links-expanded-4").hide();
});

// if ($(window).width() < 500) {
//   $(".field-container").addClass("flex-column");
//   $(".label-container").addClass("height-small");
//   $(".label-text").addClass("small-font");
//   $(".input-container__expand").addClass("height-big");
//   $(".input-container").addClass("height-big");
// }

// Display Change btn
$("#display-options-btn").click(function () {
  $(".display-options").toggleClass("opacity-1");
});

$("#display-btn").click(function () {
  $(".cards-content").toggle();
  $(".cards-content--grid-display").toggleClass("active-grid-display");
});

$(".bottom-navbar-btns--list").hide();

$(".more-btn").click(function () {
  $(".bottom-navbar-btns--list").toggle();
});
