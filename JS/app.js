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
