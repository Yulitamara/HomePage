// SIDEBAR

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
  $("#links-unexpand-1").toggle();
  $("#links-expand-1").toggle();
});

$("#expand-btn-2").click(function () {
  $("#links-unexpand-2").toggle();
  $("#links-expand-2").toggle();
});
