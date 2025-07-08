document.addEventListener("DOMContentLoaded", () => {
    const themeSwitches = document.querySelectorAll(".theme_toggle");
    const body = document.body;
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        body.classList.add("dark_mode");
        themeSwitches.forEach(btn => btn.classList.add("active"));
    } else {
        body.classList.remove("dark_mode");
        themeSwitches.forEach(btn => btn.classList.remove("active"));
    }

    themeSwitches.forEach(btn => {
        btn.addEventListener("click", () => {
            const isDarkMode = body.classList.toggle("dark_mode");
            themeSwitches.forEach(btn => btn.classList.toggle("active"));

            localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        });
    });
});



const placeholderTexts = [
    "Search logos",
    "Search logo templates",
    "Search icons",
    "Search vectors",
];

let currentTextIndex = 0;
let charIndex = 0;
const input = document.getElementById('placeholder_anim');
const typingSpeed = 50;
const erasingSpeed = 30;
const delayBetweenTexts = 2000;

function typeText() {
    if (charIndex < placeholderTexts[currentTextIndex].length) {
        input.placeholder += placeholderTexts[currentTextIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}

function eraseText() {
    if (charIndex > 0) {
        input.placeholder = placeholderTexts[currentTextIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        currentTextIndex = (currentTextIndex + 1) % placeholderTexts.length;
        setTimeout(typeText, typingSpeed);
    }
}
typeText();

$(document).ready(function() {

    $('.mm_inner > div:first-child ul li button').hover(function() {
        var targetId = $(this).data('link');
        var targetDiv = $('#' + targetId);

        $('.mm_item').removeClass('active');
        targetDiv.addClass('active');

        $('.mm_inner > div:first-child ul li button').removeClass('active');
        $(this).addClass('active');
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.discover_toggle, .the_megamenu').length) {
            $('.the_megamenu, .mm_overlay, .discover_btn').removeClass('active');
        }
    });

    $('.discover_toggle').click(function(event) {
        event.stopPropagation();
        $('.the_megamenu, .mm_overlay, .discover_btn').toggleClass('active');
    });


    new Swiper('.iconGroup_swiper', {
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });

    new Swiper('.blogSwiper', {
        loop: false,
        navigation: {
            nextEl: '.ns_next',
            prevEl: '.ns_prev',
        },
        pagination: {
            el: "#blogPagination",
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    new Swiper('.it_swiper', {
        loop: false,
        navigation: {
            nextEl: '.it_next',
            prevEl: '.it_prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2.2,
                spaceBetween: 15
            },
            450: {
                slidesPerView: 2.2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 15
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 15
            }
        }
    });

    $('.src_button').click(function() {
        $('.sticky_search').toggleClass('active');
    })

    $('.linkBox:not(.social) h4').click(function() {
        $(this).next('ul').slideToggle(300);
        $(this).toggleClass('active')
    })

    $('.ss_filter').click(function() {
        $('html').toggleClass('htmlFixed')
        $('.res_filters').toggleClass('active')
        $(this).toggleClass('active')
    })

    $('.user_overlay > a').click(function() {
        $('.user_dropdown').toggleClass('active');
        if ($('.res_filters').hasClass('active')) {
            $('.res_filters').removeClass('active')
            $('.ss_filter').removeClass('active')
            $('html').removeClass('htmlFixed')
        }
    })

    $('*').click(function(e) {
        if (!$(e.target).is('user_overlay > a') && !$(e.target).is('.user_overlay > a *') && !$(e.target).is('.user_overlay') && !$(e.target).is('.user_overlay *')) {
            $('.user_dropdown').removeClass('active')
        }
    });

    $('.menu_toggler').click(function() {
        $('#rsp_menu').toggleClass('active');
        if ($('.res_filters').hasClass('active')) {
            $('.res_filters').removeClass('active')
            $('.ss_filter').removeClass('active')
        }
        $('html').toggleClass('htmlFixed')
    });

    $('.has-submenu').click(function(e) {
        if ($(window).width() <= 1200) {
            e.preventDefault();

            let $submenu = $(this).next('ul');

            $(this).closest('ul').find('ul').not($submenu).slideUp(300).prev('.has-submenu').removeClass('active');

            $(this).toggleClass('active');
            $submenu.slideToggle(0);
        }
    });

    if (localStorage.getItem('filterState') === 'active') {
        $('.filter_toggle').addClass('active');
        $('.res_filters').removeClass('hiddenFilters');
    }
    $('.filter_toggle').click(function() {
        $(this).toggleClass('active');
        $('.res_filters').toggleClass('hiddenFilters');

        if ($(this).hasClass('active')) {
            localStorage.setItem('filterState', 'active');
            localStorage.setItem('filterExpiry', Date.now() + 7 * 24 * 60 * 60 * 1000);
        } else {
            localStorage.removeItem('filterState');
            localStorage.removeItem('filterExpiry');
        }
    });
    if (localStorage.getItem('filterExpiry') && Date.now() > localStorage.getItem('filterExpiry')) {
        localStorage.removeItem('filterState');
        localStorage.removeItem('filterExpiry');
    }

    $('#sortSelect').niceSelect();

    if ($('#categorySelect').length) {
        $('#categorySelect').select2({
            placeholder: "select category",
            allowClear: true
        });

        function updateCategoryPlaceholder() {
            $('#categorySelect').data('select2').$selection.find('.select2-search__field').attr('placeholder', 'select category');
        }
        $('#categorySelect').on('select2:select select2:unselect', updateCategoryPlaceholder);

        if ($('#categorySelect').val().length > 0) {
            updateCategoryPlaceholder();
        }
    }

    if ($('#typesSelect').length) {
        $('#typesSelect').select2({
            allowClear: true
        });

        function updateTypesPlaceholder() {
            $('#typesSelect').data('select2').$selection.find('.select2-search__field').attr('placeholder', 'Select theme and types');
        }
        $('#typesSelect').on('select2:select select2:unselect', updateTypesPlaceholder);
        if ($('#typesSelect').val().length > 0) {
            updateTypesPlaceholder();
        }
    }

    $('.ads_trigger').click(function() {
        $(this).toggleClass('active')
        $('.ads_section').toggleClass('active')
    });

    window.onscroll = function() {
        var navbar = document.querySelector(".the_header.homePageHeader");
        if (!navbar) return;

        var stickyPoint = 0;

        if (window.scrollY > stickyPoint) {
            navbar.classList.add("active");
            navbar.style.top = "0";
        } else {
            navbar.classList.remove("active");
            navbar.style.top = "0";
        }
    };


});

var $grid = $(".indexLogoLister").isotope({
    itemSelector: ".indexLogoLister > div",
    layoutMode: "masonry",
    masonry: {
        columnWidth: ".indexLogoLister > div",
        percentPosition: true,
        horizontalOrder: false,
    },
});

imagesLoaded(".grid", function() {
    $grid.isotope("layout");
});

/*
const divs = document.querySelectorAll('.column_5 > div:nth-child(2n+2)');

divs.forEach(div => {
    const img = div.querySelector('img');
    if (img) {
        img.onload = function() {
            const originalHeight = img.offsetHeight;
            img.style.height = `${originalHeight + 100}px`;
        };

        if (img.complete) {
            const originalHeight = img.offsetHeight;
            img.style.height = `${originalHeight + 100}px`;
        }
    }
});
*/


$('.discover_btn').click(function() {
    $('.discover_menu').toggleClass('active')
});

$('*').click(function(e) {
    if (!$(e.target).is('.discover_btn ') && !$(e.target).is('.discover_btn  *') && !$(e.target).is('.discover_menu') && !$(e.target).is('.discover_menu *')) {
        $('.discover_menu').removeClass('active');
    }
});

$("#marqueeLeft").marquee({
    speed: 20,
    pausehover: true,
    loop: true,
    spaceBetween: 5,
});

function formatNumber(number) {
    return number.toLocaleString('en-US');
}

function animateNumber(start, end, duration) {
    const strongElement = document.querySelector('.ih_numbers > strong');
    if (!strongElement) return;

    const startTime = performance.now();

    function update(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentNumber = Math.floor(start + (end - start) * progress);
        strongElement.textContent = formatNumber(currentNumber);

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            localStorage.setItem('storedNumber', end);
        }
    }

    requestAnimationFrame(update);
}

function updateNumber() {
    const strongElement = document.querySelector('.ih_numbers > strong');
    if (!strongElement) return;

    let currentNumber = parseInt(localStorage.getItem('storedNumber')) || parseInt(strongElement.textContent.replace(/,/g, ''));
    let randomIncrement = Math.floor(Math.random() * 10) + 1;
    let newNumber = currentNumber + randomIncrement;
    animateNumber(currentNumber, newNumber, 1000);
}

window.addEventListener('load', () => {
    const strongElement = document.querySelector('.ih_numbers > strong');
    if (!strongElement) return;

    let storedNumber = localStorage.getItem('storedNumber');
    if (storedNumber) {
        strongElement.textContent = formatNumber(parseInt(storedNumber));
    }

    updateNumber();
    setInterval(updateNumber, 3000);
});