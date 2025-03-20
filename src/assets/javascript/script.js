// Typing Text Js
$(document).on('DOMContentLoaded', function () {
    window.ityped.init(document.querySelector('.ityped'), {
        strings: ['HI THERE!', 'I’M Moumanis Mustapha_', 'Full-Stack Developer'],
        loop: true
    });
});
/*------------------------------------- Whole Page Scrolling Animation -------------------------------------*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
        target.classList.toggle('show', isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down');

document.addEventListener('DOMContentLoaded', () => {
    hiddenElements.forEach((el) => observer.observe(el));
});

/*------------------------------------- Preloader -------------------------------------*/
(function ($) {
    $(window).on('load', function () {
        const svg = document.getElementById("loade-svg");
        const tl = gsap.timeline();

        const shapes = {
            start: "M0 502S175 272 500 272s500 230 500 230V0H0Z",
            end: "M0 2S175 1 500 1s500 1 500 1V0H0Z"
        };

        tl.to(".loading", {
            delay: 1.2,
            y: -50,
            opacity: 0,
            duration: 0.6
        })
            .to(svg, {
                duration: 0.6,
                attr: { d: shapes.start },
                ease: "power1.easeIn"
            })
            .to(svg, {
                duration: 0.6,
                attr: { d: shapes.end },
                ease: "power1.easeOut"
            })
            .to(".preloader", {
                y: -1000,
                duration: 0.8
            })
            .set(".preloader", {
                zIndex: -1,
                display: "none"
            });
    });
}(jQuery));
/*------------------------------------- Menu Toggle -------------------------------------*/
$(document).ready(function () {
    const $menuToggle = $('#menu-toggle');
    const $sideMenu = $('.side-menu-main');
    const $hamburger = $('.hamburger');

    $(document).on('click', '.menu-list-main li', function (e) {
        e.preventDefault();

        const $link = $(this).find('a');
        const targetId = $link.attr('href') ? $link.attr('href').substring(1) : null;

        if (targetId && $('#' + targetId).length) {
            $('#' + targetId)[0].scrollIntoView({ behavior: 'smooth' });
        }

        $sideMenu.removeClass('show');
        $hamburger.removeClass('is-active');
    });

    $menuToggle.on('click', function () {
        $sideMenu.toggleClass('show');
        $hamburger.toggleClass('is-active', $sideMenu.hasClass('show'));
    });

    new MutationObserver(() => {
        if (!$sideMenu.hasClass('show')) {
            $hamburger.removeClass('is-active');
        }
    }).observe($sideMenu[0], { attributes: true, attributeFilter: ['class'] });
});

/*------------------------------------- Scroll counter -------------------------------------*/
var counted = 0;
$(window).on('scroll', function () {
    var oTop = $('.counter').offset()?.top - window.innerHeight;
    if (counted === 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 800,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
        });
        counted = 1;
    }
});

/*------------------------------------- Tabs -------------------------------------*/
$(function () {
    $(document).on('click', '.tab-btn-main a', function (e) {
        e.preventDefault();
        const tabId = $(this).data('tab');
        $('.tab-btn-main a, .Tabcondent').removeClass('tab-active');
        $(this).addClass('tab-active');
        $('#' + tabId).addClass('tab-active');
    });
});

/*------------------------------------- Pop Videos -------------------------------------*/
$(document).ready(function () {
    $('.vimeo').magnificPopup({
        items: {
            src: 'https://vimeo.com/259411563'
        },
        type: 'iframe'
    });

    $('.youtube').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=PavYAOpVpJI'
        },
        type: 'iframe'
    });

    $('.soundcloud').magnificPopup({
        type: 'soundcloud',
        items: {
            src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163522130&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },
        type: 'iframe',
    });
});

/*------------------------------------- Testimonial Slider -------------------------------------*/
$(document).ready(function () {
    $('.testimonial').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 1000,
    });
});
/*------------------------------------- Infinite Marquee -------------------------------------*/
document.querySelectorAll('.logos').forEach(function (logosContainer) {
    const copy = logosContainer.querySelector('.logos-slide').cloneNode(true);
    logosContainer.appendChild(copy);
});

/*------------------------------------- Bottom To Top Button -------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.bottom-top-button');
    window.addEventListener('scroll', () => {
        button.style.display = window.pageYOffset > 100 ? 'block' : 'none';
    });
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// --------------------------------------------- //
// Color Switch Start
// --------------------------------------------- //
const themeBtn = document.querySelector('.color-switcher');

function getCurrentTheme(){
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  localStorage.getItem('template.theme') ? theme = localStorage.getItem('template.theme') : null;
  return theme;
}

function loadTheme(theme){
  const root = document.querySelector(':root');
  if(theme === "light"){
    themeBtn.innerHTML = `<em></em><i class="ph-bold ph-moon-stars"></i>`;
  } else {
    themeBtn.innerHTML = `<em></em><i class="ph-bold ph-sun"></i>`;
  }
  root.setAttribute('color-scheme', `${theme}`);
};

themeBtn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  if(theme === 'dark'){
    theme = 'light';
  } else {
    theme = 'dark';
  }
  localStorage.setItem('template.theme', `${theme}`);
  loadTheme(theme);
});

window.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());
});
// --------------------------------------------- //
// Color Switch End
// --------------------------------------------- //
