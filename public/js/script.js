// age script
let currentYear = new Date().getFullYear();
document.querySelector('.age').innerText = calculateAge('2002-09-08');
document.querySelector('.year').innerText = currentYear;

function calculateAge(birthDate) {
    const now = new Date();
    const birth = new Date(birthDate);

    let age = now.getFullYear() - birth.getFullYear();
    const months = now.getMonth() - birth.getMonth();
    if (months < 0 || (months === 0 && now.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

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
$('.filter_button').on('click', function () {
    let value = $(this).attr('data-filter');
    if (value == 'all') {
        $('.skill_wrapper').show('1000');
    } else {
        $('.skill_wrapper').not('.' + value).hide('1000');;
        $('.skill_wrapper').filter('.' + value).show('1000');;
    }
});
$('.filter_button').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
});