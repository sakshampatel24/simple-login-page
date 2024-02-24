document.write("Hello welcome to the javascript")
alert('welcome to login');

const loginform = document.querySelector(".loginform")
loginform.addEventListener("submit",function(Event){
const email = document.getElementById("inputEmail").value
const password = document.getElementById("inputpassword").value
    if(email !=="Admin@gmail.com" || password !== "6392708976"){
        Event.preventDefault();
        alert('Wrong password and Id')
        
        
    }else{
        console.log("Welcome login successfully")
        alert('login successfully')
    }
})
