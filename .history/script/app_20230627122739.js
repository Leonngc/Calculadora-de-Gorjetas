let btn = document.querySelectorAll('.pip-value')

let bill = document.getElementById('bill-input')
let fourPip = document.getElementById('four-pip')
let tenPip = document.getElementById('ten-pip')
let fifteenPip = document.getElementById('fifteen-pip')
let twentyfivePip = document.getElementById('twentyfive-pip')
let fiftyPip = document.getElementById('fifty-pip')
let submitBtn = document.getElementById('submit-btn')
let resultTip = document.getElementById('output-tip')
let billValue = 0
bill.addEventListener('input', ()=>{
    billValue = parseFloat(bill.value)
    result()
})

function result(){
    if(billValue = ' '){
        resultTip.textContent = 0.00
    }else{
    
        fourPip.addEventListener('click', ()=>{
        let result = billValue + 5
        resultTip.textContent = result.to

    })
    let result = billValue + 2
    resultTip.textContent = result.toFixed(2)}
}



