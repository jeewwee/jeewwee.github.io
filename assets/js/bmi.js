let ctx;
$(document).ready(function () {
  var currentStep = 1;

  var steps = [
    "#contact-info",
    "#gender-select",
    "#age-select",
    "#height-weight-select",
    "#result-main",
  ];

  function showStep(stepIndex) {
    $(".step").hide();
    $(".step")
      .eq(stepIndex - 1)
      .show();
    updateStepIndicatorText(stepIndex);
  }
  function animateRangeSlider(fromValue, toValue, duration) {
    var $input = $(".range-input input");

    $input.animate(
      { value: toValue },
      {
        duration: duration,
        step: function (currentValue) {
          $input.val(Math.round(currentValue));

          SliderFun($input);
        },
      }
    );
  }

  $(".gender-card").on("click", function () {
    $(".gender-card").removeClass("active");

    $(this).addClass("active");
  });
  $(".radio-input-container").on("click", function () {
    var container = $(this);
    var radio = container.find("input[type='radio']");
    var isActive = container.hasClass("active");

    $(".radio-input-container").removeClass("active");
    container.toggleClass("active", !isActive);
    radio.prop("checked", !isActive);
  });
  let spinner = document.getElementById("spinner");
  ctx = spinner.getContext("2d");
  let width = spinner.width;
  let height = spinner.height;
  let degrees = 0;
  let new_degrees = 0;
  let difference = 0;
  let color = "#000";
  let colortwo = "#1F4836";
  let bgcolor = "transparent";
  let text;
  let animation_loop, redraw_loop;

  $("#spinner").hide();

  function init() {
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.strokeStyle = bgcolor;
    ctx.lineWidth = 20;
    ctx.arc(width / 2, width / 2, 100, 0, Math.PI * 2, false);
    ctx.stroke();
    let radians = (degrees * Math.PI) / 180;
    ctx.beginPath();
    ctx.strokeStyle = colortwo;
    ctx.lineWidth = 20;
    ctx.arc(
      width / 2,
      height / 2,
      100,
      0 - (90 * Math.PI) / 180,
      radians - (90 * Math.PI) / 180,
      false
    );
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.font = "bold 50px Roboto";
    text = Math.floor((degrees / 360) * 100) + "%";
    text_width = ctx.measureText(text).width;
    ctx.fillText(text, width / 2 - text_width / 2, height / 2 + 15);
    ctx.font = "bold 24px Roboto";
    label_text = "Calculate";
    label_text_width = ctx.measureText(label_text).width;
    ctx.fillText(label_text, width / 2 - label_text_width / 2, height / 2 + 50);
  }
  let animationCompleted = false;

  function draw() {
    $("#spinner").show(); // Show the spinner canvas
    if (typeof animation_loop != undefined) clearInterval(animation_loop);
    new_degrees = 360;
    difference = new_degrees - degrees;
    animation_loop = setInterval(animate_to, 3000 / difference);
    degrees = 0;
  }

  function animate_to() {
    if (degrees == new_degrees) {
      clearInterval(animation_loop);
      $("#spinner").hide(); // Hide the spinner canvas when animation completes
    } else {
      if (degrees < new_degrees) {
        degrees++;
      } else {
        degrees--;
      }
      init();
      $("#spinner").show(); // Show the spinner canvas while animation is ongoing
    }
  }
  function updateStepIndicatorText(stepIndex) {
    var stepTexts = [
      "Personal Info",
      "Select Gender",
      "Select Age",
      "Height & Weight",
      "Result",
    ];

    if (stepIndex >= 1 && stepIndex <= stepTexts.length) {
      $("#modile-stepper-text").text(stepTexts[stepIndex - 1]);
    }
  }
  $("#result-progress-bar").hide();

  updateStepIndicatorText(currentStep);
  function resetSpinner() {
    var spinner = document.getElementById("spinner");
    var ctx = spinner.getContext("2d");
    var width = spinner.width;
    var height = spinner.height;

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);
    // Hide the spinner canvas
    $("#spinner").hide();
  }

  $("#recalculate").on("click", function () {
    currentStep = 1;
    showStep(currentStep);
    resetSpinner();
    $(".navigation-default").removeClass("navigation-active");
    $(".navigation-default")
      .eq(currentStep - 1)
      .addClass("navigation-active");
    $("#back-btn").hide();
    $(".button-container").show();

    $(".contact-info").find("input").val("");
    $(".height-weight-select").find("input").val("");
    $(".range-container").find("input").val(0);
    $(".gender-card").removeClass("active");
    $(".radio-input-container")
      .removeClass("active")
      .find("input[type='radio']")
      .prop("checked", false);
  });

  $("#back-btn").hide();

  $("#back-btn").on("click", function () {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
      $(".navigation-default").eq(currentStep).removeClass("navigation-active");
    }
    if (currentStep === 1) {
      $("#back-btn").hide();
    }
  });

  $("#contact-info").show();
  $("#error-text").hide();
  $("#gender-error").hide();
  $("#height-error").hide();

  $("#continue-btn").on("click", function () {
    if (currentStep === 1) {
      var inputsEmpty = false;
      $(".contact-info")
        .find("input")
        .each(function () {
          if ($.trim($(this).val()) === "") {
            inputsEmpty = true;
            return false;
          }
        });
      if (!inputsEmpty) {
        // if (!$('#contact-form')[0].checkValidity()) {
        //   $('#contact-form')[0].reportValidity();
        //   return; // Prevent proceeding to the next step if form is not valid
        // }

        if (!$("#contact-form")[0].checkValidity()) {
          $("#contact-form")[0].reportValidity();
          $(".input-container")
            .filter(function () {
              return !$(this).find("input")[0].checkValidity();
            })
            .addClass("error");
          return; // Prevent proceeding to the next step if form is not valid
        }

        $(".input-container").removeClass("error");
        $("#contact-info").hide();
        $("#gender-select").show();
        $(".navigation-default").eq(1).addClass("navigation-active");
        $("#error-text").hide();
        $("#back-btn").show();

        currentStep = 2;
      } else {
        $(".input-container").removeClass("error");
        $(".input-container")
          .filter(function () {
            return $(this).find("input").val() === "";
          })
          .addClass("error");
        if (!$("#contact-form")[0].checkValidity()) {
          $("#contact-form")[0].reportValidity();
          $(".input-container")
            .filter(function () {
              return !$(this).find("input")[0].checkValidity();
            })
            .addClass("error");
          return; // Prevent proceeding to the next step if form is not valid
        }
        return;
      }
    } else if (currentStep === 2) {
      if ($(".gender-card.active").length === 0) {
        $("#gender-error").text("Please select a gender.").show();
        $("html, body").animate(
          {
            scrollTop: $("#gender-error").offset().top - 16,
          },
          300,
          function () {}
        );
        return;
      } else {
        $("#gender-error").hide();
      }
      $("#age-select").show();
      $("#gender-select").hide();
      $(".navigation-default").eq(2).addClass("navigation-active");
      $("#error-text").hide();
      currentStep = 3;
    } else if (currentStep === 3) {
      if ($(".radio-input-container.active").length === 0) {
        $("#age-error").text("Please select an age group.").show();
        $("html, body").animate(
          {
            scrollTop: $("#age-error").offset().top - 16,
          },
          300,
          function () {}
        );
        return;
      } else {
        $("#age-error").hide();
      }

      $("#age-select").hide();
      $("#height-weight-select").show();
      $(".navigation-default").eq(3).addClass("navigation-active");
      currentStep = 4;
    } else if (currentStep === 4) {
      var inputsEmptyTwo = false;
      $(".height-weight-select")
        .find("input")
        .each(function () {
          if ($.trim($(this).val()) === "") {
            inputsEmptyTwo = true;
            return false;
          }
        });
      if (!inputsEmptyTwo) {
        if (!$("#age-selector")[0].checkValidity()) {
          $("#age-selector")[0].reportValidity();
          return;
        }
        setTimeout(function () {
          $("#result-main").css("display", "flex");
          animateRangeSlider(0, 7, 500);
          $(".button-container").hide();
          $("#height-weight-select").hide();
          $(".navigation-default").eq(4).addClass("navigation-active");
          $("#height-error").text("Please fill out all fields.").hide();

          currentStep = 5;
          updateStepIndicatorText(currentStep);
        }, 3000);
        draw();
        $("#spinner").show();
      } else {
        $(".input-container").removeClass("error");

        $(".input-container")
          .filter(function () {
            return $(this).find("input").val() === "";
          })
          .addClass("error");
        if (!$("#contact-form")[0].checkValidity()) {
          $("#contact-form")[0].reportValidity();
          $(".input-container")
            .filter(function () {
              return !$(this).find("input")[0].checkValidity();
            })
            .addClass("error");
          return;
        }
      }
    }

    updateStepIndicatorText(currentStep);
  });

  function SliderFun(ele) {
    for (let i = 0; i < ele.length; i++) {
      const element = ele[i];

      const values = element.value;
      const dataValue = element.getAttribute("max");
      const fullValue = Math.round((values * 100) / dataValue);
      element.nextSibling.parentNode.querySelector(".active-line").style.width =
        fullValue + "%";
      if (element.nextSibling.parentNode.querySelector(".active-dot")) {
        element.nextSibling.parentNode.querySelector(".active-dot").style.left =
          fullValue + "%";
      }

      const vals = values / 1;
      const ulList = element.parentNode.parentElement.querySelectorAll("ul li");
      for (let ids = 0; ids < ulList.length; ids++) {
        if (ids < vals || ids == vals) {
          ulList[ids].classList.add("active");
        } else {
          ulList[ids].classList.remove("active");
        }
      }
    }
  }
  SliderFun($(".range-input input"));

  $(".range-input input").on("input", function () {
    SliderFun($(this));
  });
});
