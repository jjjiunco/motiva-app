// Updated app.js for random image and quote functionality

// Array of image paths. These images live in the root of the web app so they can be cached and served offline.
const IMAGES = [
  './bg1.jpeg', './bg2.jpeg', './bg3.jpeg', './bg4.jpeg', './bg5.jpeg',
  './bg6.jpeg', './bg7.jpeg', './bg8.jpeg', './bg9.jpeg', './bg10.jpeg'
];

// Array of motivational quotes shown beneath each image.
const quotes = [
  // Longer, more lyrical motivational quotes. Each string may span multiple clauses to evoke
  // imagery and inspire more deeply. Feel free to add your own favourite sayings here.
  '공부는 물 한 바구니를 옮기듯 작은 물방울이 모여 강을 이룬다. 오늘의 노력이 미래의 당신을 빛나게 한다.',
  '지식은 세상을 넓게 보는 창이다. 매일 새로운 것을 배우며 깊어지는 나를 느껴보자.',
  '포기하지 않는 마음이 있는 한 당신의 미래는 언제나 빛날 것이다. 느리더라도 꾸준히 걸어가라.',
  '배움의 즐거움은 삶을 풍성하게 만든다. 경험과 지식이 쌓일수록 우리는 더욱 단단해진다.',
  '진정한 성취는 남과 비교하지 않고 어제의 나보다 오늘 더 나아진 자신과 비교할 때 찾아온다.',
  '조금씩 조금씩 쌓아가는 노력들이 어느 날 갑자기 큰 변화를 만들어 낸다. 지금 이 순간부터 시작하라.'
];

// Index of the current image in the rotation. Initialized to -1 so the first call to updateContent() sets index 0.
let currentIndex = -1;

/**
 * Returns a random integer between 0 (inclusive) and max (exclusive).
 * @param {number} max
 */
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Updates the background image and quote on the page.
 * The background cycles sequentially through the IMAGES array and the quote is chosen at random.
 */
function updateContent() {
  // Advance image index in a circular fashion
  currentIndex = (currentIndex + 1) % IMAGES.length;

  // Update background image
  const bgImageEl = document.getElementById('bgImage');
  if (bgImageEl) {
    bgImageEl.src = IMAGES[currentIndex];
  }

  // Update quote
  const quoteEl = document.getElementById('quote');
  if (quoteEl) {
    const quoteIndex = getRandomIndex(quotes.length);
    quoteEl.textContent = quotes[quoteIndex];
  }
}

// When the DOM is ready, display the first image/quote and set up event listeners.
document.addEventListener('DOMContentLoaded', () => {
  // Populate the first image and quote
  updateContent();

  // Change image and quote on each click/tap anywhere on the body
  document.body.addEventListener('click', updateContent);

  // Register service worker for offline caching
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').catch(err => {
      console.error('Service worker registration failed:', err);
    });
  }
});
