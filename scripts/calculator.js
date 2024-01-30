let screen = document.querySelector(".display");
let button = document.querySelectorAll(".small-button");

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
    pi();
});
document.querySelector('.log').addEventListener('click', () => { 
    log();
});
document.querySelector('.root').addEventListener('click', () => { 
    root();
});
document.querySelector('.e').addEventListener('click', () => { 
    eValue();
});
document.querySelector('.factorial').addEventListener('click', () => { 
    factorial();
});
document.querySelector('.backspace').addEventListener('click', () => { 
    backSpace();
});
document.querySelector('.clear').addEventListener('click', () => { 
    clear();
});
document.querySelector('.equalTo').addEventListener('click', () => { 
    equalTo();
});

function equalTo() {
    screen.value = eval(screen.value);
}
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
    screen.value *= 3.141592653589793238462643383279502884197;
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

function eValue() {
    screen.value *= 2.718281828459045;
}

function factorial() {
    let i, num, factorial;
    factorial=1;
    num = screen.value;

    for (i =1; i<= num; i++)
    {
        factorial *= i;
    }

    i = i-1;

    screen.value = factorial;
}

function backSpace() {
    screen.value = screen.value.substr(0, screen.value.length-1);
}

function clear() {
    screen.value = '';
}

for(i of button) {
    i.addEventListener('click', e => {
        buttonText = e.target.innerText;

        screen.value += buttonText;
    })
}
