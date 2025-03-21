const choise = document.getElementById('choise')
const choiseDot = document.getElementById('choise__dot')
let check = false

choise.addEventListener('click', () => {
    if(check == false){
        choiseDot.style.marginLeft = '48px'
        choise.style.backgroundColor = 'rgba(151, 148, 148, 0.432)'
        choiseDot.style.backgroundColor = 'rgba(124, 37, 196, 0.43)'
        check = true
    }else if(check == true){
        choiseDot.style.marginLeft = '2px'
                choise.style.backgroundColor = 'rgba(255, 85, 62, 0.2)'
        choiseDot.style.backgroundColor = 'rgba(255, 85, 62, 1)'
        check = false
    }
})