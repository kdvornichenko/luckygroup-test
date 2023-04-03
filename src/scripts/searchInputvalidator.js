// Запрещаем ввод !@#$%^&*()
const searchInput = document.querySelector('.main-screen__search-input')

searchInput.addEventListener('input', () => {
	searchInput.value = searchInput.value.replace(/[!@#$%^&*()]/g, '')
})
