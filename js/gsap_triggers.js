gsap.registerPlugin(ScrollTrigger);

// char anim

function splitText(element) {
    let text = element.innerText;
    element.innerHTML = "";
    let words = text.split(" ");
    words.forEach((word, wordIndex) => {
        let wordSpan = document.createElement("span");
        wordSpan.style.whiteSpace = "nowrap";
        word.split("").forEach(char => {
            let span = document.createElement("span");
            span.classList.add("char");
            span.innerText = char;
            wordSpan.appendChild(span);
        });
        element.appendChild(wordSpan);
        if (wordIndex < words.length - 1) {
            element.appendChild(document.createTextNode("\u00A0"));
        }
    });
}

document.querySelectorAll(".animated-text").forEach(textElement => {
    splitText(textElement);
    let chars = textElement.querySelectorAll(".char");

    gsap.to(chars, {
        opacity: 1,
        y: 0,
        stagger: {
            amount: 1,
            from: "start"
        },
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
            trigger: textElement,
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
            scrub: 1,
        }
    });
});

// index tools promotion

let mm = gsap.matchMedia();


gsap.fromTo(".fadeText", {
    y: 140,
}, {
    y: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".full_section",
        start: "top 100%",
        end: "bottom 50%",
        scrub: 2
    }
});

gsap.fromTo(".anim_to_right", {
    x: 140,
}, {
    x: -140,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".trend_logos",
        start: "top 100%",
        end: "bottom 0%",
        scrub: 2
    }
});

gsap.fromTo(".anim_to_left", {
    x: -240,
}, {
    x: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".trend_logos",
        start: "top 100%",
        end: "bottom 0%",
        scrub: 2
    }
});

gsap.fromTo(".transform_xt", {
    y: -100,
}, {
    y: 100,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".ct_middle",
        start: "top 100%",
        end: "bottom 0%",
        scrub: 2
    }
});

gsap.fromTo(".transform_xb", {
    y: 100,
}, {
    y: -100,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".ct_middle",
        start: "top 100%",
        end: "bottom 0%",
        scrub: 2
    }
});

mm.add("(min-width: 768px) and (max-width: 9999px)", () => {

    gsap.fromTo(".ct_left", {
        rotate: -15,
        x: -170,
        y: 100,
        opacity: 0
    }, {
        rotate: 0,
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".lr_bar",
            start: "top 100%",
            end: "bottom 200%",
            scrub: 2
        }
    });
    gsap.fromTo(".ct_left > div", {
        x: -150,
    }, {
        x: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".lr_bar",
            start: "top 80%",
            end: "bottom 120%",
            scrub: 2
        }
    });

    gsap.fromTo(".ct_right", {
        rotate: 15,
        x: 170,
        y: 100,
        opacity: 0
    }, {
        rotate: 0,
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".lr_bar",
            start: "top 100%",
            end: "bottom 200%",
            scrub: 2
        }
    });

    gsap.fromTo(".ct_right > div", {
        x: 150,
    }, {
        x: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".lr_bar",
            start: "top 80%",
            end: "bottom 120%",
            scrub: 2
        }
    });

    gsap.fromTo(".indexLogoLister img", {
        y: 100,
    }, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".indexLogoLister",
            start: "top 100%",
            end: "bottom 100%",
            scrub: 2
        }
    });

});