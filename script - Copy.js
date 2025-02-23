let currentStep = 0;

function nextStep() {
  const steps = document.querySelectorAll(".step");
  const progressBar = document.querySelector(".progress-bar");

  if (currentStep < steps.length) {
    // Mark the current step as completed
    steps[currentStep].classList.add("completed");
    // Update progress bar width based on number of steps completed
    progressBar.style.width = ((currentStep + 1) / steps.length) * 100 + "%";
    currentStep++;
  }
}
