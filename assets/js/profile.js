$(document).ready(function () {
  $(".profile").click(function () {
    $(".profile").removeClass("active");

    $(this).addClass("active");

    if ($(this).hasClass("profile-detail-tab")) {
      $(".profile-detail").css("display", "flex");
      $(".package-container").css("display", "none");
  } else {
      $(".profile-detail").css("display", "none");
      $(".package-container").css("display", "flex");
  }

    $(".profile-setting").removeClass("active");

    $(this).closest(".profile-setting").addClass("active");
  });

  function isMobile() {
    return $(window).width() < 1030;
  }

  function handleView() {
    var mobile = isMobile();

    if (mobile) {
      $(".profile-detail").hide();

      $(".profile-detail-tab").click(function () {
        $(".profile-main").hide();
      });
      $(".pesanan-saya").click(function () {
        $(".profile-main").hide();
      });
      $(".back-btn-1").click(function () {
        $(".profile-main").show();
        $(".profile-detail").hide();
      });
      $(".back-btn-2").click(function () {
        $(".profile-main").show();
        $(".package-container").hide();
      });
    } else {
      $(".profile-detail").show();
    }
  }

  $(window).resize(function () {
    handleView();
  });

  $(document).ready(function () {
    handleView();
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
    console.log("hello")

    var modalID = $(this).data("modal");
    var bottomSheetID = $(this).data("bottom-sheet");
    openModalOrBottomSheet(modalID, bottomSheetID);
  });


  $("#overlay").click(function () {
    closeModalOrBottomSheet();
  });
  $(".edit-address").click(function () {
    var modalID = $(this).data("modal");
    var bottomSheetID = $(this).data("bottom-sheet");
    openModalOrBottomSheet(modalID, bottomSheetID);
    $(".address-modal-heading").text("Edit Address");
    $(".address-modal-container").fadeOut();
  });
});
$(".address-setting h3").click(function() {
  // Remove "active" class from all addresses
  $(".address").removeClass("active");

  // Add "active" class to parent address
  $(this).closest(".address").addClass("active");

  // Change text to "Hapus" for clicked address
  $(this).text("Hapus");
});
$(".toggleButton1").click(function () {
  var hiddenSection = $(".package-hidden1 ");

  if (hiddenSection.css("display") === "none") {
    hiddenSection.css("display", "flex");
    $(".arrow1").css("rotate", "180deg");
  } else {
    hiddenSection.css("display", "none");
    $(".arrow1").css("rotate", "0deg");
  }
});

$(".toggleButton2").click(function () {
  var hiddenSection = $(".package-hidden2");

  if (hiddenSection.css("display") === "none") {
    hiddenSection.css("display", "flex");
    $(".arrow2").css("rotate", "180deg");
  } else {
    hiddenSection.css("display", "none");
    $(".arrow2").css("rotate", "0deg");
  }
});

$(".toggleButton3").click(function () {
  var hiddenSection = $(".package-hidden3");
  if (hiddenSection.css("display") === "none") {
    hiddenSection.css("display", "flex");
    $(".arrow3").css("rotate", "180deg");
  } else {
    hiddenSection.css("display", "none");
    $(".arrow3").css("rotate", "0deg");
  }


  
});
