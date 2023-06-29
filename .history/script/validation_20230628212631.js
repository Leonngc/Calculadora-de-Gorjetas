

bill.addEventListener('blur', ()=> {
    if (bill.value === '') {
        bill.classList.add('empty');
    } else {
        bill.classList.remove('empty');
    }
});

