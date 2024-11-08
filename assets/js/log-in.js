$(document).ready(function () {
  $(".pass-show-icon").click(function () {
    var $input = $(this).closest(".input-container").find(".password-input");
    var type = $input.attr("type") === "password" ? "text" : "password";
    $input.attr("type", type);
  });

  $(".login-btn").click(function () {
    $(".input-container").removeClass("error");

    $(".input-container")
      .filter(function () {
        return $(this).find("input").val() === "";
      })
      .addClass("error");
    if (!$("#login-form")[0].checkValidity()) {
      $("#login-form")[0].reportValidity();
      $(".input-container")
        .filter(function () {
          return !$(this).find("input")[0].checkValidity();
        })
        .addClass("error");
      return;
    }
  });
});
