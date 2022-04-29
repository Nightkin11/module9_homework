/* Задание 3
Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:
Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
 */
const btn = document.querySelector('.btn');
const result = document.querySelector('.j-result');
let data = localStorage.getItem('localStorage')

function displayResult(data) {
    let cards = '';
    // console.log('start cards', cards);

    data.forEach(item => {
        const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
        cards = cards + cardBlock;
    });

    // console.log('end cards', cards);

    result.innerHTML = cards;
}


btn.addEventListener('click', () => {
    // Делаем запрос за данными
    const pageNum = +document.querySelector('#page').value;
    const limitNum = +document.querySelector('#limit').value;
    if ((pageNum < 1 || pageNum > 10) && (limitNum < 1 || limitNum > 10)) {
        result.innerHTML = "<p>Номер страницы и лимит вне диапазона от 1 до 10</p>";
    } else if (pageNum < 1 || pageNum > 10) {
        result.innerHTML = "<p>Номер страницы вне диапазона от 1 до 10</p>";
    } else if (limitNum < 1 || limitNum > 10) {
        result.innerHTML = "<p>Лимит вне диапазона от 1 до 10</p>";
    } else {
        fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=${limitNum}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                displayResult(data);
                localStorage.setItem('localStorage', JSON.stringify(data))
            })
            .catch(() => { console.log('error') })
    }
})