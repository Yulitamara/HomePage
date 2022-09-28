// SIDEBAR
$(function () {
  $("#sidebar-out-btn").click(function () {
    $(".sidebar").toggle();
    $(".main-content").addClass("active-sidebar");
  });

  // Debit Plan Tabs
  // $(function () {
  //   $("#tabs").tabs();
  // });

  // $(function () {
  //   $(".link").click(function () {
  //     if ($(this).hasClass("active-link")) {
  //       return;
  //     }
  //     $(".link").removeClass("active-link");
  //     $(this).addClass("active-link");
  //   });
  // });

  // $(function () {
  //   $(".close-section").click(function () {
  //     $(".tab-content").hide();
  //     $(".link").removeClass("active-link");
  //   });
  // });

  if ($(window).width() > 1290) {
    $(".big-expand-btn, .expand-click").click(function () {
      $(".expand-section").toggle();
    });
  }

  // Expand Section

  const linksExpanded = $(".links-expanded");
  $(linksExpanded).hide();

  // links
  $("#expand-btn-1, #links-unexpand-1").click(function () {
    $("#links-expanded-1")
      .slideToggle()
      .parent()
      .prepend($("#links-expanded-1"));
    $("#expand-btn-1").html() == "close"
      ? $("#expand-btn-1").html("expand_more")
      : $("#expand-btn-1").html("close");
  });

  $("#close-links-expaned-1").click(function () {
    $("#links-expanded-1").toggle();
    $("#expand-btn-1").html() == "close"
      ? $("#expand-btn-1").html("expand_more")
      : $("#expand-btn-1").html("close");
  });

  // Stages
  $("#expand-btn-2, #links-unexpand-2").click(function () {
    $("#links-expanded-2")
      .slideToggle()
      .parent()
      .prepend($("#links-expanded-2"));
    $("#expand-btn-2").html() == "close"
      ? $("#expand-btn-2").html("expand_more")
      : $("#expand-btn-2").html("close");
  });

  $("#close-links-expaned-2").click(function () {
    $("#links-expanded-2").toggle();
    $("#expand-btn-2").html() == "close"
      ? $("#expand-btn-2").html("expand_more")
      : $("#expand-btn-2").html("close");
  });

  // Debit Plans
  $("#expand-btn-3, #links-unexpand-3").click(function () {
    $("#links-expanded-3")
      .slideToggle()
      .parent()
      .prepend($("#links-expanded-3"));
    $("#expand-btn-3").html() == "close"
      ? $("#expand-btn-3").html("expand_more")
      : $("#expand-btn-3").html("close");
  });

  $("#close-links-expaned-3").click(function () {
    $("#links-expanded-3").toggle();
    $("#expand-btn-3").html() == "close"
      ? $("#expand-btn-3").html("expand_more")
      : $("#expand-btn-3").html("close");
  });

  // Related
  $("#expand-btn-4, #links-unexpand-4").click(function () {
    $("#links-expanded-4")
      .slideToggle()
      .parent()
      .prepend($("#links-expanded-4"));
    $("#expand-btn-4").html() == "close"
      ? $("#expand-btn-4").html("expand_more")
      : $("#expand-btn-4").html("close");
  });

  $("#close-links-expaned-4").click(function () {
    $("#links-expanded-4").toggle();
    $("#expand-btn-4").html() == "close"
      ? $("#expand-btn-4").html("expand_more")
      : $("#expand-btn-4").html("close");
  });

  // Info
  $("#expand-btn-5, #links-unexpand-5").click(function () {
    $("#links-expanded-5")
      .slideToggle()
      .parent()
      .prepend($("#links-expanded-5"));
    $("#expand-btn-5").html() == "close"
      ? $("#expand-btn-5").html("expand_more")
      : $("#expand-btn-5").html("close");
  });

  $("#close-links-expaned-5").click(function () {
    $("#links-expanded-5").toggle();
    $("#expand-btn-5").html() == "close"
      ? $("#expand-btn-5").html("expand_more")
      : $("#expand-btn-5").html("close");
  });

  // Related sales documents
  $("#expand-btn-6, #links-unexpand-6").click(function () {
    $("#links-expanded-6")
      .slideToggle()
      .parent()
      .prepend($("#links-expanded-6"));

    $("#expand-btn-6").html() == "close"
      ? $("#expand-btn-6").html("expand_more")
      : $("#expand-btn-6").html("close");
  });

  $("#close-links-expaned-6").click(function () {
    $("#links-expanded-6").toggle();
    $("#expand-btn-6").html() == "close"
      ? $("#expand-btn-6").html("expand_more")
      : $("#expand-btn-6").html("close");
  });

  if ($(window).width() < 900) {
    $(".field-container-responsive").addClass("flex-column");
    $(".label-container").addClass("height-small");
    $(".label-text").addClass("small-font");
    $(".input-container__expand").addClass("height-big");
    $(".input-container").addClass("height-big");
  }

  // Category hide headers
  $("#headers-visibilty-btn").click(function () {
    $(".label-type-small").slideToggle();
    $("#headers-visibilty-btn").html() == "visibility_off"
      ? $(this).html("visibility")
      : $(this).html("visibility_off");
  });

  $(
    "#expanded-small-1, #expanded-small-2, #expanded-small-3, #expanded-small-4, #expanded-small-5, #expanded-small-6"
  ).hide();

  if ($(window).width() < 1290) {
    $("#expand-btn-1, #links-unexpand-1").click(function () {
      $("#links-unexpand-1").slideToggle();
      $("#type-header-small").hide();
      $("#expanded-small-1").append($("#links-expanded-1")).show("slow");
    });

    $("#expand-btn-2, #links-unexpand-2").click(function () {
      $("#links-unexpand-2").slideToggle();
      $("#type-header-small-2").hide();
      $("#expanded-small-2").append($("#links-expanded-2")).show("slow");
    });

    $("#expand-btn-3, #links-unexpand-3").click(function () {
      $("#links-unexpand-3").slideToggle();
      $("#type-header-small-3").hide();
      $("#expanded-small-3").append($("#links-expanded-3")).show("slow");
    });

    $("#expand-btn-4, #links-unexpand-4").click(function () {
      $("#links-unexpand-4").slideToggle();
      $("#type-header-small-4").hide();
      $("#expanded-small-4").append($("#links-expanded-4")).show("slow");
    });

    $("#expand-btn-5, #links-unexpand-5").click(function () {
      $("#links-unexpand-5").slideToggle();
      $("#type-header-small-5").hide();
      $("#expanded-small-5").append($("#links-expanded-5")).show("slow");
    });

    $("#expand-btn-6, #links-unexpand-6").click(function () {
      $("#links-unexpand-6").slideToggle();
      $("#type-header-small-6").hide();
      $("#expanded-small-6").append($("#links-expanded-6")).show("slow");
    });
  }

  // Create Section
  $("#open-create-section").click(function () {
    $(".expand-section-wrapper").hide();
    $(".create-section").removeClass("display-none");
    $(this).hide();
  });

  $("#close-create-section").click(function () {
    $(".expand-section-wrapper").show();
    $(".create-section").addClass("display-none");
    $("#open-create-section").show();
  });

  $(".create-circle").click(function () {
    $(this).html() == "check_circle"
      ? $(this).html("circle")
      : $(this).html("check_circle");
  });

  // Display Change btn
  $(
    ".cards-content--grid-display, .cards-content--notes-display, .display-options"
  ).hide();

  $("#display-options-btn").click(function () {
    $(".display-options").toggle();
  });

  $("#default-display").click(function () {
    $(".cards-content").show();
    $(".cards-content--notes-display, .cards-content--grid-display").hide();
    $(".display-options").toggle();
  });

  $("#notes-display").click(function () {
    $(".cards-content").toggle();
    $(".cards-content--notes-display").toggle();
    $(".cards-content, .cards-content--grid-display").hide();
    $(".display-options").toggle();
  });

  $("#grid-display").click(function () {
    $(".cards-content, .cards-content--grid-display").toggle();
    $(".display-options").toggle();
    $(".cards-content, .cards-content--notes-display").hide();
  });

  $(".bottom-navbar-btns--list").hide();

  $(".more-btn").click(function () {
    $(".bottom-navbar-btns--list").toggle();
  });
});
