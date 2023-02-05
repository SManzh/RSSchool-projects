document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("main").addEventListener("click", function(){
        document.querySelector("header").classList.remove("open")
    })
});

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("nav").addEventListener("click", function(){
        document.querySelector("header").classList.remove("open")
    })
});

/*Garden button----------*/
const gardenButton = document.getElementById('gard-btn');
const lawnButton = document.getElementById('lawn-btn');
const plantingButton = document.getElementById('planting-btn');

gardenButton.addEventListener('click', (event) => {
    if ((lawnButton.classList.contains('pushed'))&&(plantingButton.classList.contains('pushed'))) {

    } else if ((lawnButton.classList.contains('pushed'))||(plantingButton.classList.contains('pushed'))) {
        
        document.getElementById('gard-btn').classList.toggle('pushed')
        
        document.querySelector('.garden-blur').classList.toggle('blur')

        document.querySelector('.garden-blur2').classList.toggle('blur')

    } else if (!(lawnButton.classList.contains('pushed'))&&!(plantingButton.classList.contains('pushed'))&&gardenButton.classList.contains('pushed')) {

        document.getElementById('gard-btn').classList.toggle('pushed')

        document.querySelector('.garden-blur').classList.remove('blur')

        document.querySelector('.garden-blur2').classList.remove('blur')

        document.querySelector('.planting-blur').classList.remove('blur')
        
        document.querySelector('.planting-blur2').classList.remove('blur')
              
        document.querySelector('.planting-blur3').classList.remove('blur')
        
        document.querySelector('.lawn-blur').classList.remove('blur')

    } else  {
        
        document.getElementById('gard-btn').classList.toggle('pushed')
        
        document.querySelector('.garden-blur').classList.remove('blur')

        document.querySelector('.garden-blur2').classList.remove('blur')

        document.querySelector('.planting-blur').classList.add('blur')
        
        document.querySelector('.planting-blur2').classList.add('blur')
              
        document.querySelector('.planting-blur3').classList.add('blur')
        
        document.querySelector('.lawn-blur').classList.add('blur')
    
    }
})


lawnButton.addEventListener('click', (event) => {
    if ((gardenButton.classList.contains('pushed'))&&(plantingButton.classList.contains('pushed'))) {

    } else if ((gardenButton.classList.contains('pushed'))||(plantingButton.classList.contains('pushed'))) {
        
        document.getElementById('lawn-btn').classList.toggle('pushed')
        
        document.querySelector('.lawn-blur').classList.toggle('blur')

    } else if (!(gardenButton.classList.contains('pushed'))&&!(plantingButton.classList.contains('pushed'))&&lawnButton.classList.contains('pushed')) {

        document.getElementById('lawn-btn').classList.toggle('pushed')

        document.querySelector('.garden-blur').classList.remove('blur')

        document.querySelector('.garden-blur2').classList.remove('blur')

        document.querySelector('.planting-blur').classList.remove('blur')
        
        document.querySelector('.planting-blur2').classList.remove('blur')
              
        document.querySelector('.planting-blur3').classList.remove('blur')
        
        document.querySelector('.lawn-blur').classList.remove('blur')

    } else  {
        
        document.getElementById('lawn-btn').classList.toggle('pushed')
        
        document.querySelector('.garden-blur').classList.add('blur')

        document.querySelector('.garden-blur2').classList.add('blur')

        document.querySelector('.planting-blur').classList.add('blur')
        
        document.querySelector('.planting-blur2').classList.add('blur')
              
        document.querySelector('.planting-blur3').classList.add('blur')
        
        document.querySelector('.lawn-blur').classList.remove('blur')
    
    }
})


plantingButton.addEventListener('click', (event) => {
    if ((gardenButton.classList.contains('pushed'))&&(lawnButton.classList.contains('pushed'))) {

    } else if ((gardenButton.classList.contains('pushed'))||(lawnButton.classList.contains('pushed'))) {
        
        document.getElementById('planting-btn').classList.toggle('pushed')
        
        document.querySelector('.planting-blur').classList.toggle('blur')

        document.querySelector('.planting-blur2').classList.toggle('blur')

        document.querySelector('.planting-blur3').classList.toggle('blur')

    } else if (!(gardenButton.classList.contains('pushed'))&&!(lawnButton.classList.contains('pushed'))&&plantingButton.classList.contains('pushed')) {

        document.getElementById('planting-btn').classList.toggle('pushed')

        document.querySelector('.garden-blur').classList.remove('blur')

        document.querySelector('.garden-blur2').classList.remove('blur')

        document.querySelector('.planting-blur').classList.remove('blur')
        
        document.querySelector('.planting-blur2').classList.remove('blur')
              
        document.querySelector('.planting-blur3').classList.remove('blur')
        
        document.querySelector('.lawn-blur').classList.remove('blur')

    } else  {
        
        document.getElementById('planting-btn').classList.toggle('pushed')
        
        document.querySelector('.garden-blur').classList.add('blur')

        document.querySelector('.garden-blur2').classList.add('blur')

        document.querySelector('.planting-blur').classList.remove('blur')
        
        document.querySelector('.planting-blur2').classList.remove('blur')
              
        document.querySelector('.planting-blur3').classList.remove('blur')
        
        document.querySelector('.lawn-blur').classList.add('blur')
    
    }
})





/*Price section accordion-------------*/
/*Basics*/
document.getElementById('arr-prices-1').addEventListener('click', (event)=>{
    document.querySelector('.prcs-panels:nth-child(2)')
    .classList.remove('hide');
})
document.getElementById('arr-prices-1').addEventListener('click', (event)=>{
    document.querySelector('.price-buttons div.price-btn:nth-child(1)')
    .classList.add('on-click')
})

