
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const counterSection = document.querySelector(".flex.flex-wrap");

    let started = false;

    const startCounter = () => {
        if (started) return; // sirf ek baar chale
        started = true;

        counters.forEach(counter => {
            let target = +counter.getAttribute("data-target");
            let count = 0;
            let speed = 10;

            const updateCount = () => {
    let increment = target / speed;

    if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCount);
    } else {
        counter.innerText = target;
    }
};

            updateCount();
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter();
            }
        });
    }, {
        threshold: 0.5 // jab section ka 50% visible ho
    });

    observer.observe(counterSection);
});

function playVideo(el) {
    const videoId = el.getAttribute("data-video");
    const parent = el.parentElement;

    const videoContainer = parent.querySelector(".video-container");

    videoContainer.innerHTML = `
        <iframe width="100%" height="100%"
            class="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
        </iframe>
    `;

    videoContainer.classList.remove("hidden");

    // overlay hatao
    el.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {

    function startCounter(id, min, max) {
        const el = document.getElementById(id);
        if (!el) return; // safety

        let val = Math.floor(Math.random() * (max - min)) + min;
        el.innerText = val;

        setInterval(() => {
            val += Math.floor(Math.random() * 3) + 1;
            el.innerText = val;
        }, 1000);
    }

    // Calls
    startCounter("views1", 150, 200);
    startCounter("likes1", 20, 40);

    startCounter("views2", 200, 300);
    startCounter("likes2", 25, 50);

    startCounter("views3", 220, 350);
    startCounter("likes3", 30, 60);

    startCounter("views4", 300, 500);
    startCounter("likes4", 40, 80);

});

document.querySelectorAll("button[aria-controls]").forEach(button => {
    button.addEventListener("click", () => {
        const answer = document.getElementById(button.getAttribute("aria-controls"));
        const isOpen = button.getAttribute("aria-expanded") === "true";

        // close all
        document.querySelectorAll("button[aria-expanded='true']").forEach(btn => {
            btn.setAttribute("aria-expanded", "false");
            const el = document.getElementById(btn.getAttribute("aria-controls"));
            el.style.height = "0px";
            el.style.opacity = "0";
        });

        if (!isOpen) {
            button.setAttribute("aria-expanded", "true");

            answer.style.height = answer.scrollHeight + "px";
            answer.style.opacity = "1";
        }
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     // list 1
//     const btn1 = document.getElementById("firstboxBtn");
//     let box1DEs = document.getElementById("faq-answer-0");
//     let iconbox1 = document.getElementById("iconbox1");
//     let rotated = false;
//     if (btn1 && box1DEs && iconbox1) {
//         btn1.addEventListener("click", () => {
//             box1DEs.classList.toggle("max-h-0");

//             rotated = !rotated;
//             iconbox1.style.transform = rotated ? "rotate(180deg)" : "rotate(0deg)";

//         });
//     }

//     // list 2
//     const btn2 = document.getElementById("secdeboxBtn");
//     let box2DEs = document.getElementById("faq-answer-1");
//     let iconbox2 = document.getElementById("iconbox2");
//     let rotated2 = false;
//     if (btn2 && box2DEs && iconbox2) {
//         btn2.addEventListener("click", () => {
//             box2DEs.classList.toggle("max-h-0");

//             rotated2 = !rotated2;
//             iconbox2.style.transform = rotated2 ? "rotate(180deg)" : "rotate(0deg)";

//         });
//     }


//     // list 3
//     const btn3 = document.getElementById("de3boxBtn");
//     let box3DEs = document.getElementById("faq-answer-2");
//     let iconbox3 = document.getElementById("iconbox3");
//     let rotated3 = false;
//     if (btn3 && box3DEs && iconbox3) {
//         btn3.addEventListener("click", () => {
//             box3DEs.classList.toggle("max-h-0");

//             rotated3 = !rotated3;
//             iconbox3.style.transform = rotated3 ? "rotate(180deg)" : "rotate(0deg)";

//         });
//     }


//     // list 4
//     const btn4 = document.getElementById("de4boxBtn");
//     let box4DEs = document.getElementById("faq-answer-3");
//     let iconbox4 = document.getElementById("iconbox4");
//     let rotated4 = false;
//     if (btn4 && box4DEs && iconbox4) {
//         btn4.addEventListener("click", () => {
//             box4DEs.classList.toggle("max-h-0");

//             rotated4 = !rotated4;
//             iconbox4.style.transform = rotated4 ? "rotate(180deg)" : "rotate(0deg)";

//         });
//     }


//     // list 5
//     const btn5 = document.getElementById("de5boxBtn");
//     let box5DEs = document.getElementById("faq-answer-4");
//     let iconbox5 = document.getElementById("iconbox5");
//     let rotated5 = false;
//     if (btn5 && box5DEs && iconbox5) {
//         btn5.addEventListener("click", () => {
//             box5DEs.classList.toggle("max-h-0");

//             rotated5 = !rotated5;
//             iconbox5.style.transform = rotated5 ? "rotate(180deg)" : "rotate(0deg)";

//         });
//     }


//     // list 6
//     const btn6 = document.getElementById("de6boxBtn");
//     let box6DEs = document.getElementById("faq-answer-5");
//     let iconbox6 = document.getElementById("iconbox6");
//     let rotated6 = false;
//     if (btn6 && box6DEs && iconbox6) {
//         btn6.addEventListener("click", () => {
//             box6DEs.classList.toggle("max-h-0");

//             rotated6 = !rotated6;
//             iconbox6.style.transform = rotated6 ? "rotate(180deg)" : "rotate(0deg)";

//         });
//     }
    
    
//     // list 7
//     const btn7 = document.getElementById("de7boxBtn");
//     let box7DEs = document.getElementById("faq-answer-6");
//     let iconbox7 = document.getElementById("iconbox7");
//     let rotated7 = false;
//     if (btn7 && box7DEs && iconbox7) {
//         btn7.addEventListener("click", () => {
//             box7DEs.classList.toggle("max-h-0");

//             rotated7 = !rotated7;
//             iconbox7.style.transform = rotated7 ? "rotate(180deg)" : "rotate(0deg)";

//         });
//     }



// });



function server_btn() {

    // let server_btn_mobile = document.getElementById("server_btn");
    let show_UL_mb = document.getElementById("show_UL-mb");


    // console.log("hiii")
    show_UL_mb.classList.toggle("display_none_pty");


}

