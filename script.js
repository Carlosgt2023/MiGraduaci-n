document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  let index = 0;

  function updateCarousel() {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  if (slides.length > 0) {
    next.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      updateCarousel();
    });

    prev.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    // Auto-play cada 5 segundos
    setInterval(() => {
      index = (index + 1) % slides.length;
      updateCarousel();
    }, 5000);
  }
});
