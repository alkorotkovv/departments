import api from './api.js';

// Получение ссылки на элемент canvas в DOM
const grafica = document.getElementById("grafica");

//Элемент кнопки
const button = document.getElementById("button");
button.addEventListener('click', handleButtonClick);

//Массивы для точек графика
let departments = [];
let hours = [];

//Отрисовка графика
function handleDraw() {
  api.getData()
    .then((result) => {
      departments = result.map(item => item.department);
      hours = result.map(item => item.sum_hours);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      new Chart(grafica, {
        type: 'line',
        data: {
          labels: departments,
          datasets: [
            {
              label: "Общая трудоёмкость (час)",
              data: hours,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2,
            }
          ]
        },
        options: {
          //aspectRatio: 3,
          maintainAspectRatio: false,
          fill: true,
          pointRadius: 5,
          scales: {
            y: {
              beginAtZero: true // назначили оси Y начинать отсчет с нуля
            }
          }
        }
      })
    })
};

//Обработчик клика
function handleButtonClick(evt) {
  handleDraw();
};