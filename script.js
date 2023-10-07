
document.addEventListener("DOMContentLoaded", ()=>{
    init()
})
    function init() {
    if(localStorage.getItem('theme')) {
        document.documentElement.setAttribute("theme", "dark");
    }
    else {
        document.documentElement.removeAttribute("theme");
    }
    
}
    const toggleBtn = document.querySelector("#toggle-theme");

    toggleBtn.addEventListener("click", function() {
    if(document.documentElement.hasAttribute("theme")){
        document.documentElement.removeAttribute("theme");
        localStorage.removeItem('theme');
    }
    else{
        document.documentElement.setAttribute("theme", "dark");
        localStorage.setItem('theme', 1);
    }
});

// Burger menu

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
    
})







