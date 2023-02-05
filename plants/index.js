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

/*focus on services*/
const gardenButton = document.getElementById('gard-btn');

gardenButton.addEventListener('click', (event) => {
    document.getElementById('gard-btn').classList.toggle('pushed');
})
gardenButton.addEventListener('click', (event) => {
    document.querySelector('.planting-blur').classList.add('blur');
})
gardenButton.addEventListener('click', (event) => {
    document.querySelector('.lawn-blur').classList.add('blur');
})
gardenButton.addEventListener('click', (event) => {
    document.querySelector('.planting-blur2').classList.add('blur');
})
gardenButton.addEventListener('click', (event) => {
    document.querySelector('.planting-blur3').classList.add('blur');
})
gardenButton.addEventListener('click', (event) => {
    document.querySelector('.garden-blur').classList.remove('blur');
})
gardenButton.addEventListener('click', (event) => {
    document.querySelector('.garden-blur2').classList.remove('blur');
})


const lawnButton = document.getElementById('lawn-btn');

lawnButton.addEventListener('click', (event) => {
    document.getElementById('lawn-btn').classList.toggle('pushed');
})
lawnButton.addEventListener('click', (event) => {
    document.querySelector('.planting-blur').classList.add('blur');
})
lawnButton.addEventListener('click', (event) => {
    document.querySelector('.planting-blur2').classList.add('blur');
})
lawnButton.addEventListener('click', (event) => {
    document.querySelector('.planting-blur3').classList.add('blur');
})
lawnButton.addEventListener('click', (event) => {
    document.querySelector('.garden-blur').classList.add('blur');
})
lawnButton.addEventListener('click', (event) => {
    document.querySelector('.garden-blur2').classList.add('blur');
})
lawnButton.addEventListener('click', (event) => {
    document.querySelector('.lawn-blur').classList.remove('blur');
})

/*Blur on service section------------------------*/

const plantingButton = document.getElementById('planting-btn');

plantingButton.addEventListener('click', (event) => {
    document.getElementById('planting-btn').classList.toggle('pushed');
})
plantingButton.addEventListener('click', (event) => {
    document.querySelector('.planting-blur').classList.remove('blur');
})
plantingButton.addEventListener('click', (event) => {
    document.querySelector('.planting-blur2').classList.remove('blur');
})
plantingButton.addEventListener('click', (event) => {
    document.querySelector('.planting-blur3').classList.remove('blur');
})
plantingButton.addEventListener('click', (event) => {
    document.querySelector('.garden-blur').classList.add('blur');
})
plantingButton.addEventListener('click', (event) => {
    document.querySelector('.garden-blur2').classList.add('blur');
})
plantingButton.addEventListener('click', (event) => {
    document.querySelector('.lawn-blur').classList.add('blur');
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

/*-------------------------*/
// document.querySelectorAll('.price-btn').forEach((el) => {
//     el.addEventListener('click', () => {

//         let content = el.nextElementSibling;
//         console.log(content);
//         if (content.classList.contains('.prcs-panels')) {
//             document.querySelectorAll('.prcs-panels').forEach((el) => 
//                 el.style.className.remove('hide'));
            
//         }
//     })
// })

/*Contacts section*/
document.querySelectorAll('.cts').forEach((el) => {
    el.addEventListener('click', () => {
        document.querySelector('details').removeAttribute('open');
    })
})

document.getElementById('cts1').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(1)')
    .classList.remove('close')
})

document.getElementById('cts2').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(2)')
    .classList.remove('close')
})

document.getElementById('cts3').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(3)')
    .classList.remove('close')
})

document.getElementById('cts4').addEventListener('click', () => {
    document.querySelector('.cities:nth-child(4)')
    .classList.remove('close')
})



// document.querySelectorAll('.cts-open img').forEach((el) => {
//     el.addEventListener('click', () => {
//         document.querySelector('details').toggleAttribute('open');
//     })
// })

// document.querySelectorAll('.cts').forEach((el) => {
//     el.addEventListener('click', () => {
//         document.querySelector('.cities'&&!'.close').add('close');
//     })
// })