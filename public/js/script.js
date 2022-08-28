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