import Person from './js/test';

const john = new Person('About Careers Events Products Support', 35);
console.log(john.getInfo());

//const calculate = (a, b) => a + b;
//console.log(calculate(2,46));

//const span = document.querySelector('navmenu');
//span.textContent = john.name;

//menu toggle
const burger = document.querySelector(".burger");
const navOver = document.querySelector(".nav-overlay")
const closeO = document.querySelector(".close-o")
//const links = document.querySelector(".nav-overlay.nav-links-o li")

burger.addEventListener("click", () => {
    navOver.classList.toggle("open")
});

closeO.addEventListener("click", () => {
    navOver.classList.toggle("open")
});

//header active state