// header burger	
function burgerMenu(){
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
   const contact = document.querySelector('.contact')
	burger.addEventListener('click', () => {
		if(!menu.classList.contains('active')){
			menu.classList.add('active')
         contact.classList.add('active')
			burger.classList.add('active-burger')
			body.classList.add('locked')
		} else {
			menu.classList.remove('active')
         contact.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
	window.addEventListener('resize', () => {
		if (window.innerWidth > 767.98){
			menu.classList.remove('active')
         contact.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
}
burgerMenu();
function fixedNav(){
	const nav = document.querySelector('nav')
	const breakpoint = 1
	if (window.scrollY > breakpoint){
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
window.addEventListener('scroll', fixedNav)

const tl = new TimelineMax()
const mySplitText = new SplitText('.start__title', {type: 'chars'})
const chars = mySplitText.chars
tl.from('nav', {y: "-100%", duration: .8})
tl.from('.line1', {y: "-100%", duration: .5})
tl.from('.line3', {y: "-100%", duration: .5})
tl.from('.line4', {y: "-100%", duration: .5})
tl.from('.line2', {y: "-100%", duration: .5})
tl.staggerFrom(chars, .45, {opacity: 0}, .1)
tl.from('.start__btn', {opacity: 0, duration: .3})
tl.from('.start__item', {x: "50%", duration: .7})
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.animation__opacity').forEach((el, index) => {
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: el,
         start: 'top bottom',
         toggleActions: 'play none none reverse',
      }
   })
   tl
      .set(el, {transformOrigin: 'center center'})
      .fromTo(el, {opacity: 0}, {opacity: 1, duration: 1, immediateRender: false})
})
gsap.utils.toArray('.animation__top').forEach((el, index) => {
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: el,
         start: 'top bottom',
         toggleActions: 'play none none reverse',
      }
   })
   tl
      .set(el, {transformOrigin: 'center center'})
      .fromTo(el, {y: "-10%"}, {y: "0%", duration: 1, immediateRender: false})
})
gsap.utils.toArray('.animation__left').forEach((el, index) => {
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: el,
         start: 'top bottom',
         toggleActions: 'play none none reverse',
      }
   })
   tl
      .set(el, {transformOrigin: 'center center'})
      .fromTo(el, {x: "-10%"}, {x: "0%", duration: 1, immediateRender: false})
})
gsap.utils.toArray('.animation__bottom').forEach((el, index) => {
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: el,
         start: 'top bottom',
         toggleActions: 'play none none reverse',
      }
   })
   tl
      .set(el, {transformOrigin: 'center center'})
      .fromTo(el, {y: "50%"}, {y: "0%", duration: 1, immediateRender: false})
})
let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 600
});