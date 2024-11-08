$(".login-btn").click(function () {
  $(".input-container").removeClass("error");

  $(".input-container")
    .filter(function () {
      return $(this).find("input").val() === "";
    })
    .addClass("error");
  if (!$("#forgot-pass-form")[0].checkValidity()) {
    $("#forgot-pass-form")[0].reportValidity();
    $(".input-container")
      .filter(function () {
        return !$(this).find("input")[0].checkValidity();
      })
      .addClass("error");
    return;
  }
});
