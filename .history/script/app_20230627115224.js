btn = document.querySelectorAll('.pip-value')

let bill = document.getElementById('bill-input').value
fourPip = document.getElementById('four-pip')
tenPip = document.getElementById('ten-pip')
fifteenPip = document.getElementById('fifteen-pip')
twentyfivePip = document.getElementById('twentyfive-pip')
fiftyPip = document.getElementById('fifty-pip')

let nbill = Number(bill)

fourPip.addEventListener('click', ()=>{
    alert(nbill)
})



