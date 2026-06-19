/* =========================
   VAIBNEX PREMIUM SCRIPT
========================= */

/* TYPING EFFECT */

const texts = [
  "Web Development",
  "AI Solutions",
  "Internship Programs",
  "Software Development",
  "Future Innovators",
  "Digital Transformation"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing-text");

function typeText() {

  if (!typingElement) return;

  if (charIndex < texts[textIndex].length) {

    typingElement.textContent += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeText, 100);

  } else {

    setTimeout(eraseText, 1500);

  }

}

function eraseText() {

  if (charIndex > 0) {

    typingElement.textContent =
      texts[textIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseText, 50);

  } else {

    textIndex++;

    if (textIndex >= texts.length) {
      textIndex = 0;
    }

    setTimeout(typeText, 500);

  }

}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeText, 1000);
});


/* COUNTER ANIMATION */

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    let count = 0;

    const speed = target / 120;

    const updateCounter = () => {

      count += speed;

      if (count < target) {

        counter.innerText = Math.ceil(count);

        requestAnimationFrame(updateCounter);

      } else {

        counter.innerText = target + "+";

      }

    };

    updateCounter();

  });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

  const stats = document.querySelector(".stats");

  if (!stats) return;

  const position = stats.getBoundingClientRect().top;

  if (position < window.innerHeight && !counterStarted) {

    startCounters();

    counterStarted = true;

  }

});


/* NAVBAR SCROLL EFFECT */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 50) {

    header.style.background =
      "rgba(11,17,32,0.95)";

    header.style.boxShadow =
      "0 5px 20px rgba(0,0,0,0.3)";

  } else {

    header.style.background =
      "rgba(11,17,32,0.85)";

    header.style.boxShadow = "none";

  }

});


/* SCROLL REVEAL ANIMATION */

const revealElements = document.querySelectorAll(
  ".service-card, .intern-card, .project-card, .tech-card, .stat-box"
);

const revealOnScroll = () => {

  revealElements.forEach(el => {

    const top = el.getBoundingClientRect().top;

    const visible = 100;

    if (top < window.innerHeight - visible) {

      el.style.opacity = "1";

      el.style.transform = "translateY(0)";

    }

  });

};

revealElements.forEach(el => {

  el.style.opacity = "0";

  el.style.transform = "translateY(50px)";

  el.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* MOUSE GLOW EFFECT */

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "300px";
glow.style.height = "300px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
  "radial-gradient(circle, rgba(37,99,235,0.20), transparent 70%)";
glow.style.transform = "translate(-50%, -50%)";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});


/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


/* CERTIFICATE VERIFY DEMO */

const verifyForm =
  document.querySelector(".verify-form");

if (verifyForm) {

  verifyForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const input =
      verifyForm.querySelector("input");

    if (input.value.trim() === "") {

      alert("Please enter Certificate ID");

    } else {

      alert(
        "Certificate Verification System will be connected to backend."
      );

    }

  });

}


/* CONTACT FORM DEMO */

const contactForm =
  document.querySelector(".contact-form");

if (contactForm) {

  contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
      "Thank you for contacting Vaibnex. We will get back to you soon."
    );

    contactForm.reset();

  });

}


/* PAGE LOADER EFFECT */

window.addEventListener("load", () => {

  document.body.style.opacity = "0";

  setTimeout(() => {

    document.body.style.transition =
      "opacity 1s ease";

    document.body.style.opacity = "1";

  }, 100);

});
