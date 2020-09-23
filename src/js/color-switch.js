/*
Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body 
на случайное значение из массива используя инлайн-стиль. 
При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. 
Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

Для генерации случайного числа (индекс элемента массива цветов), 
используй функцию randomIntegerFromInterval.
*/

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  tagBodyRef: document.querySelector('body'),
  startBtnRef: document.querySelector('button[data-action="start"]'),
  stopBtnRef: document.querySelector('button[data-action="stop"]'),
};

refs.startBtnRef.addEventListener('click', startChangeTheme);
refs.stopBtnRef.addEventListener('click', stopChangeTheme);

let timerId = null;

function startChangeTheme() {
  refs.startBtnRef.setAttribute("disabled", '');
  timerId = setInterval(() => {
    refs.tagBodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
};

function stopChangeTheme() {
  refs.startBtnRef.removeAttribute("disabled");
  clearInterval(timerId);
};

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};