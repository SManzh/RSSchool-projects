document.querySelector("header").classList.toggle("open");

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

console.log("all necessary task request are met");