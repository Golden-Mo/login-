
if (document.getElementById("userName")) {
 userName = document.querySelector("#userName")
 email = document.querySelector("#email")
 password = document.querySelector("#Password")
 addInformation = document.querySelector("#addInformation")
 success = document.querySelector("#success")


var userInfo = []

userName.addEventListener("input", function(){
    validationName()
})
email.addEventListener("input", function(){
    validationEmail()
})
password.addEventListener("input", function(){
    validationPassword()
})
addInformation.addEventListener("click",function(){
    if (validationName() && validationEmail() && validationPassword()){
        information()

    }else {
    alert("wrong input")
}
})
}
function information(){
var info = {
    name: userName.value,
    email: email.value,
    password:password.value,
}
userInfo.push(info)
localStorage.setItem("userInfo",JSON.stringify(userInfo))
localStorage.setItem("loggedInUser", userName.value);
success.classList.remove("d-none")
return 

}


function validationName(){
    var testName = userName.value
    var regex = /^[\w ]{3,15}$/
    if(regex.test(testName)){
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        
        return true
    }else {
         userName.classList.add("is-invalid")
        userName.classList.remove("is-valid")
    }

}

function validationEmail(){
    var testEmail = email.value
    var regex = /^[a-z][\w]{5,30}@(gmail|yahoo)\.(com)$/
    if (regex.test(testEmail)){
        email.classList.remove("is-invalid")
         email.classList.add("is-valid")
        
        return true
    }else {
         email.classList.add("is-invalid")
        email.classList.remove("is-valid")

    }
}
function validationPassword(){
    var testPassword = password.value
    var regex = /^[\w]{3,15}$/
    if (regex.test(testPassword)){
        password.classList.remove("is-invalid")
         password.classList.add("is-valid")
        
        return true
    }else {
         password.classList.add("is-invalid")
        password.classList.remove("is-valid")
    }
}







if (document.getElementById("loginBtn")) {
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
    var loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", function (e) {
        e.preventDefault()
        login();
    });

    function login() {
        var storedUsers = JSON.parse(localStorage.getItem("userInfo"));

        var enteredEmail = loginEmail.value;
        var enteredPassword = loginPassword.value;

        var found = storedUsers.some(function (user) {
            return user.email === enteredEmail && user.password === enteredPassword;
        });

        if (found) {
            window.location.href = "index3.html";
    
        } else {
            alert("Incorrect email or password.");
        }
    }
    
}





if (document.getElementById("name")) {
    var logOutBtn = document.querySelector("#logOutBtn")
    var loggedInName = localStorage.getItem("loggedInUser");
    document.getElementById("name").innerHTML = loggedInName;
    logOutBtn.addEventListener("click",function(){
    window.location.href = "index.htm";

    })
    
}






// loginBtn.addEventListener("click",function(){
//     login()
// })


// function login(){
//    alert("hello")
// }


















































// var signUpBtn = document.querySelector("#signUp")
// var signInBtn = document.querySelector("#signIn")
// var signUpDiv = document.querySelector("#signUpDiv")
// var signInDiv = document.querySelector("#signInDiv")
// var loginEmail= document.querySelector("loginEmail")
// var loginPassword= document.querySelector("loginpassword")
// var userName = document.querySelector("#userName")
// var email = document.querySelector("email")
// var password = document.querySelector("password")
// // signIn.addEventListener("click",function(){
// //     signInDiv.classList.add("d-none")
// //     signUpDiv.classList.remove("d-none")
// // })
// signUpBtn.addEventListener("click",function(){
//     signUpDiv.classList.add("d-none")
//     signInDiv.classList.remove("d-none")
// })


// signInBtn.addEventListener("click",function(){
//     signUpDiv.classList.remove("d-none")
//     signInDiv.classList.add("d-none")
// })


