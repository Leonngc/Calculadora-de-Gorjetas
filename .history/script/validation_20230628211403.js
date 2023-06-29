let bill = document.getElementById('bill-input')

bill.addEventListener('blur', ()=> {
    if (bill.value === '') {
        bill.style.borderColor = 'red'
    } else {
        input.classList.remove('empty');
    }
});

