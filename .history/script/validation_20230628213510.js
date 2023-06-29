let input = document.querySelectorAll('input')

input.forEach()
input.addEventListener('blur', ()=> {
    if (input.value === '') {
        input.classList.add('empty');
    } else {
        input.classList.remove('empty');
    }
});

