let bill = document.getElementById('bill-input')

bill.addEventListener('blur', ()=> {
    if (bill.value === '') {
        bill.classList.add('empty');
    } else {
        .classList.remove('empty');
    }
});

