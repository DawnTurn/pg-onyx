const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const body = document.querySelector('body')
const tl = gsap.timeline()


burger.addEventListener('click', () => {
    nav.classList.toggle('active')
    burger.classList.toggle('rotate')
    body.classList.toggle('no-scroll')
})

tl.fromTo(".hero", 0.8, { width: 0 }, { width: "100%", ease: Power4.easeInOut })
  .fromTo(
    ".hero-section",
    0.7,
    { opacity: 0, y: "-40px" },
    { opacity: 1, y: 0, ease: "bounce" }
  )
  .fromTo(
    "header a",
    0.6,
    { opacity: 0 },
    { opacity: 1, stagger: 0.16 },
    "-=.5"
  );

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo('.about-us', .5, 
    {opacity: 0, x: '-50px'}, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: '.about-us',
            start: 'top 700',
            end: 'bottom center',
        }
    })

gsap.fromTo(
  ".portfolio",
  0.5,
  { opacity: 0, x: "50px" },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".portfolio",
      start: "top 700",
      end: "bottom center",

      
    },
  }
);


gsap.fromTo('.services', .5, 
    {opacity: 0, x: '-50px'}, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: '.services',
            start: 'top 700',
            end: 'bottom center',
        }
    })


gsap.fromTo(
  ".Contact",
  0.5,
  { opacity: 0, x: "50px" },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".Contact",
      start: "top 700",
      end: "bottom center",
    },
  }
);

