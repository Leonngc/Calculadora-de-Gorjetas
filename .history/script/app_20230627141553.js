let btn = document.querySelectorAll('.pip-value')

let bill = document.getElementById('bill-input')
let fourPip = document.getElementById('four-pip')
let tenPip = document.getElementById('ten-pip')
let fifteenPip = document.getElementById('fifteen-pip')
let twentyfivePip = document.getElementById('twentyfive-pip')
let fiftyPip = document.getElementById('fifty-pip')
let submitBtn = document.getElementById('submit-btn')
let resultTip = document.getElementById('output-total')
let pipPerson = document.getElementById('output-result')
let numberPersons = document.getElementById('number-persons')
let billValue = 0
let resultPercetual = 0
let percetual = 0
let persons = 0
bill.addEventListener('input', ()=>{
    billValue = parseFloat(bill.value)
    result()
})

numberPersons.addEventListener('input', ()=>{
    persons = parseInt(numberPersons.value)
    result()
})

function result(){
    if(billValue > 0){
        let result = billValue 
        resultTip.textContent = result.toFixed(2)

        fourPip.addEventListener('click', ()=>{
            percetual = billValue 
            resultPercetual = (billValue * 5/100)
            total = billValue + re
            resultTip.textContent = resultPercetual.toFixed(2)
        })
    }else{  
     resultTip.textContent = 0.00
        }
}



