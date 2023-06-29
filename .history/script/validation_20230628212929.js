let input = document.querySelector('input')
input.addEventListener('blur', ()=> {
    if (input.value === '') {
        input.classList.add('empty');
    } else {
        bill.classList.remove('empty');
    }
});

