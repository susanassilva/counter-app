const count = document.querySelector('.count');
const add = document.querySelector('.btn-add');
const subtract = document.querySelector('.btn-subtract');
const reset = document.querySelector('.btn-reset');


add.addEventListener("click", () => {
  count.innerHTML++;
  setColor();
});


subtract.addEventListener("click", () => {
  count.innerHTML--;
  setColor();
});

reset.addEventListener("click", () => {
  count.innerHTML = 0;
  setColor();
})

const setColor = () => {
  if (count.innerHTML > 0) {
    count.style.color = 'green';
  } else if (count.innerHTML < 0) {
    count.style.color = 'orangered';
  } else {
    count.style.color = 'white';
  }
}