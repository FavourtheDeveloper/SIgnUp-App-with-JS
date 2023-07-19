const submitbutton = document.getElementById("subbut");
const userInput = document.getElementById("userinp");
const userMail = document.getElementById("usermai");
const alert = document.getElementById("errortext");
const userList = document.getElementById("users");

document.getElementById("brand").style.color = "Yellow";

submitbutton.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if (userInput.value === "" || userMail.value === ""){
        alert.classList.add("error")
        setTimeout(() => alert.style.display="none", 3000);
        alert.innerHTML = "Please fill all fields"; 
    } else {
        let newLi = document.createElement("li");
        newLi.innerHTML = "Name: " + userInput.value + "<br>E-Mail: " + userMail.value ;
        userList.appendChild(newLi);
        submitbutton.value = "REGISTERED";
        document.body.style.backgroundColor = "Yellow";
        setTimeout(() => submitbutton.value = "Register", 3000);
        setTimeout(() => document.body.style.backgroundColor = "Brown", 3000);
        userInput.value = "";
        userMail.value = "";
    }

}
