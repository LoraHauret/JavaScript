let cnt = 0;
document.addEventListener('DOMContentLoaded', () => {
  let boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    let spans = [];
    for (let i = 0; i < 200; i++) {
      let span = document.createElement('span');
      spans.push(span);
      box.appendChild(span);
      span.style.top = `${i * 1.5}px`;
      span.style.backgroundPositionY = `${i * -1.5}px`;
      span.style.transitionDelay = Math.random() * 1.5 + 0 + 's';
    }
    box.classList.toggle('active');
    spans.forEach((span) => {
      span.style.setProperty(
        '--x',
        Math.floor(Math.random() * 400 - 200) + 'px'
      );
      span.style.setProperty(
        '--r',
        Math.floor(Math.random() * 360 - 0) + 'deg'
      );
    });
    box.addEventListener('click', () => {
      box.classList.toggle('active');
      cnt += 1;
      if (cnt % 2 > 0) box.style.setProperty('--img', 'url("img/2.png")');
      else box.style.setProperty('--img', 'url("img/1.png")');
    });
  });
});
