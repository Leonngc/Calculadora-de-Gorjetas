btn = document.querySelectorAll('.pip-value')

fourPip = document.getElementById('four-pip')
tenPip = document.getElementById('ten-pip')
fifteenPip = document.getElementById('fifteen-pip')
twentyfivePip = document.getElementById('twentyfive-pip')
fiftyPip = document.getElementById('fifty-pip')

btn.forEach(btn =>{
   btn.addEventListener('click', ()=>{
    btn.style.background = '#2DC6B1'
})
})



