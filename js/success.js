
document.addEventListener("DOMContentLoaded", function(){

    const textContent = document.querySelector(".text-content");
    const email = localStorage.getItem('email');
    const boldEmail = `<strong>${email}</strong>`;

    textContent.innerHTML = `<p>A confirmation email has been sent to ${boldEmail}, Please open it and click the button inside to confirm your subscription</p>`;
            
});

const button = document.querySelector(".btn");

button.addEventListener("click", function(){
    window.close();
    window.open("/index.html", "_self");
});