const task1 = document.getElementById("task_1");
const task2 = document.getElementById("task_2");
const task3 = document.getElementById("task_3");
const task20 = document.getElementById("task_20")
const task4 = document.getElementById("task_4");
const task5 = document.getElementById("task_5");
const task6 = document.getElementById("task_6");
const task7 = document.getElementById("task_7");
const task8 = document.getElementById("task_8");
const task9 = document.getElementById("task_9");
const task10 = document.getElementById("task_10");
const task11 = document.getElementById("task_11");
const task12 = document.getElementById("task_12");
const task13 = document.getElementById("task_13");
const check = document.getElementById("check")
const home = document.getElementById("home")
const navbar = document.getElementById("navbar")
const vocab_buttom = document.getElementById("nav_vocab")
const vocab_item = document.querySelectorAll(".vocab_item")
const theme_buttom = document.getElementById("nav_theme")
const theme_item = document.querySelectorAll(".theme_item")
const nav_read = document.getElementById("nav_read")
const read_item = document.querySelectorAll(".read_item")
const nav_tense = document.getElementById("nav_tense")
const tense_item = document.querySelectorAll(".tense_item")

nav_tense.addEventListener("click", () => {
    tense_item.forEach(item => {item.classList.toggle("hidden")})
})

home.addEventListener("click", () => {
    navbar.classList.toggle("navbar_animation")
})

vocab_buttom.addEventListener("click", () => {
    vocab_item.forEach(item => {item.classList.toggle("hidden")})
})
theme_buttom.addEventListener("click", () => {
    theme_item.forEach(item => {item.classList.toggle("hidden")})
})
nav_read.addEventListener("click", () => {
    read_item.forEach(item => {item.classList.toggle("hidden")})
})


document.getElementById('check').addEventListener('click', function() {
    var selects = document.querySelectorAll('.validate');
    for (var i = 0; i < selects.length; i++) {
      if (selects[i].value === '') {
        selects[i].classList.add('bad');
      } else {
        selects[i].classList.add("good")
      }
    }
  });