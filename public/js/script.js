// age script
let birthYear = 2002;
let currentYear = new Date().getFullYear();
document.querySelector('.age').innerText = currentYear - birthYear;
document.querySelector('.year').innerText = currentYear;

// vanilla tilt
VanillaTilt.init(document.querySelectorAll(".tech_wrapper"), {
    max: 15,
    speed: 1000,
    glare: true,
    "max-glare": 0.5
});
VanillaTilt.init(document.querySelectorAll(".skill_wrapper"), {
    max: 15,
    speed: 1000,
    glare: true,
    "max-glare": 0.5
});

// cursor script
options = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "circle-move",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
};
magicMouse(options);

// filter jQuery
$('.filter_button').on('click', function() {
    let value = $(this).attr('data-filter');
    if(value == 'all') {
        $('.skill_wrapper').show('1000');
    } else {
        $('.skill_wrapper').not('.' + value).hide('1000');;
        $('.skill_wrapper').filter('.' + value).show('1000');;
    }
});
$('.filter_button').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
});