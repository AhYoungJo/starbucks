const searchEL =
	document.querySelector(
		'.search'
	); /*class는 JS에서 불러올 떄 앞에 comma 붙이기 */
const searchInputEL = document.querySelector('input');

searchEL.addEventListener('click', function () {
	searchInputEL.focus();
});

searchInputEL.addEventListener('focus', function () {
	searchEL.classList.add(
		'foucsed'
	); /* search 요소를 포함하면서 search라는 클래스 정보를 가지고 있는 객체(searchEL)에 새로운 클래스 추가 */
	/* = input요소에 실제로 focus가 되면 클래스 search인 div, 즉 search 요소 부분에 focused라는 클라스가 자동으로 추가된다 .... 다시 말해 css에서도 작업할 수 있게 되는 것임!*/
	// classlist.add() : 새로운 class를 추가시켜주는 명령어로 이 명령어를 사용하면 css에서도 작업할 수 있께 된다.
	searchInputEL.setAttribute(
		'placeholder',
		'통합검색'
	); /* Attribute: html의 속성, searchInputEL에 html 속성 지정하는 코드, placeholder: input에 웹페이지 처음부터 표시되는 문자 추가 기능 */
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해 연도

