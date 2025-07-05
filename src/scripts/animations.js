import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    const tl = gsap.timeline({
        ease: "power2.out",
        scrollTrigger: {
            scrub: 1,
            start: "top top",
        },
    });

    tl.to("#hero-key", { scale: 1, duration: 0.4 })
        .to("#hero-key-logo", { opacity: 1, scale: 0.7, duration: 0.8 }) 
        .to("#hero-text", { opacity: 1 }, "<")
        .to("#hero-title", { opacity: 1 }, "<")
        .to("#hero-subtitle", { opacity: 1 }, "<")
        .to(
            "#logo-mask",
            {
                maskSize: "30%",
                duration: 3,
            },
        )
        .to(
            "#hero-key",
            {
                opacity: 0,
                duration: 0.2,
            },
        );

});
