// section 1 

function link_aw(){
    window.location.href = "https://drive.google.com/drive/folders/1h9q0Ar9c4pajIGVabo6gZxzlprhqotV6";
    
}


// section 2 



// section 3 



// section 4 

document.addEventListener("DOMContentLoaded", function () {
          var uniqueSwiper = new Swiper('#custom-unique-slider-section .custom-swiper-instance', {
            slidesPerView: 1,       /* Mobile standard size */
            spaceBetween: 20,       /* Cards ke beech ka gap */
            loop: true,             /* Infinite scroll continuous chalta rahe */
            observer: true,         /* Naye cards dynamically add karne par grid fix rakhta hai */
            observeParents: true,   /* Parents resize hone par updates check karta hai */

            // Autoplay settings
            autoplay: {
              delay: 2500,                  /* Har 2.5 seconds me slide badlegi */
              disableOnInteraction: false,  /* User touch/swipe karega tab bhi autoplay band nahi hoga */
            },

            // Navigation arrows integration
            navigation: {
              nextEl: '#custom-unique-slider-section .swiper-button-next-unique',
              prevEl: '#custom-unique-slider-section .swiper-button-prev-unique',
            },

            // Pagination dots integration
            pagination: {
              el: '#custom-unique-slider-section .swiper-pagination-unique',
              clickable: true,
            },

            // Breakpoints (Responsive layout control)
            breakpoints: {
              // Tablet width (768px se upar)
              768: {
                slidesPerView: 3,   /* Tablet par 3 cards dikhenge */
                spaceBetween: 20,
              },
              // Desktop/PC width (1024px se upar)
              1024: {
                slidesPerView: 5,   /* PC screen par ek sath 5 cards dikhenge */
                spaceBetween: 15,   /* PC screen ke liye adjustment gap */
              }
            }
          });
        });

// section 5 

function video_cardAi(numb){

    const currentVideo = document.getElementById("video" + numb);
    const currentIcon  = document.getElementById("icon" + numb);

    // Sab videos ko band karo
    for(let i = 1; i <= 4; i++){

        const video = document.getElementById("video" + i);
        const icon  = document.getElementById("icon" + i);

        if(i !== numb){

            video.pause();
            video.currentTime = 0;

            icon.innerHTML =
            '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>';
        }
    }

    // Current video toggle
    if(currentVideo.paused){

        currentVideo.play();

        currentIcon.innerHTML =
        '<rect x="6" y="5" width="4" height="14"></rect><rect x="14" y="5" width="4" height="14"></rect>';

    }else{

        currentVideo.pause();

        currentIcon.innerHTML =
        '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>';
    }
}

// section 6 

document.addEventListener("DOMContentLoaded", function () {

    const scrollBox = document.getElementById("aseweam2423");

    // check if element exists
    if (!scrollBox) return;

    function checkScrollEffect() {

      const boxTop = scrollBox.getBoundingClientRect().top;

      if (boxTop < window.innerHeight - 100) {
        scrollBox.classList.add("showScrollEffect");
      }

    }

    window.addEventListener("scroll", checkScrollEffect);

    checkScrollEffect();

  });

// section 7 

 document.addEventListener("DOMContentLoaded", function () {
            var sldrZ9x = new Swiper('#sldr-z9x-section .sldr-z9x-swiper', {
              slidesPerView: 1,
              spaceBetween: 20,
              loop: true,
              observer: true,
              observeParents: true,
              direction: 'horizontal',
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                reverseDirection: true,
              },
              navigation: {
                nextEl: '#sldr-z9x-section .sldr-z9x-btn-next',
                prevEl: '#sldr-z9x-section .sldr-z9x-btn-prev',
              },
              breakpoints: {
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 15 }
              }
            });
          });


