const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click",() => {
        var x = document.getElementById("nav-menu");
        if (x.style.right === '0%') {
          x.style.right = '100%';
        } else {
          x.style.right = '0%';
        }
    
}); 