let screen = document.querySelector(".display");
let button = document.querySelectorAll(".small-button");
let equal = document.querySelector(".equal-button")

document.querySelector('.sin').addEventListener('click', () => { 
    sin();
});

document.querySelector('.tan').addEventListener('click', () => { 
    tan();
});
document.querySelector('.cos').addEventListener('click', () => { 
    cos();
});
document.querySelector('.raised').addEventListener('click', () => { 
    square();
});
document.querySelector('.pi').addEventListener('click', () => { 
    sin();
});
document.querySelector('.log').addEventListener('click', () => { 
    sin();
});
document.querySelector('.root').addEventListener('click', () => { 
    root();
});

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pi() {
    screen.value = 3.141592653589793238462643383279502884197;
}

function log() {
    screen.value = Math.log(screen.value);
}

function root() {
    screen.value = Math.sqrt(screen.value, 2);
}

function square() {
    screen.value = Math.pow(screen.value, 2);
}


for(i of button) {
    i.addEventListener('click', e => {
        buttonText = e.target.innerText;

        screen.value += buttonText;
    })
}
