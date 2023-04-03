// Анимация флагов
const flagsContainer = document.querySelector('.main-screen__image-circle_gray')
function flagsAnimate() {
	setTimeout(() => {
		flagsContainer.classList.add('flags-animation')
	}, 3000)
}

window.addEventListener('DOMContentLoaded', flagsAnimate)

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

// Открытие/закрытие мобильного меню
const navigation = document.querySelector('.navigation')
const mobileMenuButton = navigation.querySelector('.navigation__menu-button')
const navMenu = navigation.querySelector('nav')

mobileMenuButton.addEventListener('click', () => {
	if (navMenu.clientHeight === 0) {
		navMenu.style.height = navMenu.scrollHeight + 10 + 'px'
	} else {
		navMenu.style.height = ''
	}
})

// Запрещаем ввод !@#$%^&*()
const searchInput = document.querySelector('.main-screen__search-input')

searchInput.addEventListener('input', () => {
	searchInput.value = searchInput.value.replace(/[!@#$%^&*()]/g, '')
})
