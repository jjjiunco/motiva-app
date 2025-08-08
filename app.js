// Updated app.js for random image and quote functionality

// Array of image paths. These images live in the root of the web app so they can be cached and served offline.
const IMAGES = [
  './bg1.jpeg', './bg2.jpeg', './bg3.jpeg', './bg4.jpeg', './bg5.jpeg',
  './bg6.jpeg', './bg7.jpeg', './bg8.jpeg', './bg9.jpeg', './bg10.jpeg'
];

// Array of motivational quotes shown beneath each image.
const quotes = [
  '공부는 자신을 믿는 가장 확실한 방법이다.',
  '성공은 준비된 자에게 찾아온다.',
  '오늘의 노력이 내일의 성과를 만든다.',
  '배움에 끝은 없다.',
  '천재는 노력하는 자를 이길 수 없다.',
  '시작이 반이다.',
  '작은 습관이 큰 변화를 만든다.',
  '노력은 배신하지 않는다.',
  '포기는 빠를수록 좋다, 그러나 시도는 반드시 있어야 한다.',
  '미래는 오늘 무엇을 하느냐에 달려 있다.'
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
