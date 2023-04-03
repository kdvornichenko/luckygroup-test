// Получение описания
const subheaderElem = document.querySelector('.main-screen__description')

fetch('https://baconipsum.com/api/?type=lucky')
	.then((response) => response.json()) // Парсим ответ
	.then((data) => {
		// Обновляем содержимое элемента
		subheaderElem.textContent = data[0]
	})
	.catch((error) => {
		console.error('Ошибка при получении описания:', error)
	})
