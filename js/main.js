const badgeEL = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener(
	'scroll',
	_.throttle(function () {
		console.log(window.scrollY);
		if (window.scrollY > 600) {
			//배지 숨기기
			//gsap.to(요소, 지속시간, 옵션-보통 객체데이터를 많이 사용한다)
			gsap.to(badgeEL, 0.6, {
				opacity: 0,
				display: 'none',
			});
			// 버튼 보이기!
			gsap.to(toTopEl, 0.2, {
				x: 0,
			});
		} else {
			//배지 보이기
			gsap.to(badgeEL, 0.6, {
				opacity: 1,
				display: 'block',
			});

			// 버튼 숨기기!
			gsap.to(toTopEl, 0.2, {
				x: 100,
			});
		}
	}, 300)
);

/* 0.3초 밀리세컨드 단위. 화면을 scroll하면 함수가 수십개 실행되는데, 0.3초 단위로 부하를 주어 (로데쉬에서 제공하는 throttle의 기능) 스크롤을 여러번 해도 사이트가 과부하되지 않도록 함*/

/* _.throttle(함수, 시간) */

toTopEl.addEventListener('click', function () {
	gsap.to(window, 0.7, {
		scrollTo: 0,
	});
});

// window: 윈도우 화면

const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function (fadeEL, index /*매개변수*/) {
	gsap.to(fadeEL, 1, {
		delay: (index + 1) * 0.7,
		/*index는 0부터 시작하는 zero based nunbering의 개념*/
		opacity: 1 /* 0.7, 1.4, 2.1, 2.7 */,
	});
});

new Swiper('.notice-line .swiper-container', {
	direction: 'vertical',
	autoplay: true,
	loop: true,
}); // new = 자바스크립트의 생성자(클래스). new Swiper (선택자, 옵션)

new Swiper('.promotion .swiper-container', {
	slidesPerView: 3, //한번에 보여줄 슬라이드 개수
	spaceBetween: 10, //슬라이드 사이 여백
	centeredSlides: true, // 1번 슬라이드가 가운데 보이기
	loop: true,
	/*autoplay: {
        delay: 5000  // 5초
    }*/
	pagination: {
		el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자 : swiper-pagination 요소를 실제로 페이지 번호를 사용하는 요소로 사용하겠다는 의미로 선택자를 넣으면 swiper.js 내부에서 선택자의 요소에 맞는 내용을 찾아 페이지 번호를 사용할 수 있도록 동작이 된다.
		clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
	},
	navigation: {
		prevEl: '.promotion .swiper-prev',
		nextEl: '.promotion .swiper-next',
	},
});

new Swiper('.awards .swiper-container', {
	autoplay: true,
	loop: true,
	spaceBetween: 30,
	slidesPerView: 5,
	navigation: {
		// 여기서부터는 화살표 버튼 기능 추가 옵션
		prevEl: '.awards .swiper-prev',
		nextEl: '.awards .swiper-next',
	},
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
	isHidePromotion = !isHidePromotion; //함수 뒤에 느낌표를 붙여 반대값을 초기설정값에 반환시켜줄 수 있다.
	if (isHidePromotion) {
		//숨김 처리. 함수에 값이 재할당돼서 true이기 때문에
		promotionEl.classList.add('hide');
	} else {
		// 보임 처리
		promotionEl.classList.remove('hide');
	}
});

function random(min, max) {
	// 'to.Fixed()'를 통해 반환된 문자 데이터를,
	// 'parseFlat()'을 통해 소수점을 가지는 숫자 데이터로 변환
	return parseFloat(Math.random() * (max - min) + min);
}

function floatingObject(selector, delay, size) {
	// gsap.to(요소, 시간, 옵션);
	gsap.to(
		selector, // 선택자
		random(1.5, 2.5), // 애니메이션 동작 시간
		{
			//여러 옵션
			y: size,
			repeat: -1,
			yoyo: true,
			ease: Power1.easeInOut,
			delay: random(0, delay),
		}
	);
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
	new ScrollMagic.Scene({
		/*객체 데이터, 감시할 장면(scene) 추가*/ triggerElement: spyEl,
		triggerHook: 0.8,
	}) // Scene: 특정한 요소를 감시하는 매소드. 여기서는 section들이 화면에 보이는지 안 보이는지 감시하는 용도
		.setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
		.addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});
