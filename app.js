
const images = {};
let currentIndex = -1;
const quotes = ["공부는 자신을 믿는 가장 확실한 방법이다.", "성공은 준비된 자에게 찾아온다.", "오늘의 노력이 내일의 성과를 만든다.", "배움에는 끝이 없다.", "포기하지 않는 자가 결국 승리한다."];
function preloadImages() {
    const assets = ["assets/bg4.jpeg", "assets/bg1.jpeg", "assets/bg7.jpeg", "assets/bg3.jpeg", "assets/bg8.jpeg", "assets/bg6.jpeg", "assets/bg9.jpeg", "assets/bg2.jpeg", "assets/bg10.jpeg", "assets/bg5.jpeg"];
    assets.forEach((src) => {
        const img = new Image();
        img.src = src;
        images[src] = img;
    });
}
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
function updateContent() {
    const keys = Object.keys(images);
    currentIndex = (currentIndex + 1) % keys.length;
    const bgImage = document.getElementById('bgImage');
    bgImage.src = keys[currentIndex];
    const quoteEl = document.getElementById('quote');
    const quoteIndex = getRandomIndex(quotes.length);
    quoteEl.textContent = quotes[quoteIndex];
}
document.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    updateContent();
    document.body.addEventListener('click', updateContent);
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js').catch(err => console.error('SW registration failed', err));
    }
});
