$(document).ready(function () {
  var slideWidth = 290;
  var slideIndex = 0;
  var maxIndex = $("#tab1 .sport-card").length - 4;
  $("#tab1 .prev").click(function () {
    if (slideIndex > 0) {
      slideIndex--;
      $("#tab1  .sport-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndex * slideWidth + "px)"
      );

      $(".next").removeClass("disabled");
    }

    if (slideIndex === 0) {
      $(this).addClass("disabled");
    }

    if (slideIndex < maxIndex) {
      $(".next").removeClass("disabled");
    }
  });

  $("#tab1 .next").click(function () {
    if (slideIndex < maxIndex) {
      slideIndex++;
      $("#tab1  .sport-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndex * slideWidth + "px)"
      );

      $(".prev").removeClass("disabled");
    }

    if (slideIndex === maxIndex) {
      $(this).addClass("disabled");
    }

    if (slideIndex > 0) {
      $(".prev").removeClass("disabled");
    }
  });

  var slideWidthTwo = 290;
  var slideIndexTwo = 0;
  var maxIndexTwo = $("#tab2 .sport-card").length - 4;

  $("#tab2 .prev").click(function () {
    if (slideIndexTwo > 0) {
      slideIndexTwo--;

      $("#tab2 .sport-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexTwo * slideWidthTwo + "px)"
      );

      $("#tab2 .next").removeClass("disabled");
    }

    if (slideIndexTwo === 0) {
      $(this).addClass("disabled");
    }

    if (slideIndexTwo < maxIndexTwo) {
      $("#tab2 .next").removeClass("disabled");
    }
  });

  $("#tab2 .next").click(function () {
    if (slideIndexTwo < maxIndexTwo) {
      slideIndexTwo++;
      $("#tab2 .sport-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexTwo * slideWidthTwo + "px)"
      );

      $("#tab2 .prev").removeClass("disabled");
    }

    if (slideIndexTwo === maxIndexTwo) {
      $(this).addClass("disabled");
    }

    if (slideIndexTwo > 0) {
      $("#tab2 .prev").removeClass("disabled");
    }
  });

  var slideWidthThree = 290;
  var slideIndexThree = 0;
  var maxIndexThree = $("#tab3 .sport-card").length - 4;

  $("#tab3 .prev").click(function () {
    if (slideIndexThree > 0) {
      slideIndexThree--;

      $("#tab3 .sport-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexThree * slideWidthThree + "px)"
      );

      $("#tab3 .next").removeClass("disabled");
    }

    if (slideIndexThree === 0) {
      $(this).addClass("disabled");
    }

    if (slideIndexThree < maxIndexThree) {
      $("#tab3 .next").removeClass("disabled");
    }
  });

  $("#tab3 .next").click(function () {
    if (slideIndexThree < maxIndexThree) {
      slideIndexThree++;
      $("#tab3 .sport-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexThree * slideWidthThree + "px)"
      );

      $("#tab3 .prev").removeClass("disabled");
    }

    if (slideIndexThree === maxIndexThree) {
      $(this).addClass("disabled");
    }

    if (slideIndexThree > 0) {
      $("#tab3 .prev").removeClass("disabled");
    }
  });

  var slideWidthFour = 290;
  var slideIndexfour = 0;
  var maxIndexFour = $("#tab3 .sport-card").length - 4;

  $("#tab4 .prev").click(function () {
    if (slideIndexfour > 0) {
      slideIndexfour--;

      $("#tab4 .sport-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexfour * slideWidthFour + "px)"
      );

      $("#tab4 .next").removeClass("disabled");
    }

    if (slideIndexfour === 0) {
      // Disable "prev" button
      $(this).addClass("disabled");
    }

    if (slideIndexfour < maxIndexFour) {
      $("#tab4 .next").removeClass("disabled");
    }
  });

  $("#tab4 .next").click(function () {
    if (slideIndexfour < maxIndexFour) {
      slideIndexfour++;
      $("#tab4 .sport-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexfour * slideWidthFour + "px)"
      );

      $("#tab4 .prev").removeClass("disabled");
    }

    if (slideIndexfour === maxIndexFour) {
      $(this).addClass("disabled");
    }

    if (slideIndexfour > 0) {
      $("#tab4 .prev").removeClass("disabled");
    }
  });

  var slideWidthFive = 290;
  var slideIndexFive = 0;
  var maxIndexFive = $("#tab1 .lifehack-card").length - 4;

  $("#tab1 .lifehack-artical-container .life-prev").click(function () {
    if (slideIndexFive > 0) {
      slideIndexFive--;

      $("#tab1 .lifehack-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexFive * slideWidthFive + "px)"
      );

      $("#tab1 .next").removeClass("disabled");
    }

    if (slideIndexFive === 0) {
      $(this).addClass("disabled");
    }

    if (slideIndexFive < maxIndexFive) {
      $("#tab1 .next").removeClass("disabled");
    }
  });

  $("#tab1 .lifehack-artical-container .life-next").click(function () {
    if (slideIndexFive < maxIndexFive) {
      slideIndexFive++;
      $("#tab1 .lifehack-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexFive * slideWidthFive + "px)"
      );

      $("#tab1 .prev").removeClass("disabled");
    }

    if (slideIndexFive === maxIndexFive) {
      $(this).addClass("disabled");
    }

    if (slideIndexFive > 0) {
      $("#tab1 .prev").removeClass("disabled");
    }
  });

  var slideWidthFive = 290;
  var slideIndexFive = 0;
  var maxIndexFive = $("#tab1 .lifehack-card").length - 4;

  $("#tab1 .lifehack-artical-container .life-prev").click(function () {
    if (slideIndexFive > 0) {
      slideIndexFive--;

      $("#tab1 .lifehack-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexFive * slideWidthFive + "px)"
      );

      $("#tab1 .next").removeClass("disabled");
    }

    if (slideIndexFive === 0) {
      $(this).addClass("disabled");
    }

    if (slideIndexFive < maxIndexFive) {
      $("#tab1 .next").removeClass("disabled");
    }
  });

  $("#tab1 .lifehack-artical-container .life-next").click(function () {
    if (slideIndexFive < maxIndexFive) {
      slideIndexFive++;
      $("#tab1 .lifehack-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexFive * slideWidthFive + "px)"
      );

      $("#tab1 .prev").removeClass("disabled");
    }

    if (slideIndexFive === maxIndexFive) {
      $(this).addClass("disabled");
    }
    // Check if first card is no longer in view
    if (slideIndexFive > 0) {
      $("#tab1 .prev").removeClass("disabled");
    }
  });

  var slideWidthSix = 290;
  var slideIndexSix = 0;
  var maxIndexSix = $("#tab2 .lifehack-card").length - 4;

  $("#tab2 .lifehack-artical-container .life-prev").click(function () {
    if (slideIndexSix > 0) {
      slideIndexSix--;

      $("#tab2 .lifehack-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexSix * slideWidthSix + "px)"
      );

      $("#tab2 .next").removeClass("disabled");
    }

    if (slideIndexSix === 0) {
      $(this).addClass("disabled");
    }

    if (slideIndexSix < maxIndexSix) {
      $("#tab2 .next").removeClass("disabled");
    }
  });

  $("#tab2 .lifehack-artical-container .life-next").click(function () {
    if (slideIndexSix < maxIndexSix) {
      slideIndexSix++;
      $("#tab2 .lifehack-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexSix * slideWidthSix + "px)"
      );

      $("#tab2 .prev").removeClass("disabled");
    }

    if (slideIndexSix === maxIndexSix) {
      $(this).addClass("disabled");
    }

    if (slideIndexSix > 0) {
      $("#tab2 .prev").removeClass("disabled");
    }
  });

  var slideWidthSeven = 290;
  var slideIndexSeven = 0;
  var maxIndexSeven = $("#tab3 .lifehack-card").length - 4;

  $("#tab3 .lifehack-artical-container .life-prev").click(function () {
    if (slideIndexSeven > 0) {
      slideIndexSeven--;

      $("#tab3 .lifehack-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexSeven * slideWidthSeven + "px)"
      );

      $("#tab3 .next").removeClass("disabled");
    }

    if (slideIndexSeven === 0) {
      $(this).addClass("disabled");
    }

    if (slideIndexSeven < maxIndexSeven) {
      $("#tab3 .next").removeClass("disabled");
    }
  });

  $("#tab3 .lifehack-artical-container .life-next").click(function () {
    if (slideIndexSeven < maxIndexSeven) {
      slideIndexSeven++;
      $("#tab3 .lifehack-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexSeven * slideWidthSeven + "px)"
      );
      $("#tab3 .prev").removeClass("disabled");
    }
    if (slideIndexSeven === maxIndexSeven) {
      $(this).addClass("disabled");
    }
    if (slideIndexSeven > 0) {
      $("#tab3 .prev").removeClass("disabled");
    }
  });

  var slideWidthEight = 290;
  var slideIndexEight = 0;
  var maxIndexEight = $("#tab4 .lifehack-card").length - 4;

  $("#tab4 .lifehack-artical-container .life-prev").click(function () {
    if (slideIndexEight > 0) {
      slideIndexEight--;

      $("#tab4 .lifehack-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexEight * slideWidthEight + "px)"
      );
      $("#tab4 .next").removeClass("disabled");
    }
    if (slideIndexEight === 0) {
      $(this).addClass("disabled");
    }
    if (slideIndexEight < maxIndexEight) {
      $("#tab4 .next").removeClass("disabled");
    }
  });

  $("#tab4 .lifehack-artical-container .life-next").click(function () {
    if (slideIndexEight < maxIndexEight) {
      slideIndexEight++;
      $("#tab4 .lifehack-card-wrapper").css(
        "transform",
        "translateX(" + -slideIndexEight * slideWidthEight + "px)"
      );
      $("#tab4 .prev").removeClass("disabled");
    }
    if (slideIndexEight === maxIndexEight) {
      $(this).addClass("disabled");
    }
    if (slideIndexEight > 0) {
      $("#tab4 .prev").removeClass("disabled");
    }
  });
});

function openTab(tabName, event) {
  var i, tabContent, tabButtons;

  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].querySelector(".filter").classList.remove("active");
  }

  event.currentTarget.querySelector(".filter").classList.add("active");

  tabContent = document.getElementsByClassName("tab-content");

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  var activeTabContent = document.getElementById(tabName);
  activeTabContent.style.display = "block";
}

window.onload = function () {
  var firstTabButton = document.querySelector(".tab-button");
  firstTabButton.querySelector(".filter").classList.add("active");

  var defaultTabContentId = firstTabButton
    .getAttribute("onclick")
    .match(/openTab\('(.+?)'/)[1];

  var defaultTabContent = document.getElementById(defaultTabContentId);
  defaultTabContent.style.display = "block";
};