document.querySelector('.prcs-panels:nth-child(2) img').addEventListener('click', (event) => {
    document.querySelector('.prcs-panels:nth-child(2)')
    .classList.add('hide');
})
document.querySelector('.prcs-panels:nth-child(2) img').addEventListener('click', (event) => {
    document.querySelector('.price-buttons div.price-btn:nth-child(1)')
    .classList.remove('on-click')
})
/*-----*/
document.getElementById('arr-prices-1').addEventListener('click', (event)=>{
    document.querySelector('.prcs-panels:nth-child(4)')
    .classList.add('hide');
})
document.getElementById('arr-prices-1').addEventListener('click', (event)=>{
    document.querySelector('.price-buttons div.price-btn:nth-child(3)')
    .classList.remove('on-click')
})

document.getElementById('arr-prices-1').addEventListener('click', (event)=>{
    document.querySelector('.prcs-panels:nth-child(6)')
    .classList.add('hide');
})
document.getElementById('arr-prices-1').addEventListener('click', (event)=>{
    document.querySelector('.price-buttons div.price-btn:nth-child(5)')
    .classList.remove('on-click')
})

/*Standard*/
document.getElementById('arr-prices-2').addEventListener('click', (event)=>{
    document.querySelector('.prcs-panels:nth-child(4)')
    .classList.remove('hide');
})

document.getElementById('arr-prices-2').addEventListener('click', (event)=>{
    document.querySelector('.price-buttons div.price-btn:nth-child(3)')
    .classList.add('on-click')
})

document.querySelector('.prcs-panels:nth-child(4) img').addEventListener('click', (event) => {
    document.querySelector('.prcs-panels:nth-child(4)')
    .classList.add('hide');
})

document.querySelector('.prcs-panels:nth-child(4) img').addEventListener('click', (event) => {
    document.querySelector('.price-buttons div.price-btn:nth-child(3)')
    .classList.remove('on-click')
})

/*-----*/
document.getElementById('arr-prices-2').addEventListener('click', (event)=>{
    document.querySelector('.prcs-panels:nth-child(2)')
    .classList.add('hide');
})

document.getElementById('arr-prices-2').addEventListener('click', (event)=>{
    document.querySelector('.price-buttons div.price-btn:nth-child(1)')
    .classList.remove('on-click')
})

document.getElementById('arr-prices-2').addEventListener('click', (event)=>{
    document.querySelector('.prcs-panels:nth-child(6)')
    .classList.add('hide');
})

document.getElementById('arr-prices-2').addEventListener('click', (event)=>{
    document.querySelector('.price-buttons div.price-btn:nth-child(5)')
    .classList.remove('on-click')
})

/*Pro care*/
document.getElementById('arr-prices-3').addEventListener('click', (event)=>{
    document.querySelector('.prcs-panels:nth-child(6)')
    .classList.remove('hide');
})

document.getElementById('arr-prices-3').addEventListener('click', (event)=>{
    document.querySelector('.price-buttons div.price-btn:nth-child(5)')
    .classList.add('on-click')
})

document.querySelector('.prcs-panels:nth-child(6) img').addEventListener('click', (event) => {
    document.querySelector('.prcs-panels:nth-child(6)')
    .classList.add('hide');
})

document.querySelector('.prcs-panels:nth-child(6) img').addEventListener('click', (event) => {
    document.querySelector('.price-buttons div.price-btn:nth-child(5)')
    .classList.remove('on-click')
})

/*-----*/
document.getElementById('arr-prices-3').addEventListener('click', (event)=>{
    document.querySelector('.prcs-panels:nth-child(2)')
    .classList.add('hide');
})

document.getElementById('arr-prices-3').addEventListener('click', (event)=>{
    document.querySelector('.price-buttons div.price-btn:nth-child(1)')
    .classList.remove('on-click')
})

document.getElementById('arr-prices-3').addEventListener('click', (event)=>{
    document.querySelector('.prcs-panels:nth-child(4)')
    .classList.add('hide');
})

document.getElementById('arr-prices-3').addEventListener('click', (event)=>{
    document.querySelector('.price-buttons div.price-btn:nth-child(3)')
    .classList.remove('on-click')
})


/*Contacts section*/
document.querySelectorAll('.cts').forEach((el) => {
    el.addEventListener('click', () => {
        document.querySelector('details').removeAttribute('open');
    })
})

/*1st option-----*/
document.getElementById('cts1').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(1)')
    .classList.remove('close')
})

document.getElementById('cts1').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(2)')
    .classList.add('close')
})

document.getElementById('cts1').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(3)')
    .classList.add('close')
})

document.getElementById('cts1').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(4)')
    .classList.add('close')
})

/*2nd option-----*/
document.getElementById('cts2').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(2)')
    .classList.remove('close')
})

document.getElementById('cts2').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(1)')
    .classList.add('close')
})

document.getElementById('cts2').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(3)')
    .classList.add('close')
})

document.getElementById('cts2').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(4)')
    .classList.add('close')
})

/*3rd option-----*/
document.getElementById('cts3').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(3)')
    .classList.remove('close')
})

document.getElementById('cts3').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(1)')
    .classList.add('close')
})

document.getElementById('cts3').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(2)')
    .classList.add('close')
})

document.getElementById('cts3').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(4)')
    .classList.add('close')
})

/*4th option-----*/
document.getElementById('cts4').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(4)')
    .classList.remove('close')
})

document.getElementById('cts4').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(1)')
    .classList.add('close')
})

document.getElementById('cts4').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(2)')
    .classList.add('close')
})

document.getElementById('cts4').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(3)')
    .classList.add('close')
})

/*-----*/
document.querySelectorAll('.cts-open img').forEach((el) => {
    el.addEventListener('click', () => {
        document.querySelector('details').toggleAttribute('open');
    })
})
