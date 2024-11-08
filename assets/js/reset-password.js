$(document).ready(function () {
  $(".pass-show-icon").click(function () {
    var inputContainer = $(this).closest(".input-container");

    var passwordInput = inputContainer.find(".password-input");

    var type = passwordInput.attr("type");
    if (type === "password") {
      passwordInput.attr("type", "text");
    } else {
      passwordInput.attr("type", "password");
    }

    $(this).find("svg").toggleClass("hidden");
  });
});

$(".login-btn").click(function () {
  $(".input-container").removeClass("error");

  $(".input-container")
    .filter(function () {
      return $(this).find("input").val() === "";
    })
    .addClass("error");
  if (!$("#reset-form")[0].checkValidity()) {
    $("#reset-form")[0].reportValidity();
    $(".input-container")
      .filter(function () {
        return !$(this).find("input")[0].checkValidity();
      })
      .addClass("error");
    return;
  }
});
