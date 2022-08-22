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

$(".big-expand-btn, .links-unexpand").click(function () {
  $(".links-unexpand").addClass("links-unexpand-clicked");
  $(".expand-section").addClass("expand-section-clicked");
});

// links
$("#expand-btn-1, #links-unexpand-1").click(function () {
  $("#links-unexpand-1").toggleClass("links-unexpand-focus");
  $("#links-expanded-1").slideToggle();
  $("#expand-btn-1").html() == "close"
    ? $("#expand-btn-1").html("expand_more")
    : $("#expand-btn-1").html("close");

  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#links-expanded-1").offset().top,
    },
    1000
  );
});

$("#close-links-expaned-1").click(function () {
  $("#links-unexpand-1").toggleClass("links-unexpand-focus");
  $("#links-expanded-1").slideToggle();
  $("#expand-btn-1").html() == "close"
    ? $("#expand-btn-1").html("expand_more")
    : $("#expand-btn-1").html("close");
});

// Stages
$("#expand-btn-2, #links-unexpand-2").click(function () {
  $("#links-unexpand-2").toggleClass("links-unexpand-focus");
  $("#links-expanded-2").slideToggle();
  $("#expand-btn-2").html() == "close"
    ? $("#expand-btn-2").html("expand_more")
    : $("#expand-btn-2").html("close");

  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#links-expanded-2").offset().top,
    },
    1000
  );
});

$("#close-links-expaned-2").click(function () {
  $("#links-unexpand-2").toggleClass("links-unexpand-focus");
  $("#links-expanded-2").slideToggle();
  $("#expand-btn-2").html() == "close"
    ? $("#expand-btn-2").html("expand_more")
    : $("#expand-btn-2").html("close");
});

// Debit Plans
$("#expand-btn-3, #links-unexpand-3").click(function () {
  $("#links-unexpand-3").toggleClass("links-unexpand-focus");
  $("#links-expanded-3").slideToggle();
  $("#expand-btn-3").html() == "close"
    ? $("#expand-btn-3").html("expand_more")
    : $("#expand-btn-3").html("close");

  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#links-expanded-3").offset().top,
    },
    1000
  );
});

$("#close-links-expaned-3").click(function () {
  $("#links-unexpand-3").toggleClass("links-unexpand-focus");
  $("#links-expanded-3").slideToggle();
  $("#expand-btn-3").html() == "close"
    ? $("#expand-btn-3").html("expand_more")
    : $("#expand-btn-3").html("close");
});

// Related
$("#expand-btn-4, #links-unexpand-4").click(function () {
  $("#links-unexpand-4").toggleClass("links-unexpand-focus");
  $("#links-expanded-4").slideToggle();
  $("#expand-btn-4").html() == "close"
    ? $("#expand-btn-4").html("expand_more")
    : $("#expand-btn-4").html("close");

  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#links-expanded-4").offset().top,
    },
    1000
  );
});

$("#close-links-expaned-4").click(function () {
  $("#links-unexpand-4").toggleClass("links-unexpand-focus");
  $("#links-expanded-4").slideToggle();
  $("#expand-btn-4").html() == "close"
    ? $("#expand-btn-4").html("expand_more")
    : $("#expand-btn-4").html("close");
});

if ($(window).width() < 900) {
  $(".field-container-responsive").addClass("flex-column");
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
