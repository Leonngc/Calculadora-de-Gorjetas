let bill = document.getElementById('bill-input')

bill.addEventListener('blur', ()=> {
    if (bill.value === '') {
        inputclassList.add('empty');
    } else {
        input.classList.remove('empty');
    }
});

