$(".badge").on("click", function () {
  $(".badge").removeClass("active");
  $(this).addClass("active");
});

var $batches = $(".mobile-batch-container .batch");
var batchCount = $batches.length;
var batchIndex = 0;

$batches.not(":first").hide();

$("#next-arrow").click(function () {
  if (batchIndex < batchCount - 1) {
    $batches.eq(batchIndex).hide();
    batchIndex++;
    $batches.eq(batchIndex).css("display", "flex");
  }
});

$("#prev-arrow").click(function () {
  if (batchIndex > 0) {
    $batches.eq(batchIndex).hide();
    batchIndex--;
    $batches.eq(batchIndex).css("display", "flex");
  }
});
(function ($) {
  "use strict";
  $(".modal-link").on("click", function () {
    $("body").addClass("modal-open");
  });
  $(".close-modal").on("click", function () {
    $("body").removeClass("modal-open");
  });
})(jQuery);

(function ($) {
  "use strict";
  $(".modal-link-2").on("click", function () {
    $("body").addClass("modal-open-2");
  });
  $(".close-modal-2").on("click", function () {
    $("body").removeClass("modal-open-2");
  });
})(jQuery);

$(".modal").modal();
setTimeout(function () {
  $(".modal").modal("open");
}, 2000);
