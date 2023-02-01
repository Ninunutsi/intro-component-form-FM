let symbols = 
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validation(){
    let firstName = document.getElementById("first-name").value
    let lastName = document.getElementById("last-name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let txtFirstName = document.getElementById("txt-first-name")
    let txtLastName = document.getElementById("txt-last-name")
    let txtEmail = document.getElementById("txt-email")
    let txtPassword = document.getElementById("txt-password")

    let icons = document.getElementsByClassName("icons")
    let inputs = document.getElementsByClassName("input")

    if(email.match(symbols)){
        txtEmail.innerHTML = ""
        icons[2].style.display = 'none'
        inputs[2].style.borderColor = "hsl(246, 25%, 77%)"
    }else if(email == ""){
        txtEmail.innerHTML = "Please enter an email"
        icons[2].style.display = 'block'
        inputs[2].style.borderColor = "hsl(0, 100%, 74%)"
    }else{
        txtEmail.innerHTML = "Looks like this is not an email"
        icons[2].style.display = 'block'
        inputs[2].style.borderColor = "hsl(0, 100%, 74%)"
    }

    if(firstName == ""){
        txtFirstName.innerHTML = "First name cannot be empty"
        icons[0].style.display = 'block'
        inputs[0].style.borderColor = "hsl(0, 100%, 74%)"
    }else{
        txtFirstName.innerHTML = ""
        icons[0].style.display = 'none'
        inputs[0].style.borderColor = "hsl(246, 25%, 77%)"
    }

    if(lastName == ""){
        txtLastName.innerHTML = "Last name cannot be empty"
        icons[1].style.display = 'block'
        inputs[1].style.borderColor = "hsl(0, 100%, 74%)"
    }else{
        txtLastName.innerHTML = ""
        icons[1].style.display = 'none'
        inputs[1].style.borderColor = "hsl(246, 25%, 77%)"
    }

    if(password == ""){
        txtPassword.innerHTML = "Password cannot be empty"
        icons[3].style.display = 'block'
        inputs[3].style.borderColor = "hsl(0, 100%, 74%)"
    }else{
        txtPassword.innerHTML = ""
        icons[3].style.display = 'none'
        inputs[3].style.borderColor = "hsl(246, 25%, 77%)"
    }
}