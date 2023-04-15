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


check.addEventListener("click", () => {

    if (task1.value.toLowerCase() == "i do not like to swim every day") {
        task1.classList.remove("bad");
        task1.classList.add("good")
    } else {
        task1.classList.remove("good");
        task1.classList.add("bad")
    }

    if (task2.value.toLowerCase() == "she is not old. she is younger than me") {
        task2.classList.remove("bad");
        task2.classList.add("good")
    } else {
        task2.classList.remove("good");
        task2.classList.add("bad")
    }

    if (task3.value.toLowerCase() == "we were walking when i fell yesterday") {
        task3.classList.remove("bad");
        task3.classList.add("good")
    } else {
        task3.classList.remove("good");
        task3.classList.add("bad")
    }

    if (task20.value.toLowerCase() == "wait! she is talking on the phone at the moment") {
        task20.classList.remove("bad");
        task20.classList.add("good")
    } else {
        task20.classList.remove("good");
        task20.classList.add("bad")
    }

    if (task4.value.toLowerCase() == "i am not lonely. i just do not like to meet with anyone") {
        task4.classList.remove("bad");
        task4.classList.add("good")
    } else {
        task4.classList.remove("good");
        task4.classList.add("bad")
    }

    if (task5.value.toLowerCase() == "i am taller than a tree") {
        task5.classList.remove("bad");
        task5.classList.add("good")
    } else {
        task5.classList.remove("good");
        task5.classList.add("bad")
    }

    if (task6.value.toLowerCase() == "you are as smart as matilda") {
        task6.classList.remove("bad");
        task6.classList.add("good")
    } else {
        task6.classList.remove("good");
        task6.classList.add("bad")
    }

    if (task7.value.toLowerCase() == "i am the smartest in the class") {
        task7.classList.remove("bad");
        task7.classList.add("good")
    } else {
        task7.classList.remove("good");
        task7.classList.add("bad")
    }

    if (task8.value.toLowerCase() == "you are worse than i thought") {
        task8.classList.remove("bad");
        task8.classList.add("good")
    } else {
        task8.classList.remove("good");
        task8.classList.add("bad")
    }

    if (task9.value.toLowerCase() == "3") {
        task9.classList.remove("bad");
        task9.classList.add("good")
    } else {
        task9.classList.remove("good");
        task9.classList.add("bad")
    }

    if (task10.value.toLowerCase() == "3") {
        task10.classList.remove("bad");
        task10.classList.add("good")
    } else {
        task10.classList.remove("good");
        task10.classList.add("bad")
    }

    if (task11.value.toLowerCase() == "0") {
        task11.classList.remove("bad");
        task11.classList.add("good")
    } else {
        task11.classList.remove("good");
        task11.classList.add("bad")
    }

    if (task12.value.toLowerCase() == "2") {
        task12.classList.remove("bad");
        task12.classList.add("good")
    } else {
        task12.classList.remove("good");
        task12.classList.add("bad")
    }

    if (task13.value.toLowerCase() == "1") {
        task13.classList.remove("bad");
        task13.classList.add("good")
    } else {
        task13.classList.remove("good");
        task13.classList.add("bad")
    }
})
