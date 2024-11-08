let ctx;

$(document).ready(function () {
  var currentStep = 1;

  $('input[type="checkbox"]').prop("checked", false);
  $(".modal").modal();

  setTimeout(function () {
    $(".modal").modal("open");
  }, 2000);
  function showStep(stepIndex) {
    $(".step").hide();
    $(".step")
      .eq(stepIndex - 1)
      .show();
    updateStepIndicatorText(stepIndex);
  }

  $(function () {
    $("#datepicker").datepicker();
  });

  $(".expand-info, .overlay").on("click", function () {
    var mobileProgramInfo = $(".mobile-program-info");

    mobileProgramInfo.slideToggle(function () {
      if (mobileProgramInfo.is(":visible")) {
        mobileProgramInfo.css("display", "flex");
        $(".expand-info").css("rotate", "360deg");
      } else {
        $(".expand-info").css("rotate", "180deg");
      }
    });

    var isInfoVisible = mobileProgramInfo.is(":visible");

    var overlay = document.querySelector(".overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.classList.add("overlay");

      $(".mobile-program-info").append(overlay);
    }

    if (isInfoVisible) {
      overlay.style.display = "block";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.zIndex = "-1";
    } else {
      overlay.style.display = "none";
    }
  });

  $(".menu-content").each(function () {
    const menuContent = $(this);
    const checkboxInputs = menuContent.find('.checkbox input[type="checkbox"]');
    const checkboxDivs = menuContent.find(".checkbox");

    checkboxInputs.on("change", function () {
      const isChecked = $(this).prop("checked");

      const checkedCount = menuContent.find(
        'input[type="checkbox"]:checked'
      ).length;

      $(this).closest(".checkbox").toggleClass("active", isChecked);

      if (checkedCount > 2) {
        $(this)
          .prop("checked", false)
          .closest(".checkbox")
          .removeClass("active");
      }
    });

    checkboxDivs.on("click", function () {
      const checkbox = $(this).find('input[type="checkbox"]');
      const isChecked = checkbox.prop("checked");

      checkbox.prop("checked", !isChecked).change();

      const checkedCount = menuContent.find(
        'input[type="checkbox"]:checked'
      ).length;

      if (checkedCount > 2) {
        menuContent
          .find('input[type="checkbox"]:checked')
          .first()
          .prop("checked", false)
          .change();
      }

      $(this).toggleClass("active", !isChecked && checkbox.prop("checked"));
    });
  });

  $(".special-request-wrap .checkbox").click(function (event) {
    var checkbox = $(this).find("input[type='checkbox']");
    var isChecked = !checkbox.prop("checked");
    checkbox.prop("checked", isChecked);

    $(this).toggleClass("active", isChecked);

    var anyChecked =
      $(
        ".alergy-select input[type='checkbox']:checked, .additional-select input[type='checkbox']:checked"
      ).length > 0;

    $(".additional-card").toggle(anyChecked);

    if ($(this).closest(".section").hasClass("protein-select")) {
      return;
    }

    var selectedText = checkbox.attr("name");

    var $selectedSection = checkbox.closest(".section");
    var $selectedContent = $selectedSection.hasClass("alergy-select")
      ? $(".selected-alergies .content")
      : $(".selected-additional-points .content");

    var isAppended =
      $selectedContent.find(".point").filter(function () {
        return $(this).find("p").text() === selectedText;
      }).length > 0;

    if (isChecked && !isAppended) {
      $selectedContent.append(
        '<div class="point d-flex align-items-center justify-content-between flex-row"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none"><circle cx="4.5" cy="4.5" r="4" fill="#1F4836"/></svg><p class="fs-sm">' +
          selectedText +
          "</p></div>"
      );
    } else if (!isChecked && isAppended) {
      $selectedContent
        .find(".point")
        .filter(function () {
          return $(this).find("p").text() === selectedText;
        })
        .remove();
    }
  });

  $("#open-btn").click(function () {
    $(".overlay-2").fadeIn();
    $(".bottom-sheet").css("bottom", "0").slideDown();
  });

  $("#close-btn, .overlay-2").click(function () {
    $(".overlay-2").fadeOut();
    $(".bottom-sheet").css("bottom", "-300px").slideUp();
  });

  $("#datepicker").change(function () {
    if ($(this).val() !== "") {
      $(".day-select").css("display", "flex");

      var selectedDate = new Date($(this).val());

      var formattedDate =
        selectedDate.getDate() +
        " " +
        getMonthName(selectedDate.getMonth()) +
        " " +
        selectedDate.getFullYear();

      $("#selected-start-date").text(formattedDate);
      $("#selected-start-date").css("color", "black");
      $("#selected-start-date").css("font-weight", "bold");
      $(".selected-date").text(formattedDate);
      $(".date-info").css("display", "flex");
    } else {
      $(".day-select").css("display", "none");
      $("#selected-start-date").text("");
    }
  });

  function getMonthName(monthIndex) {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[monthIndex];
  }

  $(".program-card").on("click", function () {
    $(".program-card").removeClass("active");

    $(this).addClass("active");
  });

  $(".radio-input-container").on("click", function () {
    var container = $(this);
    var radio = container.find("input[type='radio']");
    var isActive = container.hasClass("active");

    $(".radio-input-container").removeClass("active");
    container.toggleClass("active", !isActive);
    radio.prop("checked", !isActive);
    var selectedMeal = $(".radio-input-container.active").find("h1").text();
    $(".selected-meal").text(selectedMeal);
    $(".lunch-info").show();
    var anyChecked =
      $(".radio-input-container input[type='radio']:checked").length > 0;

    $(".lunch-info").toggle(anyChecked);
  });
  $(".cutlery-input-container").on("click", function () {
    var containerTwo = $(this);
    var radio = containerTwo.find("input[type='radio']");
    var isActiveTwo = containerTwo.hasClass("active");

    $(".cutlery-input-container").removeClass("active");
    containerTwo.toggleClass("active", !isActiveTwo);
    radio.prop("checked", !isActiveTwo);
    var selectedCutlery = $(".cutlery-input-container.active")
      .find("h1")
      .text();
    $(".selected-cutlery").text(selectedCutlery);
    $(".cutlery-info").show();
    var anyCheckedTwo =
      $(".cutlery-input-container input[type='radio']:checked").length > 0;

    $(".cutlery-info").toggle(anyCheckedTwo);
  });

  function anyCheckboxChecked() {
    return $('.request-checkbox input[type="checkbox"]').is(":checked");
  }

  function toggleJuiceInfoVisibility() {
    if (anyCheckboxChecked()) {
      $(".juice-info").css("display", "flex");
    } else {
      $(".juice-info").css("display", "none");
    }
  }

  toggleJuiceInfoVisibility();

  $('.request-checkbox input[type="checkbox"]').change(function () {
    toggleJuiceInfoVisibility();
  });

  const juiceCategorySelect = $(".juice-category-select");
  const yesRadio = $("#yesRadio");
  const noRadio = $("#noRadio");
  const juiceSelectRadios = $(".juice-select-radio");
  const checkboxes = $('input[type="checkbox"]');

  juiceCategorySelect.hide();
  noRadio.prop("checked", true);
  $(".max-select h3").hide();

  juiceSelectRadios.on("click", function () {
    const radio = $(this).find('input[type="radio"]');
    if (radio.prop("checked")) return;

    juiceSelectRadios.removeClass("active");
    $(this).addClass("active");

    if (radio.attr("id") === "yesRadio") {
      juiceCategorySelect.show();
      $(".max-select h3").show();
    } else {
      juiceCategorySelect.hide();
      $(".max-select h3").hide();
    }

    radio.prop("checked", true);
  });

  yesRadio.on("click", function () {
    $(".max-select h3").show();
  });

  noRadio.on("click", function () {
    $(".max-select h3").hide();
  });

  checkboxes.on("click", function () {
    const checkbox = $(this);
    const isChecked = checkbox.prop("checked");
    const checkboxContainer = checkbox.closest(".checkbox");

    if (isChecked) {
      checkboxContainer.addClass("active");
    } else {
      checkboxContainer.removeClass("active");
    }
  });

  function updateStepIndicatorText(stepIndex) {
    var stepTexts = [
      "Program",
      "Start Date",
      "Package",
      "Special Request",
      "Offer",
    ];

    if (stepIndex >= 1 && stepIndex <= stepTexts.length) {
      $("#mobile-stepper-text").text(stepTexts[stepIndex - 1]);
    }
  }

  yesRadio.add(noRadio).on("click", function () {
    const radio = $(this);
    const radioContainer = radio.closest(".juice-select-radio");

    if (!radio.prop("checked")) return;

    juiceSelectRadios.removeClass("active");
    radioContainer.addClass("active");

    if (radio.attr("id") === "yesRadio") {
      juiceCategorySelect.show();
    } else {
      juiceCategorySelect.hide();
    }
  });

  $(".day-checkbox").click(function (event) {
    event.stopPropagation();
    var checkbox = $(this).find('input[type="checkbox"]');
    checkbox.prop("checked", !checkbox.prop("checked"));
    $(this).toggleClass("active", checkbox.prop("checked"));
    var selectedDaysCount = $("input[type='checkbox']:checked").length;
    $(".selected-days").text(selectedDaysCount + " Days");

    $(".days-info").show();

    if ($("#Minggu").is(":checked")) {
      $(".selected-days").text("All Days");
    }

    if (selectedDaysCount === 0) {
      $(".days-info").hide();
    }
  });

  $(".day-checkbox label").click(function (event) {
    event.stopPropagation();
    var checkbox = $(this).prev('input[type="checkbox"]');
    checkbox.prop("checked", !checkbox.prop("checked"));
    $(this)
      .closest(".day-checkbox")
      .toggleClass("active", checkbox.prop("checked"));
  });

  $(".protein-select, .additional-select").addClass("hidden");
  var currentSectionIndex = 1;

  $(".more-request").click(function () {
    if (currentSectionIndex < $(".section").length) {
      $(".section")
        .eq(currentSectionIndex - 1)
        .addClass("hidden");
      currentSectionIndex++;
      $(".section")
        .eq(currentSectionIndex - 1)
        .removeClass("hidden");
      updateRequestHeading();
    }
  });

  $(".less-request").click(function () {
    if (currentSectionIndex > 1) {
      $(".section")
        .eq(currentSectionIndex - 1)
        .addClass("hidden");
      currentSectionIndex--;
      $(".section")
        .eq(currentSectionIndex - 1)
        .removeClass("hidden");
      updateRequestHeading();
    }
  });

  function updateRequestHeading() {
    switch (currentSectionIndex) {
      case 1:
        $(".request-heading").text("Allergic Request");
        $(".special-request-count").text("1/3");
        $(".less-request path").css("fill", "#C4C4C4");
        $(".less-request rect").attr("stroke", "#C4C4C4");
        $(".more-request path").css("fill", "#1F4836");
        break;
      case 2:
        $(".request-heading").text("No Proteins");
        $(".special-request-count").text("2/3");
        $(".less-request path").css("fill", "#1F4836");
        $(".more-request path").css("fill", "#1F4836");
        $(".more-request rect").attr("stroke", "#1F4836");
        $(".less-request rect").attr("stroke", "#1F4836");
        break;
      case 3:
        $(".request-heading").text("Additional");
        $(".special-request-count").text("3/3");

        $(".more-request path").css("fill", "#C4C4C4");
        $(".more-request rect").attr("stroke", "#C4C4C4");
        $(".less-request path").css("fill", "#1F4836");
        break;
      default:
        $(".less-request path, .more-request path").css("fill", "blue");
    }
  }

  $("#back-btn").hide();

  $("#back-btn").on("click", function () {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
      $(".navigation-default").eq(currentStep).removeClass("navigation-active");
      $(".navigation-default")
        .eq(currentStep - 1)
        .find("h1")
        .css("display", "flex");
      $(".navigation-default")
        .eq(currentStep)
        .find("h1")
        .css("display", "none");
      $("#next-btn").find("p").text("Next");
      $("#next-btn").find("p").css("width", "106px");
    }
    if (currentStep === 1) {
      $("#back-btn").hide();
      $(".program-info").css("display", "none");
      $(".program-wrap").css("display", "none");
      $(".program-btn").css("justify-content", "center");
      $(".expand-info").css("display", "none");
    }
  });

  $("#contact-info").show();
  $("#error-text").hide();
  $("#program-error").hide();
  $("#date-error").hide();
  $("#next-btn").on("click", function () {
    if (currentStep === 1) {
      if ($(".program-card.active").length === 0) {
        $("#program-error").text("Please select a program.").show();
        $("html, body").animate(
          {
            scrollTop: $("#program-error").offset().top - 16,
          },
          300,
          function () {}
        );
        return;
      } else {
        $("#program-error").hide();
      }
      var selectedProgramCard = $(".program-card.active");

      if (selectedProgramCard.length > 0) {
        var selectedProgramType = selectedProgramCard.data("type");
        $(".selected-program").text(selectedProgramType.trim());
      } else {
        console.error("No program card is selected");
      }
      $("#program-steps-main").show();
      $("#date-select-main").show();
      $(".program-btn").css("justify-content", "flex-start");
      $(".program-wrap").css("display", "flex");
      $("#program-select-main").hide();
      $(".program-info").css("display", "flex");
      $("#back-btn").css("display", "flex");
      $(".expand-info").css("display", "flex");

      $(".navigation-default").eq(1).addClass("navigation-active");
      $(".navigation-default").eq(0).find("h1").css("display", "none");
      $("#error-text").hide();

      currentStep = 2;
    } else if (currentStep === 2) {
      var selectedDaysCount = $("input[type='checkbox']:checked").length;
      var mingguChecked = $("#Minggu").is(":checked");

      if (
        $("#start-time").val() === "" ||
        (!mingguChecked && selectedDaysCount < 3)
      ) {
        if (!mingguChecked) {
          $("#date-error")
            .text(
              "Please select a start date and at least 3 days, or only select 'Minggu'."
            )
            .show();
          $("html, body").animate(
            {
              scrollTop: $("#date-error").offset().top - 16,
            },
            300
          );
        } else {
          $("#date-error").hide();
        }

        return;
      } else {
        $("#lunch-dinner-main").css("display", "flex");
        $(".date-info").css("display", "flex");
        $("#date-select-main").hide();
        $(".navigation-default").eq(2).addClass("navigation-active");
        $(".navigation-default").eq(1).find("h1").css("display", "none");
        $("#date-error").hide();
        currentStep = 3;
      }
    } else if (currentStep === 3) {
      if ($(".radio-input-container.active").length === 0) {
        $("#meal-error").text("Please select a Package.").show();
        $("html, body").animate(
          {
            scrollTop: $("#meal-error").offset().top - 16,
          },
          300,
          function () {}
        );
        return;
      } else {
        $("#meal-error").hide();
      }

      $("#lunch-dinner-main").hide();
      $(".cost-value").text("546.000");
      $(".divide-value").css("display", "flex");
      $("#special-select-main").css("display", "flex");
      $(".navigation-default").eq(3).addClass("navigation-active");
      $(".navigation-default").eq(2).find("h1").css("display", "none");
      $("#meal-error").hide();

      currentStep = 4;
    } else if (currentStep === 4) {
      $("#juice-select-main").css("display", "flex");
      $("#special-select-main").hide();
      $(".navigation-default").eq(4).addClass("navigation-active");
      $(".navigation-default").eq(3).find("h1").css("display", "none");
      $("#height-error").text("Please fill out all fields.").hide();
      $("#next-btn").find("p").text("Confirm & Pay");
      $("#next-btn").find("p").css("width", "fit-content");
      currentStep = 5;
      updateStepIndicatorText(currentStep);
    } else if (currentStep === 5) {
    }

    updateStepIndicatorText(currentStep);
    $(".navigation-default")
      .eq(currentStep - 1)
      .find("h1")
      .css("display", "flex");
  });
});
