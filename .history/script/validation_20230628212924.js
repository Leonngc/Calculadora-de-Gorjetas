let input = document.querySelector('input')
input.addEventListener('blur', ()=> {
    if (input.value === '') {
        bill.classList.add('empty');
    } else {
        bill.classList.remove('empty');
    }
});

