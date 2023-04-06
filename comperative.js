const Qone = document.getElementById('input_1')
const Q2 = document.getElementById('input_2')
const Q3 = document.getElementById('input_3')
const Q4 = document.getElementById('input_4')
const Q5 = document.getElementById('input_5')
const Q6 = document.getElementById('input_6')
const Q7 = document.getElementById('input_7')
const Q8 = document.getElementById('input_8')
const Q9 = document.getElementById('input_9')
const Q10 = document.getElementById('input_10')
const Q11 = document.getElementById('input_11')
const check = document.getElementById('check')

check.addEventListener('click', () => {
    if (Qone.value.toLowerCase() === 'oldest') {
        Qone.classList.remove('bad')
        Qone.classList.add('good')
    } else {
        Qone.classList.remove('good')
        Qone.classList.add('bad')
    }

    if (Q2.value.toLowerCase() === 'larger') {
        Q2.classList.remove('bad')
        Q2.classList.add('good')
    } else {
        Q2.classList.remove('good')
        Q2.classList.add('bad')
    }

    if (Q3.value.toLowerCase() === 'the largest') {
        Q3.classList.remove('bad')
        Q3.classList.add('good')
    } else {
        Q3.classList.remove('good')
        Q3.classList.add('bad')
    }
    if (Q4.value.toLowerCase() === 'bigger') {
        Q4.classList.remove('bad')
        Q4.classList.add('good')
    } else {
        Q4.classList.remove('good')
        Q4.classList.add('bad')
    }
    if (Q5.value.toLowerCase() === 'the biggest') {
        Q5.classList.remove('bad')
        Q5.classList.add('good')
    } else {
        Q5.classList.remove('good')
        Q5.classList.add('bad')
    }

    if (Q6.value.toLowerCase() === 'happier') {
        Q6.classList.remove('bad')
        Q6.classList.add('good')
    } else {
        Q6.classList.remove('good')
        Q6.classList.add('bad')
    }

    if (Q7.value.toLowerCase() === 'the happiest') {
        Q7.classList.remove('bad')
        Q7.classList.add('good')
    } else {
        Q7.classList.remove('good')
        Q7.classList.add('bad')
    }

    if (Q8.value.toLowerCase() === 'sillier') {
        Q8.classList.remove('bad')
        Q8.classList.add('good')
    } else {
        Q8.classList.remove('good')
        Q8.classList.add('bad')
    }

    if (Q9.value.toLowerCase() === 'the silliest') {
        Q9.classList.remove('bad')
        Q9.classList.add('good')
    } else {
        Q9.classList.remove('good')
        Q9.classList.add('bad')
    }

    if (Q10.value.toLowerCase() === 'budapest is bigger than london') {
        Q10.classList.remove('bad')
        Q10.classList.add('good')
    } else {
        Q10.classList.remove('good')
        Q10.classList.add('bad')
    }

    if (Q11.value.toLowerCase() === 'ronaldo is better player than bob') {
        Q11.classList.remove('bad')
        Q11.classList.add('good')
    } else {
        Q11.classList.remove('good')
        Q11.classList.add('bad')
    }
})