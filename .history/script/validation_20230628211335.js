let bill = document.getElementById('bill-input')

bill.addEventListener('blur', ()=> {
    if (bill.value === '') {
        input.classList.add('empty');
    } else {
        input.classList.remove('empty');
    }
});

