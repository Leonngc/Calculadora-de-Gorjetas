let bill = document.getElementById('bill-input')

bill.addEventListener('blur', ()=> {
    if (bill.value === '') {
        billclassList.add('empty');
    } else {
        input.classList.remove('empty');
    }
});

