let inputs = document.querySelectorAll('input');

inputs.forEach(function(input) {
    input.addEventListener('blur', function() {
        if (input.value === '') {
            input.classList.add('empty');
        } else {
            input.classList.remove('empty');
        }
    });
});
