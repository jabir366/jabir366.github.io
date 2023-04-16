function countdownTimer() {
  const difference = +new Date("2023-01-15 16:00") - +new Date();
  //let remaining = "Time's up!";
  let remaining = "";

  if (difference > 0) {
    const parts = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
    remaining = Object.keys(parts)
      .map((part) => {
        return `${parts[part]} ${part}`;
      })
      .join(" ");
  }

  document.getElementById("countdown").innerHTML = remaining;
}

countdownTimer();
setInterval(countdownTimer, 1000);

let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
let button = document.querySelector('.y-live');
button.addEventListener('click', function() {
    modal.style.display = (modal.style.display == 'block') ? 'none' : 'block';
});
close.addEventListener('click', function() {
    modal.style.display = 'none';

    document.querySelectorAll('iframe').forEach(v => {
        v.src = v.src
    });
    document.querySelectorAll('video').forEach(v => {
        v.pause()
    });

});