document.addEventListener("DOMContentLoaded", function () {
            var heights = [3, 5, 8, 12, 16, 20, 24, 28, 30, 28, 26, 22, 18, 14, 18, 22, 26, 30, 28, 24, 20, 16, 12, 8, 10, 14, 18, 22, 26, 28, 30, 26, 22, 18, 14, 10, 8, 6, 10, 14, 18, 22, 26, 28, 24, 20, 16, 12];
            var BAR_COUNT = 48;
            var state = {};

            function fmt(s) {
              s = Math.floor(s);
              return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2);
            }

            function initCard(card) {
              var idx = card.dataset.idx;
              var dur = parseInt(card.dataset.duration);
              var type = card.dataset.type;
              var activeClass = type === 'female' ? 'female-active' : 'active';

              var waveEl = card.querySelector('.vpc-waveform');
              for (var b = 0; b < BAR_COUNT; b++) {
                var bar = document.createElement('div');
                bar.className = 'vpc-bar';
                bar.style.height = heights[b % heights.length] + 'px';
                waveEl.appendChild(bar);
              }

              state[idx] = { playing: false, current: 0, dur: dur, timer: null, type: type };

            //   var playBtn = card.querySelector('.vpc-play-btn');
              var playIcon = card.querySelector('.vpc-play-icon');
              var fillEl = card.querySelector('.vpc-progress-fill');
              var timeEl = card.querySelector('.vpc-time');
              var bars = card.querySelectorAll('.vpc-bar');
              var progEl = card.querySelector('.vpc-progress');

              timeEl.textContent = '0:00 | ' + fmt(dur);

            //   playBtn.addEventListener('click', function () {
            //     var p = state[idx];
            //     if (p.playing) {
            //       clearInterval(p.timer);
            //       p.playing = false;
            //       playIcon.innerHTML = '<polygon points="5,3 19,12 5,21" fill="white"/>';
            //     } else {
            //       p.playing = true;
            //       playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16" fill="white"/><rect x="14" y="4" width="4" height="16" fill="white"/>';
            //       p.timer = setInterval(function () {
            //         p.current += 0.2;
            //         if (p.current >= p.dur) {
            //           p.current = 0;
            //           clearInterval(p.timer);
            //           p.playing = false;
            //           playIcon.innerHTML = '<polygon points="5,3 19,12 5,21" fill="white"/>';
            //         }
            //         var ratio = p.current / p.dur;
            //         fillEl.style.width = (ratio * 100).toFixed(1) + '%';
            //         timeEl.textContent = fmt(p.current) + ' | ' + fmt(p.dur);
            //         var active = Math.floor(ratio * bars.length);
            //         bars.forEach(function (bar, i) {
            //           bar.classList.remove('active', 'female-active');
            //           if (i < active) bar.classList.add(activeClass);
            //         });
            //       }, 200);
            //     }
            //   });

              card.querySelector('.vpc-prev').addEventListener('click', function () {
                state[idx].current = Math.max(0, state[idx].current - 5);
              });
              card.querySelector('.vpc-next').addEventListener('click', function () {
                state[idx].current = Math.min(dur, state[idx].current + 5);
              });
              progEl.addEventListener('click', function (e) {
                var rect = progEl.getBoundingClientRect();
                state[idx].current = ((e.clientX - rect.left) / rect.width) * dur;
              });
            }

            document.querySelectorAll('#sldr-z9x-section .vpc-card').forEach(initCard);
          });


// section 8 


  // FAQ reveal animation
  const observer32 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add('dp-faq-visible');

        // once visible stop observing
        observer32.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.2
  });

  document
    .querySelectorAll(
      '.dp-faq-header, .dp-faq-item, .dp-faq-footer'
    )
    .forEach((el) => {

      observer32.observe(el);

    });


  // FAQ accordion
  document
    .querySelectorAll('.dp-faq-question')
    .forEach((button) => {

      button.addEventListener('click', () => {

        const accordionContent =
          button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {

          accordionContent.style.maxHeight =
            accordionContent.scrollHeight + "px";

        } else {

          accordionContent.style.maxHeight = null;

        }

      });

    });


// section 9 



