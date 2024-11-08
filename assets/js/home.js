var typing = new Typed(".text", {
  strings: [
    "Taste the Health, savor the flavour.",
    "Nourishing Your Well-being",
  ],
  typeSpeed: 40,
  backSpeed: 10,
  loop: true,
});
var typing = new Typed(".text2", {
  strings: [
    "Taste the Health, savor the flavour.",
    "Nourishing Your Well-being",
  ],
  typeSpeed: 40,
  backSpeed: 10,
  loop: true,
});

const cursor = document.getElementById("cursor");
document.onmousemove = (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.style.display = "block";
};

// setTimeout(function () {
//   odometer.innerHTML = 5000;
// }, 1000);
// setTimeout(function () {
//   odometer2.innerHTML = 5000;
// }, 1000);

function startOdometerAnimation() {
  setTimeout(function () {
    document.getElementById("odometer").innerHTML = 5000;
    document.getElementById("odometer2").innerHTML = 5000;
  }, 1000);
}

// Intersection Observer
const options = {
  threshold: 0.5,
};

const observerTwo = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If the element is in view, start the odometer animation
      startOdometerAnimation();
      // Stop observing once animation starts (optional)
      observer.disconnect();
    }
  });
}, options);

// Observe the odometer elements
observerTwo.observe(document.getElementById("odometer"));
observerTwo.observe(document.getElementById("odometer2"));

$(".next").click(function () {
  var $current = $(".testimonial-section.active");
  var $next = $current.next(".testimonial-section");

  if ($next.length === 0) {
    $next = $(".testimonial-section:first");
  }

  $current.removeClass("active");
  $next.addClass("active");
});

$(".prev").click(function () {
  var $current = $(".testimonial-section.active");
  var $prev = $current.prev(".testimonial-section");

  if ($prev.length === 0) {
    $prev = $(".testimonial-section:last");
  }

  $current.removeClass("active");
  $prev.addClass("active");
});

function addStepIndicators() {
  var numCards = $(".testi-card-wrap").children().length; // Get number of testimonial cards
  for (var i = 0; i < numCards; i++) {
    $(".step-indicators").append('<div class="step-indicator"></div>'); // Add step indicator
  }
}

// Call the function when the document is ready
addStepIndicators();

// Function to update active step indicator based on visibility of testimonial cards
function updateActiveStep(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      var index = $(".testi-card-wrap").index(entry.target); // Get index of the testimonial card container
      $(".step-indicator").removeClass("active-step"); // Remove active class from all indicators
      $(".step-indicator").eq(index).addClass("active-step"); // Add active class to the corresponding indicator
    }
  });
}

// Intersection Observer to track visibility of testimonial card containers
var observer = new IntersectionObserver(updateActiveStep, {
  root: null,
  threshold: 0.5,
}); // Threshold set to 0.5 for when at least half of the testimonial card is in view

// Observe each testimonial card container
$(".testi-card-wrap").each(function () {
  observer.observe(this);
});

function addFeaturedStepIndicators() {
  var numCards = $(".featured-card-wrap").children().length; // Get number of featured cards
  for (var i = 0; i < numCards; i++) {
    $(".featured-step-indicators").append(
      '<div class="featured-step-indicator"></div>'
    ); // Add step indicator
  }
}

// Call the function when the document is ready
addFeaturedStepIndicators();

// Function to update active step indicator based on visibility of featured cards
function updateFeaturedActiveStep(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      var index = $(".featured-card-wrap").index(entry.target); // Get index of the featured card container
      $(".featured-step-indicator").removeClass("active-featured-step"); // Remove active class from all indicators
      $(".featured-step-indicator").eq(index).addClass("active-featured-step"); // Add active class to the corresponding indicator
    }
  });
}

// Intersection Observer to track visibility of featured card containers
var featuredObserver = new IntersectionObserver(updateFeaturedActiveStep, {
  root: null,
  threshold: 0.5,
}); // Threshold set to 0.5 for when at least half of the featured card is in view

// Observe each featured card container
$(".featured-card-wrap").each(function () {
  featuredObserver.observe(this);
});
