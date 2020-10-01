const clock = document.querySelector('.clock');

const showClockTime = () => {
  const time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  // Set Minutes
  if (hours < 10) {
    minutes = "0" + hours;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // console.log(`${hour}:${minutes}:${seconds}:${milliseconds}`);

  clock.textContent = `${hours}:${minutes}:${seconds}`;

  setTimeout(() => {
    showClockTime();
  }, 1000);
};

showClockTime();