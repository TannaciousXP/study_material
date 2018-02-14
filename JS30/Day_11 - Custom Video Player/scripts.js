// Grab the elements
const player = document.querySelector('.player');
const video = player.querySelector('.player_video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.player_button');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');
// Build functions
function togglePlay() {
  // if (video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
  /* Shorter way */
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  /* Another way */
  // video.plaused ? video.play() : video.paused();
}

function updateButton() {
  const icon = this.paused ? '► ' : '❚ ❚';
  toggle.innerText = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  console.dir(this.value);
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
// Add listners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => {
  // if (mousedown) {
  //   scrub(e);
  // }
  /* Anotherway */
  mousedown ? scrub(e) : null;
});
/* mousedown && scrub(e) === checkes mousedown then scrub(e) */
// progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('up', () => mousedown = false);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemouse', handleRangeUpdate));

