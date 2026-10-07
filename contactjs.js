
function showmobilenav() {
    let nav_mobile = document.getElementById("nav_mobile")
    let line_btn = document.getElementById("line_btn")
    let Xicone = document.getElementById("Xdjqi")

    if (nav_mobile.style.display === "block") {
        // Close menu
        nav_mobile.style.display = "none";
        line_btn.style.display = "block";
        Xicone.style.display = "none";
    } else {
        // Open menu
        nav_mobile.style.display = "block";
        line_btn.style.display = "none";
        Xicone.style.display = "block";
    }
}






document.addEventListener("DOMContentLoaded", () => {

    const icons = document.querySelectorAll(".animate-float-slow");

    //   console.log("Icons found:", icons.length); // debug

    icons.forEach((icon) => {

        function moveRandom() {
            const x = Math.random() * 200 - 100;
            const y = Math.random() * 200 - 100;

            icon.style.transform = `translate(${x}px, ${y}px)`;

            setTimeout(moveRandom, 2000);
        }

        moveRandom();
    });

});





















// const icons = document.querySelectorAll(".animate-float-slow");

// icons.forEach((icon) => {
//     function moveRandom() {
//         const x = Math.random() * 100 - 50; // -50 to 50
//         const y = Math.random() * 100 - 50;

//         icon.style.transform = `translate(${x}px, ${y}px)`;

//         setTimeout(moveRandom, 3000 + Math.random() * 2000);
//     }

//     moveRandom();
// });


// document.addEventListener("DOMContentLoaded", () => {

//     const icons = document.querySelectorAll(".animate-float-slow");

//     icons.forEach((icon) => {
//         function moveRandom() {
//             const x = Math.random() * 100 - 50;
//             const y = Math.random() * 100 - 50;

//             icon.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;

//             setTimeout(moveRandom, 3000 + Math.random() * 2000);
//         }

//         moveRandom();
//     });

// });

document.addEventListener("DOMContentLoaded", () => {

  const icons = document.querySelectorAll(".animate-float-slow121");

  // DEBUG (important)
  console.log("Icons found:", icons.length);

  icons.forEach((icon) => {

    function teleport() {

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      const duration = 200 + Math.random() * 400; // super fast ⚡

      // smooth feel (optional but recommended)
      icon.style.transition = `transform ${duration}ms linear`;

      icon.style.transform = `translate(${x}px, ${y}px)`;

      setTimeout(teleport, duration);
    }

    teleport();
  });

});

