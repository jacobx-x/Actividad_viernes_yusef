const cursor = document.getElementById('custom-cursor');
const cursorImg = document.getElementById('cursor-img');
const cards = document.querySelectorAll('.card');


document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});


cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const imgSrc = card.getAttribute('data-img');
    if (imgSrc) {
      cursorImg.src = imgSrc;
      cursor.classList.add('visible');
    }
  });

  card.addEventListener('mouseleave', () => {
    cursor.classList.remove('visible');
  });
});