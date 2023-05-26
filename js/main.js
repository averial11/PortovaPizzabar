const nav = document.querySelector('.nav-mobile')
const burgerBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav-mobile__item')
const menuImg = document.getElementById('menuImg')

const handleNav = () => {
	nav.classList.toggle('nav-mobile--active')
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-mobile--active')
		})
	})
	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav--items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

function handleImageZoom(event) {
	menuImg.classList.add('zoomed')
}

const currentYear = new Date().getFullYear()
const yearElement = document.getElementById('currentYear')
yearElement.textContent = currentYear

menuImg.addEventListener('mouseleave', () => {
	menuImg.classList.remove('zoomed')
})

burgerBtn.addEventListener('click', handleNav)
menuImg.addEventListener('mousemove', handleImageZoom)
