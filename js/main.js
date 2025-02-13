more.addEventListener('click', () => {
	const targetElement = document.getElementById('target-element')
	targetElement.scrollIntoView({ behavior: 'smooth' })
})

let btns = document.querySelectorAll('.start-btn')
let modal = document.querySelector('.start-modal')
let closeBtn = document.querySelectorAll('.start-modal__close-btn')

for (let btn of btns) {
	btn.addEventListener('click', function () {
		modal.classList.toggle('active')
		document.body.classList.toggle('non-active')
	})
}

closeBtn.forEach(elem =>
	elem.addEventListener('click', function () {
		modal.classList.remove('active')
		modalSend.classList.add('hidden')
		telInp.value = ''
		telInp.classList.remove('error')
		modalContent.classList.remove('hidden')
		document.body.classList.remove('non-active')
	})
)

let burger = document.querySelector('.header__menu-burger')
let nav = document.querySelector('.nav')

burger.addEventListener('click', function () {
	burger.classList.toggle('active')
	nav.classList.toggle('active')
	document.body.classList.toggle('non-active')
})


new Swiper('.swiper', {
	initialSlide: 1,

	effect: 'coverflow',
	breakpoints: {
		1500: {
			coverflowEffect: {
				stretch: 300,
				depth: 250,
				rotate: 0,
				modifier: 2,
				slideShadows: 0,
			},
		},
		1440: {
			coverflowEffect: {
				stretch: 280,
				depth: 250,
				rotate: 0,
				modifier: 2,
				slideShadows: 0,
			},
		},
		1300: {
			coverflowEffect: {
				stretch: 280,
				depth: 250,
				rotate: 0,
				modifier: 2,
				slideShadows: 0,
			},
		},
		1240: {
			coverflowEffect: {
				stretch: 220,
				depth: 250,
				rotate: 0,
				modifier: 2,
				slideShadows: 0,
			},
		},
		1024: {
			coverflowEffect: {
				stretch: 350,
				depth: 250,
				rotate: 0,
				modifier: 2,
				slideShadows: 0,
			},
		},
		950: {
			coverflowEffect: {
				stretch: 260,
				depth: 250,
				rotate: 0,
				modifier: 2,
				slideShadows: 0,
			},
		},
		820: {
			coverflowEffect: {
				stretch: 240,
				depth: 250,
				rotate: 0,
				modifier: 2,
				slideShadows: 0,
			},
		},
		720: {
			coverflowEffect: {
				stretch: 220,
				depth: 250,
				rotate: 0,
				modifier: 2,
				slideShadows: 0,
			},
		},

		660: {
			coverflowEffect: {
				stretch: 200,
				depth: 250,
				rotate: 0,
				modifier: 2,
				slideShadows: 0,
			},
		},
		550: {
			coverflowEffect: {
				stretch: 180,
				depth: 250,
				rotate: 0,
				modifier: 2,
				slideShadows: 0,
			},
		},
		460: {
			coverflowEffect: {
				stretch: 150,
				depth: 250,
				rotate: 0,
				modifier: 2,
				slideShadows: 0,
			},
		},
		350: {
			coverflowEffect: {
				stretch: 120,
				depth: 250,
				rotate: 0,
				modifier: 2,
				slideShadows: 0,
			},
		},
		0: {
			coverflowEffect: {
				stretch: 90,
				depth: 250,
				rotate: 0,
				modifier: 2,
				slideShadows: 0,
			},
		},
	},
	grabCursor: true,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.possibilities__slider-next',
		prevEl: '.possibilities__slider-prev',
	},
})

modalBtn.addEventListener('click', () => {
	console.log(1, telInp.value.length)
	if (telInp.value.length === 18) {
		execute(telInp.value, emailInp.value)
		modalSend.classList.remove('hidden')
		modalContent.classList.add('hidden')
		telInp.value = ''
		telInp.classList.remove('error')
	} else {
		telInp.classList.add('error')
	}
})

window.addEventListener('DOMContentLoaded', function () {
	;[].forEach.call(document.querySelectorAll('.tel-mask'), function (input) {
		let keyCode
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode)
			let pos = this.selectionStart
			if (pos < 3) event.preventDefault()
			let matrix = '+7 (___) ___-__-__',
				i = 0,
				def = matrix.replace(/\D/g, ''),
				val = this.value.replace(/\D/g, ''),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				})
			i = new_value.indexOf('_')
			if (i != -1) {
				i < 5 && (i = 3)
				new_value = new_value.slice(0, i)
			}
			let reg = matrix
				.substr(0, this.value.length)
				.replace(/_+/g, function (a) {
					return '\\d{1,' + a.length + '}'
				})
				.replace(/[+()]/g, '\\$&')
			reg = new RegExp('^' + reg + '$')
			if (
				!reg.test(this.value) ||
				this.value.length < 5 ||
				(keyCode > 47 && keyCode < 58)
			)
				this.value = new_value
			if (event.type == 'blur' && this.value.length < 5) this.value = ''
		}

		input.addEventListener('input', mask, false)
		input.addEventListener('focus', mask, false)
		input.addEventListener('blur', mask, false)
		input.addEventListener('keydown', mask, false)
	})
})
