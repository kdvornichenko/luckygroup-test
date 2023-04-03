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
