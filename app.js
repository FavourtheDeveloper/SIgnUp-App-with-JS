const submitbutton = document.getElementById("subbut");
const userInput = document.getElementById("userinp");
const userMail = document.getElementById("usermai");
const alert = document.getElementById("errortext");
const userList = document.getElementById("users");

submitbutton.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if (userInput.value === "" || userMail.value === ""){
        alert.classList.add("error")
        setTimeout(() => alert.style.display="none", 3000);
        alert.innerHTML = "Please fill all fields"; 
    } else {
        let newLi = document.createElement("li");
        newLi.innerHTML = userInput.value + " and E-Mail is " + userMail.value ;
        userList.appendChild(newLi);

        userInput.value === "";
        userMail.value === "";

        

    }

}
