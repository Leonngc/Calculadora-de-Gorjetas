let bill = document.getElementById('bill-input')

input.addEventListener('blur', function() {
    if (input.value === '') {
        input.classList.add('empty');
    } else {
        input.classList.remove('empty');
    }
});

