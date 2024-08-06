
/* start start page */

let div  = document.querySelector(".blur");
let ul = document.querySelector("#menu");
let i  = document.querySelector(".list i");
let blur = document.querySelector(".list").addEventListener("click",function(){
    div.classList.toggle("blurred-background");
    ul.classList.toggle("hidden-xs");
    i.classList.toggle("fa-list");
    i.classList.toggle("fa-circle-xmark");
    
});
let head = document.querySelector(".start header");

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        head.style.backdropFilter = "";
    } else {
        head.style.backdropFilter = "blur(10px)";
    }
    
});

/* end start page */

/* js pages */

document.addEventListener("DOMContentLoaded", () => {
    let contentItems = document.querySelectorAll(".sec1, .sec2 ");

    // Apply the animated class to each content item
    contentItems.forEach(item => {
        item.classList.add("animated");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('about');
    
    const handleScroll = () => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if (sectionTop < viewportHeight) {
            section.classList.add('animated');
            // Remove the event listener if you want the animation to occur only once
            window.removeEventListener('scroll', handleScroll);
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the function in case the section is already in view
});

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.explore .cont');
    
    const handleScroll = () => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if (sectionTop < viewportHeight) {
            section.classList.add('animated');
            // Remove the event listener if you want the animation to occur only once
            window.removeEventListener('scroll', handleScroll);
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the function in case the section is already in view
});



document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('popular');
    
    const handleScroll = () => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if (sectionTop < viewportHeight) {
            const countries = section.querySelectorAll('.country');
            countries.forEach((country, index) => {
                country.style.animationDelay = `${index * 0.4}s`;
                country.classList.add('animated');
            });
            // Remove the event listener if you want the animation to occur only once
            window.removeEventListener('scroll', handleScroll);
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the function in case the section is already in view
});



document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('#contact .overlay');
    
    const handleScroll = () => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        
        if (sectionTop < viewportHeight) {
            const countries = section.querySelectorAll('section');
            countries.forEach((country, index) => {
                country.style.animationDelay = `${index * 0.4}s`;
                country.classList.add('animated');
            });
            // Remove the event listener if you want the animation to occur only once
            window.removeEventListener('scroll', handleScroll);
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the function in case the section is already in view
});

/* end js pages */




/*validation */
// Improved regular expression for email validation
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

document.querySelector("#cl").addEventListener("click", () => {
    // Retrieve the value inside the event listener to get the latest input
    let val = document.querySelector("#vald").value;
    let messageElement = document.querySelector("#message");

    if (!val.match(emailPattern)) {
        messageElement.textContent = "Email is wrong !!";
    } else {
        messageElement.textContent = ""; // Clear the message if email is valid
    }
});
