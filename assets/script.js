// Tell us your name 
let yourName = 'Sergio Villavicencio'

//Variables to track counts of each cookie type
let gb = 0 //Gingerbread
let cc = 0 //Chocolate Chip 
let sugar = 0 //Sugar Sprinkle 

let cookieTotal = gb + cc + sugar
function updateTotal(ct1, ct2, ct3) {
    cookieTotal = ct1 + ct2 + ct3
    console.log(cookieTotal)
    document.getElementById('qty-total').innerHTML = cookieTotal
    
}

// Code to update name display
document.getElementById('credit').textContent = `Created by ${yourName}`

// GB Buttons 
document.getElementById('add-gb').addEventListener('click',function(){
    gb = gb + 1
    document.getElementById('qty-gb').innerHTML = gb
    updateTotal(gb, cc, sugar) 
})

document.getElementById('minus-gb').addEventListener('click', function(){
    if(gb > 0){
        gb = gb - 1
        document.getElementById('qty-gb').innerHTML = gb
        updateTotal(gb, cc, sugar)
    }
})

// CC Buttons
document.getElementById('add-cc').addEventListener('click', function(){
    cc = cc + 1
    document.getElementById('qty-cc').innerHTML = cc
updateTotal(gb, cc, sugar)
})

document.getElementById('minus-cc').addEventListener('click', function(){
    if(cc > 0){
        cc = cc - 1
        document.getElementById('qty-cc').innerHTML = cc 
        updateTotal(gb, cc, sugar)
    }
})


// SS Buttons 
document.getElementById('add-sugar').addEventListener('click', function(){
    sugar = sugar + 1
    document.getElementById('qty-sugar').innerHTML = sugar 
    updateTotal(gb, cc, sugar) 

}) 

document.getElementById('minus-sugar').addEventListener('click', function(){
    if(sugar > 0){
        sugar = sugar - 1
        document.getElementById('qty-sugar').innerHTML = sugar 
        updateTotal(gb, cc, sugar)
    }
})
