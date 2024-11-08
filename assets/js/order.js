function isMobile() {
  return $(window).width() < 660;
}

$(document).ready(function () {
  $(".different-address-main").css("display", "none");

  $("#checkbox1").change(function () {
    if ($(this).is(":checked")) {
      $(".single-address").css("display", "none");
      $(".different-address-main").css("display", "flex");
      $(".select-address").css("display", "none");
      $(".btn-mobile-container").css("display", "none");
    } else {
      $(".single-address").css("display", "flex");
      $(".different-address-main").css("display", "none");
      $(".select-address").css("display", "flex");
      if (isMobile()) {
        $(".btn-mobile-container").css("display", "flex");
      }
    }
  });

  $(".proceed-payment").click(function () {
    if ($('input[type="radio"]:checked').length === 0) {
      return;
    }

    $(".order-summery").css("display", "none");
    $(".order-payment").css("display", "flex");
    $(".modal-payment-container").fadeOut();
    $("body").css("overflow", "auto");
    $("#overlay").fadeOut();
    $(".payment-bottom-sheet-main").slideUp();
    startCounter();
    $(".stepper .navigation-default").eq(2).addClass("navigation-active");
  });

  $(".cross-icon").css("display", "none");
  $(".loader").css("display", "none");
  $(".cross-icon").click(function () {
    $(".voucher-input").val("");
    $(".voucher-input-bottom-sheet ").val("");

    $(".cross-icon").css("display", "none");
    $(".loader").css("display", "none");
  });
  $(".remove-voucher").click(function () {
    $(this).closest(".feature-voucher-card").hide();
  });

  $(".voucher-wrap").click(function () {
    $(".modal-voucher").fadeOut();
    $("#overlay").fadeOut();
    $(".voucher-bottom-sheet-main").slideUp();
    $(".voucher-modal-btn").addClass("active");
    $(".voucher-modal-btn .voucher-name").text("Diskon Rp 50.000");
    $("body").css("overflow", "auto");
  });

  $(".voucher-input ").on("input", function () {
    var inputLength = $(this).val().length;
    if (inputLength === 9) {
      $(".cross-icon").css("display", "flex");
      $(".loader").css("display", "flex");
    } else {
      $(".cross-icon").css("display", "none");
      $(".loader").css("display", "none");
    }
  });

  $(".voucher-input-bottom-sheet").on("input", function () {
    var inputLength = $(this).val().length;

    if (inputLength === 9) {
      $(".cross-icon").css("display", "flex");
      $(".loader").css("display", "flex");
    } else {
      $(".cross-icon").css("display", "none");
      $(".loader").css("display", "none");
    }
  });

  $(".apply-btn").click(function () {
    var inputValueBottom = $(".voucher-input-bottom-sheet").val();
    var inputLengthBottom = inputValueBottom.length;

    if (inputLengthBottom === 9) {
      $(".cross-icon").css("display", "none");
      $(".loader").css("display", "none");

      $(".voucher-input").val("");

      $(".feature-voucher-card").css("display", "flex");
    }
  });

  $(".apply-btn").click(function () {
    var inputValue = $(".voucher-input").val();
    var inputLength = inputValue.length;

    if (inputLength === 9) {
      $(".cross-icon").css("display", "none");
      $(".loader").css("display", "none");

      $(".voucher-input").val("");

      $(".feature-voucher-card").css("display", "flex");
    }
  });

  function openModalOrBottomSheet(modalID, bottomSheetID) {
    if (isMobile()) {
      $("#" + bottomSheetID)
        .css("bottom", "0")
        .slideDown();
      $("#overlay").fadeIn();
      $("body").css("overflow", "hidden");
    } else {
      $("#" + modalID)
        .fadeIn()
        .css("display", "flex");
      $("#overlay").fadeIn();
      $("body").css("overflow", "hidden");
    }
  }

  function closeModalOrBottomSheet() {
    if (isMobile()) {
      $(".addres-select-bottom-sheet").slideUp();
      $(".payment-bottom-sheet-main").slideUp();
      $(".voucher-bottom-sheet-main").slideUp();
      $(".add-address-bottom-sheet").slideUp();
      $(".cara-bayar-bottom-sheet-main").slideUp();
      $(".exit-bottom-sheet").slideUp();
      $("#overlay").fadeOut();
      $("body").css("overflow", "auto");
    } else {
      $(".address-modal-container").fadeOut();
      $(".modal-payment-container").fadeOut();
      $(".modal-cara-bayar").fadeOut();
      $(".modal-voucher").fadeOut();
      $(".modal-add-address").fadeOut();
      $("#overlay").fadeOut();
      $("body").css("overflow", "auto");
    }
  }

  $(".select-address").click(function () {
    var modalID = $(this).data("modal");
    var bottomSheetID = $(this).data("bottom-sheet");
    openModalOrBottomSheet(modalID, bottomSheetID);
  });
  $(".select-address-different").click(function () {
    var modalID = $(this).data("modal");
    var bottomSheetID = $(this).data("bottom-sheet");
    openModalOrBottomSheet(modalID, bottomSheetID);
  });
  $(".payment-modal-btn").click(function () {
    var modalID = $(this).data("modal");
    var bottomSheetID = $(this).data("bottom-sheet");
    openModalOrBottomSheet(modalID, bottomSheetID);
  });
  $(".voucher-modal-btn").click(function () {
    var modalID = $(this).data("modal");
    var bottomSheetID = $(this).data("bottom-sheet");
    openModalOrBottomSheet(modalID, bottomSheetID);
  });
  $(".add-address-btn").click(function () {
    var modalID = $(this).data("modal");
    var bottomSheetID = $(this).data("bottom-sheet");
    openModalOrBottomSheet(modalID, bottomSheetID);
  });
  $(".cara-bayar-btn").click(function () {
    var modalID = $(this).data("modal");
    var bottomSheetID = $(this).data("bottom-sheet");
    openModalOrBottomSheet(modalID, bottomSheetID);
  });
  $(".exit-page-btn").click(function () {
    var modalID = $(this).data("modal");
    var bottomSheetID = $(this).data("bottom-sheet");
    openModalOrBottomSheet(modalID, bottomSheetID);
  });
  $(".edit-address").click(function () {
    var modalID = $(this).data("modal");
    var bottomSheetID = $(this).data("bottom-sheet");
    openModalOrBottomSheet(modalID, bottomSheetID);
    $(".address-modal-heading").text("Edit Address");
    $(".address-modal-container").fadeOut();
  });
  $(".modal-add-addres-btn").click(function () {
    var modalID = $(this).data("modal");
    var bottomSheetID = $(this).data("bottom-sheet");
    openModalOrBottomSheet(modalID, bottomSheetID);
    $(".address-modal-container").fadeOut();
  });
  $(".add-address-btn-sheet").click(function () {
    var modalID = $(this).data("modal");
    var bottomSheetID = $(this).data("bottom-sheet");
    openModalOrBottomSheet(modalID, bottomSheetID);
    $(".address-modal-container").fadeOut();
  });
  $(".close-cara-modal").click(function () {
    $(".modal-cara-bayar").fadeOut();
    $("body").css("overflow", "auto");
    $("#overlay").fadeOut();
  });
  $(".close-cara-sheet").click(function () {
    $(".cara-bayar-bottom-sheet-main").slideUp();
    $("#overlay").fadeOut();
    $("body").css("overflow", "auto");
  });
  $(".close-exit-sheet").click(function () {
    $(".exit-bottom-sheet").slideUp();
    $("body").css("overflow", "auto");
    $("#overlay").fadeOut();
  });

  $("#overlay").click(function () {
    closeModalOrBottomSheet();
  });

  $(".close-modal").click(function () {
    closeModalOrBottomSheet();
  });

  $(".copy-btn").click(function () {
    // Select the account number element and get its text
    var accountNumber = $(".account-number").text();

    // Create a temporary input element
    var tempInput = $("<input>");

    // Append the account number to the input element's value
    tempInput.val(accountNumber);

    // Append the input element to the body
    $("body").append(tempInput);

    // Select the text inside the input element
    tempInput.select();

    // Copy the selected text
    document.execCommand("copy");

    // Remove the temporary input element
    tempInput.remove();

    // Alert the user that the account number is copied
    // alert("Account number copied: " + accountNumber);
  });

  $(".copy-btn-2").click(function () {
    var accountNumber = $(".account-num-2").text();

    var tempInput = $("<input>");

    tempInput.val(accountNumber);

    $("body").append(tempInput);

    tempInput.select();

    document.execCommand("copy");

    tempInput.remove();
  });
  $(".cara-bayar-tab").click(function () {
    $(".cara-bayar-tab").removeClass("active");
    $(this).addClass("active");

    $(".detail-wrap").removeClass("active");
    var tabContentId = $(this).index() + 1;
    $(".tab-" + tabContentId).addClass("active");
  });

  $(".close-cara-modal").click(function () {
    $("#cara-bayar-modal").hide();
  });

  var hours = 1;
  var minutes = 0;
  var seconds = 0;
  var timerInterval;

  function updateTimer() {
    var formattedHours = ("0" + hours).slice(-2);
    var formattedMinutes = ("0" + minutes).slice(-2);
    var formattedSeconds = ("0" + seconds).slice(-2);
    $(".counter").text(
      formattedHours + " : " + formattedMinutes + " : " + formattedSeconds
    );
  }

  function decrementTimer() {
    seconds--;
    if (seconds < 0) {
      minutes--;
      seconds = 59;
      if (minutes < 0) {
        hours--;
        minutes = 59;
        if (hours < 0) {
          clearInterval(timerInterval);
        }
      }
    }
    updateTimer();
  }

  $("#startTimer").click(function () {
    if (!timerInterval) {
      timerInterval = setInterval(decrementTimer, 1000);
    }
  });

  function startCounter() {
    if (!timerInterval) {
      timerInterval = setInterval(decrementTimer, 1000);
    }
  }
});
