const searchEL = document.querySelector('.search');
const searchInputEl = searchEL.querySelector('input'); //HTML 에서 처음부터 찾지말고 담아놓은 변수에서 부터 찾기

searchEL.addEventListener('click', function() {
  searchInputEl.focus(); //focus 강제적용
});

searchInputEl.addEventListener('focus', function(){
  searchEL.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); //HTML 속성 지정할때 사용
});

searchInputEl.addEventListener('blur', function(){ //focus 가 해지될때
  searchEL.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); 
});