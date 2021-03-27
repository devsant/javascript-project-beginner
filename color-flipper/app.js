const colors = ['green', 'red', 'rgba(133,222,200)', '#f15025'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
}

const changeColor = () => {
  // get random number between 0 - 3 
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
}

btn.addEventListener('click', changeColor);