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
$("#expand-btn-1").click(function () {
  $("#links-unexpand-1").slideToggle();
  $("#links-expand-1").slideToggle();
});

if ($(window).width() < 500) {
  $(".field-container").addClass("flex-column");
  $(".label-container").addClass("height-small");
  $(".label-text").addClass("small-font");
  $(".input-container__expand").addClass("height-big");
  $(".input-container").addClass("height-big");
}

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
