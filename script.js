const trackButton = document.getElementById("track-button");
const progressCheck = document.getElementById("check-progress");
const progressBar = document.querySelector(".progress"),
  copyRight = document.querySelector("#copyright");
const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000; // Milliseconds in a day
let updater; // Declare updater outside the function scope to make it accessible globally

let progress = 0; // Initial progress
const checkProgress = () => {
  const recipientName = document.getElementById("recipientName").value.toLowerCase();
  const deliveryAddress = document.getElementById("deliveryAddress").value.toLowerCase();

  if (recipientName !== "michael long" || deliveryAddress !== "kl3258jj") {
    alert("Recipient not found");
    return;
  }
  document.getElementById("deliveryForm").classList.add("hidden");
  document.getElementById("deliveryStatus").classList.remove("hidden");
  updateProgress();
};
const incrementProgress = () => {
  // Increment progress by 25%
  progress += 25;
};
const updateProgress = () => {
  // Check for existing progress in localStorage
  const storedProgress = localStorage.getItem("deliveryProgress");
  if (storedProgress) {
    progress = parseInt(storedProgress); // Load progress from localStorage
    progressBar.style.width = `${progress}%`;
    const progressValue = document.getElementById("progress-value");
    progressValue.textContent = `${progress.toString()}%`;
  } else {
    progress += 25; // Increment progress by 25%
    progressBar.style.width = `${progress}%`;
    progressValue.textContent = `${progress.toString()}%`;

    updater = setInterval(incrementProgress, DAY_IN_MILLISECONDS); // Update every 24 hours
    localStorage.setItem("deliveryProgress", progress); // Store progress in localStorage
  }
  if (progress === 100) {
    trackButton.textContent = "Delivered!";
    trackButton.disabled = true;
    clearInterval(updater); // Clear the interval once progress is complete
  }
};

progressCheck.addEventListener("click", checkProgress);
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".navigation");

hamburgerMenu.addEventListener("click", () => {
  navigation.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});
copyRight.textContent = new Date().getFullYear();
