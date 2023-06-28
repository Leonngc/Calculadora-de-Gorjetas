let btn = document.querySelectorAll('.pip-value')
let resetBtn = document.getElementById('reset-btn')
//TIPS
let bill = document.getElementById('bill-input')
let fourPip = document.getElementById('four-pip')
let tenPip = document.getElementById('ten-pip')
let fifteenPip = document.getElementById('fifteen-pip')
let twentyfivePip = document.getElementById('twentyfive-pip')
let fiftyPip = document.getElementById('fifty-pip')
let customTip = document.getElementById('custom-tip')
//COMPONENTS
let submitBtn = document.getElementById('submit-btn')
let resultTip = document.getElementById('output-total')
let pipPerson = document.getElementById('output-tip')
let numberPersons = document.getElementById('number-persons')
let billValue = 0
let resultPercetual = 0
let percetualPersons = 0
let persons = 0
let custom = 0

bill.addEventListener('input', ()=>{
    billValue = parseFloat(bill.value)
    result()
})

numberPersons.addEventListener('input', ()=>{
    persons = parseInt(numberPersons.value)
    result()
})
customTip.addEventListener('input', ()=>{
    if(customTip.value == ' '){
        resultTip.textContent = '0,00'
        pipPerson.textContent = '0,00'
    }
    custom = parseInt(customTip.value)
    resultPercetual = (billValue * custom/100)
    percetualPersons = resultPercetual / persons
    total = billValue + resultPercetual
    resultTip.textContent = total.toFixed(2)
    pipPerson.textContent = percetualPersons.toFixed(2)
})

function result(){
    if(billValue > 0){
        let result = billValue 
        resultTip.textContent = result.toFixed(2)

        fourPip.addEventListener('click', ()=>{
            if(numberPersons.value == 1){
                persons = 1
            }
            percetual = billValue 
            resultPercetual = (billValue * 5/100)
            total = billValue + resultPercetual
            percetualPersons = resultPercetual / persons

            resultTip.textContent = total.toFixed(2)
            pipPerson.textContent = percetualPersons.toFixed(2)
        })

        tenPip.addEventListener('click', ()=>{
            if(numberPersons.value == 1){
                persons = 1
            }
            percetual = billValue 
            resultPercetual = (billValue * 10/100)
            total = billValue + resultPercetual
            percetualPersons = resultPercetual / persons

            resultTip.textContent = total.toFixed(2)
            pipPerson.textContent = percetualPersons.toFixed(2)
        })

        fifteenPip.addEventListener('click', ()=>{
            if(numberPersons.value == 1){
                persons = 1
            }
            percetual = billValue 
            resultPercetual = (billValue * 15/100)
            total = billValue + resultPercetual
            percetualPersons = resultPercetual / persons

            resultTip.textContent = total.toFixed(2)
            pipPerson.textContent = percetualPersons.toFixed(2)
        })

        twentyfivePip.addEventListener('click', ()=>{
            if(numberPersons.value == 1){
                persons = 1
            }
            percetual = billValue 
            resultPercetual = (billValue * 25/100)
            total = billValue + resultPercetual
            percetualPersons = resultPercetual / persons

            resultTip.textContent = total.toFixed(2)
            pipPerson.textContent = percetualPersons.toFixed(2)
        })

        fiftyPip.addEventListener('click', ()=>{
            if(numberPersons.value == 1){
                persons = 1
            }
            percetual = billValue 
            resultPercetual = (billValue * 50/100)
            total = billValue + resultPercetual
            percetualPersons = resultPercetual / persons

            resultTip.textContent = total.toFixed(2)
            pipPerson.textContent = percetualPersons.toFixed(2)
        })
    }else{  
     resultTip.textContent = 0.00
        }
}



resetBtn.addEventListener('click', ()=>{
    resultTip.textContent = '0,00'
    pipPerson.textContent = '0,00'
    customTip.value = '0,00'
    bill.value = '0,00'
})

