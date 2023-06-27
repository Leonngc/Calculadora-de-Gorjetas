btn = document.querySelectorAll('.pip-value')

bill = document.getElementById('bill-input').value
fourPip = document.getElementById('four-pip')
tenPip = document.getElementById('ten-pip')
fifteenPip = document.getElementById('fifteen-pip')
twentyfivePip = document.getElementById('twentyfive-pip')
fiftyPip = document.getElementById('fifty-pip')

bill = Number(billvalue)

fourPip.addEventeListener('click', ()=>{
    alert(bill)
})



