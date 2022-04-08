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

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function (){
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, { //객체데이터 생성
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, { //객체데이터 생성
      opacity: 1,
      display: 'block'
    });
  }
},300));

// _.throttle(함수, 시간)

//fade-in 설정
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1 ) * .7, //하나씩 나오게 index 설정 (0.7, 1.4...이렇게 나타난다)
    opacity: 1
  });
});

/**
 * 슬라이드 요소 관리
 */
//(tjsxorwk, dhqtus)
 new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
}) //생성자
