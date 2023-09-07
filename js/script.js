
const form = document.querySelector('.form');
const btn = document.querySelector(".btn");
const inputBox = document.querySelector("#emailid");
const valid = document.querySelector('#valid');
    
btn.addEventListener("click", function(event){
    event.preventDefault();
    
    const email = form.elements["emailid"].value;

    if(email.indexOf("@") !== -1){
        localStorage.setItem('email', email);
        window.open("http://127.0.0.1:5500/../success.html");

    } else{
        inputBox.style.border = "2px solid red";
        valid.innerHTML = "Valid email required";
        inputBox.style.color = "red";
        valid.style.color = "red";
        valid.style.padding = "1rem";
        
        inputBox.addEventListener("input", function(){
            inputBox.style.border = "2px solid black";
            inputBox.style.color = "black";
            valid.style.color = "black"
            valid.innerHTML = "";
        })

        return;
    }


});

if (window.matchMedia("(max-width: 425px)").matches) {
    // Create a new <img> element
    const newImgElement = document.createElement("img");
    newImgElement.src = "../assets/images/illustration-sign-up-mobile.svg"; // Set the source of the new image
    newImgElement.alt = "New Image"; // Set the alt attribute (optional)

    // Get a reference to the parent element of the original <img> element
    const parentElement = document.querySelector(".img");

    // Get a reference to the original <img> element that you want to replace
    const originalImgElement = parentElement.querySelector("img");

    // Replace the original <img> element with the new <img> element
    parentElement.replaceChild(newImgElement, originalImgElement);
}
    