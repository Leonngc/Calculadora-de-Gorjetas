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
let result
bill.addEventListener('input', ()=>{
    billValue = parseFloat(bill.value)
    result()
})

function result(){
    if(billValue > 0){
        result = billValue 
        resultTip.textContent = result.toFixed(2)
        fourPip.addEventListener('click', ()=>{
            result = billValue + 5
            resultTip
        })
    }else{  
     resultTip.textContent = 0.00
        }
}



