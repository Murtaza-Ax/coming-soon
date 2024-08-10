const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// Set the target date and time (Jan 5, 2024, 15:37:25)
const targetDate = new Date("2050-01-01T00:00:00").getTime();

const timeFunction = setInterval(() => {
  // Get the current date and time
  const currentDate = new Date().getTime();

  // Find the time remaining between the current time and the target date
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining <= 0) {
    clearInterval(timeFunction);
    // You can add some message or action when the countdown expires
    return;
  }

  // Time calculations for days, hours, minutes, and seconds
  const secondsRemaining = Math.floor((timeRemaining / 1000) % 60);
  const minutesRemaining = Math.floor((timeRemaining / (1000 * 60)) % 60);
  const hoursRemaining = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  // Update the HTML elements with the remaining time
  seconds.textContent =
    secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;
  minutes.textContent =
    minutesRemaining < 10 ? `0${minutesRemaining}` : minutesRemaining;
  hours.textContent =
    hoursRemaining < 10 ? `0${hoursRemaining}` : hoursRemaining;
  days.textContent = daysRemaining < 10 ? `0${daysRemaining}` : daysRemaining;
}, 1000);
