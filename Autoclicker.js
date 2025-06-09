let x = 0;
let y = 0;

document.addEventListener('mousemove', (e) => {
  x = e.clientX;
  y = e.clientY;
});

const intervalId = setInterval(() => {
  const el = document.elementFromPoint(x, y);
  if (el) {
    el.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }));
  }
}, 10);