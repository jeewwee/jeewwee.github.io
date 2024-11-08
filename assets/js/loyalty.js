$(document).ready(function () {
  let currentIndex = 0;
  const cards = $(".mian-card-container").find(".card");
  const totalCards = cards.length;

  function showCard(index) {
    cards.removeClass("active");
    cards.eq(index).addClass("active");
    updateProgress(index);
  }

  function updateProgress(index) {
    const container = $(".progress-container");

    container.each(function () {
      const progressWrap = $(this).find(".progress-wrap");
      const progressSvg = $(this).find(".progress-svg");

      progressWrap.removeClass("active");
      progressSvg.removeClass("active");

      for (let i = 0; i <= index; i++) {
        progressWrap.eq(i).addClass("active");
      }

      progressSvg.eq(index).addClass("active");
    });

    const plantContainer = $(".plant-container");
    const path = plantContainer.find("path");
    if (index === 0) {
      path.attr("fill", "#D67242");
    } else if (index === 1) {
      path.attr("fill", "#959AA3");
    } else if (index === 2) {
      path.attr("fill", "#DAAD27");
    }

    const benefitCards = $(".bronze-benifit-card");
    benefitCards.each(function (i) {
      const content = $(this).find(".content");
      content.hide();
      content.slice(0, index + 1).show();
    });
  }
  function updateText(index) {
    const textContainer = $(".point-text");
    const diamondWrap = $(".diamond-wrap");
    const loyaltyName = $(".benifit-name");

    if (index === 0) {
      textContainer.text("Collect 10,000 points to advance to platinum level");
    } else if (index === 1) {
      textContainer.text("Collect 16,000 points to advance to platinum level");
    } else if (index === 2) {
      textContainer.text("You are at the highest level");
    }
    if (index === 0) {
      loyaltyName.text("Benefit Bronze Level");
    } else if (index === 1) {
      loyaltyName.text("Benefit Silver Level");
    } else if (index === 2) {
      loyaltyName.text("Benefit Gold Level");
    }
    diamondWrap.empty();
    for (let i = 0; i <= index; i++) {
      const svg =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4.19922H7.70005L2.80005 11.1992L12.6 21.6992L9.10005 11.1992L14 4.19922Z" fill="#CFA42A" stroke="#202121"/><path d="M18.9001 11.1992L14.0001 4.19922L9.1001 11.1992L14.0001 23.7992L18.9001 11.1992Z" fill="#DAAD27"/><path d="M26.9062 10.7986L20.7812 3.79859C20.6993 3.70506 20.5984 3.63005 20.4853 3.57856C20.3721 3.52708 20.2493 3.50029 20.125 3.5H7.87498C7.75066 3.50029 7.62783 3.52708 7.51467 3.57856C7.40152 3.63005 7.30063 3.70506 7.21873 3.79859L1.09373 10.7986C0.950842 10.9617 0.873627 11.1721 0.877063 11.389C0.880499 11.6058 0.964339 11.8137 1.11233 11.9722L13.3623 25.0972C13.4442 25.185 13.5433 25.2549 13.6533 25.3028C13.7634 25.3507 13.8821 25.3753 14.0022 25.3753C14.1222 25.3753 14.2409 25.3507 14.351 25.3028C14.4611 25.2549 14.5601 25.185 14.642 25.0972L26.892 11.9722C27.0394 11.8131 27.1224 11.605 27.1251 11.3881C27.1277 11.1713 27.0497 10.9612 26.9062 10.7986ZM24.3217 10.5H19.6875L15.75 5.25H19.728L24.3217 10.5ZM8.15717 12.25L11.4526 20.4892L3.76358 12.25H8.15717ZM17.9572 12.25L14 22.1441L10.0428 12.25H17.9572ZM10.5 10.5L14 5.83297L17.5 10.5H10.5ZM19.8428 12.25H24.2364L16.5473 20.4892L19.8428 12.25ZM8.27201 5.25H12.25L8.31248 10.5H3.67826L8.27201 5.25Z" fill="#202121"/></svg>';
      diamondWrap.append(svg);
    }
  }

  $(".prev").click(function () {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    showCard(currentIndex);
    updateText(currentIndex);
  });

  $(".next").click(function () {
    currentIndex = (currentIndex + 1) % totalCards;
    showCard(currentIndex);
    updateText(currentIndex);
  });

  const hammer = new Hammer($(".mian-card-container")[0]);
  hammer.on("swipeleft", function () {
    currentIndex = (currentIndex + 1) % totalCards;
    showCard(currentIndex);
    updateText(currentIndex);
  });

  hammer.on("swiperight", function () {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    showCard(currentIndex);
    updateText(currentIndex);
  });

  updateProgress(0);
  updateText(0);

  function closeModalOrBottomSheet() {
    $(".points-info-sheet").slideUp();

    $("#overlay").fadeOut();

    $("body").css("overflow", "auto");
  }

  $("#overlay").click(function () {
    closeModalOrBottomSheet();
  });
  $(".close-modal-icon").click(function () {
    closeModalOrBottomSheet();
  });
  $(".point-sheet-btn").click(function () {
    console.log("hello");
    $(".points-info-sheet").css("bottom", "0").slideDown();
    $("#overlay").fadeIn();
    $("body").css("overflow", "hidden");
  });
});
