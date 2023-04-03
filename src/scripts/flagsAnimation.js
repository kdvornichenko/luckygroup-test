// Анимация флагов
const flagsContainer = document.querySelector('.main-screen__image-circle_gray')
function flagsAnimate() {
	setTimeout(() => {
		flagsContainer.classList.add('flags-animation')
	}, 3000)
}

window.addEventListener('DOMContentLoaded', flagsAnimate)
