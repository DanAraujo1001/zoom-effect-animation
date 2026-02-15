gsap.registerPlugin(ScrollTrigger);

let valorMaskSize = "3500vw";

if (window.innerWidth < 1000) {
  valorMaskSize = "4000vw";
}

gsap.to(".mask", {
  maskSize: valorMaskSize,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    pin: true,
    start: "top top",
    end: "bottom -20%",
    scrub: 2,
  },
});

gsap.to(".maskColor", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".mask",
    start: "top top",
    end: "bottom 20%",
    scrub: 1,
  },
});

gsap.from(".content", {
  opacity: 0,
  y: 20,
  scrollTrigger: {
    trigger: ".content",
    start: "top 0%",
    end: "bottom 20%",
    scrub: 1,
  },
});

gsap.from(".conteudoCto", {
  opacity: 0,
  y: 20,
  scrollTrigger: {
    trigger: ".secaoCto",
    start: "0% 70%",
    end: "70% bottom",
    scrub: 1,
    markers: true,
  },
});
