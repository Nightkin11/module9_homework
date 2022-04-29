/* Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота. */

const btn = document.querySelector('.btn');
const result = document.querySelector('.j-result');

function displayResult(data) {
    // console.log('start cards', cards);
    const cardBlock = `
        <div class="card">
          <img
            src="${data.url}"
            class="card-image"
          />
        </div>
      `;
    result.innerHTML = cardBlock;
}

btn.addEventListener('click', () => {
  // Делаем запрос за данными
    const num1 = +document.querySelector('.input1').value;
    const num2 = +document.querySelector('.input2').value;
    if (num1 < 100 || num1 > 300 || num2 < 100 || num2 > 300) {
        result.innerHTML = "<p>одно из чисел вне диапазона от 100 до 300</p>";
    }else{
        fetch(`https://picsum.photos/${num1}/${num2}`)
            .then((response) => {
                return response
            })
            .then((data) => {
                displayResult(data);
            })
            .catch(() => {console.log('error')})
    }
})

/* function start() {
  document.querySelector('.input1').value = 100;
  document.querySelector('.input2').value = 100;
  btn.click();
}
start(); */