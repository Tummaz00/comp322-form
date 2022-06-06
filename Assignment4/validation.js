function validUser(){
    let uname = document.theForm.userName.value;
    let reg = /[a-z0-9]$/
    if(uname.length >= 4 && uname.length <= 12 && uname.match(reg)){
        return true;
    }
    else{
        return false;
    }
}

function validEmail(){
    let email = document.theForm.Email.value;
    let reg1 = /(\w+\@\w+\.com)$/
    let reg2 = /(\w+\@\w+\.org)$/
    let reg3 = /(\w+\@\w+\.net)$/
    let reg4 = /(\w+\@\w+\.edu)$/
    if(email.match(reg1) || email.match(reg2) || email.match(reg3) || email.match(reg4)){
        return true
    }
    else{
        return false;
    }
}

function validPhone(){
    let phNum = document.theForm.phoneNum.value;
    let reg = /\((\d{3})\)(-\d{3}-\d{4})$/
    if(phNum.match(reg)){
        return true;
    }
    else{
        return false;
    }

}

function validEPass(){
    let ePass = document.theForm.enterPass.value;
    let reg = /[a-zA-Z0-9\_][^\#\*\?\%]$/
    if(ePass.match(reg) && ePass.length <= 8){
        return true;
    }
    else{
        return false;
    }
}

function validGender(){
    let gen = document.theForm.gender.value;
    if(gen == ""){
        return false
    }
    else{
        return true;
    }
}

function validAgeGroup(){
    let age = document.theForm.AgeGroup.value;
    if(age == ""){
        return false;
    }
    else{
        return true;
    }
}

function checkPassMatch(){
    let ePass = document.theForm.enterPass.value;
    let cPass = document.theForm.confirmPass.value;
    if(ePass != cPass && validUser() == true
        && validEmail() == true
        && validPhone() == true
        && validEPass() == true
        && validGender() == true){
        alert("passwords do not match");
    }
}

function clearWarnings(){
    document.getElementById("theDiv").innerHTML = "";
}

function validate(){
    let output = "";

    if(validUser() == false){
        output = output + "Please Enter A Valid " + "<span style = 'color:red ;font-weight:bold'>USERNAME</span><br>"
    }
    else{
        output = output + "Please Enter A Valid " + "<span style = 'color:orange ;font-weight:bold'>USERNAME</span><br>"
    }

    if(validEmail() == false){
        output = output + "Please Enter A Valid " + "<span style = 'color:red ;font-weight:bold'>EMAIL</span><br>"
    }
    else{
        output = output + "Please Enter A Valid " + "<span style = 'color:orange ;font-weight:bold'>EMAIL</span><br>"
    }

    if(validPhone() == false){
        output = output + "Please Enter A Valid " + "<span style = 'color:red ;font-weight:bold'>PHONE NUMBER</span><br>"
    }
    else{
        output = output + "Please Enter A Valid " + "<span style = 'color:orange ;font-weight:bold'>PHONE NUMBER</span><br>"
        //console.log(output);
    }

    if(validEPass() == false){
        output = output + "Please Enter A Valid " + "<span style = 'color:red ;font-weight:bold'>PASSWORD</span><br>"
        //console.log(output);
        //document.getElementById("theDiv").innerHTML = output;
    }
    else{
        output = output + "Please Enter A Valid " + "<span style = 'color:orange ;font-weight:bold'>PASSWORD</span><br>"
        //console.log(output);
    }
    if(validGender() == false){
        output = output + "Please Enter A Valid " + "<span style = 'color:red ;font-weight:bold'>GENDER</span><br>"
        //console.log(output);
        //document.getElementById("theDiv").innerHTML = output;
    }
    else{
        output = output + "Please Enter A Valid " + "<span style = 'color:orange ;font-weight:bold'>GENDER</span><br>"
    }
    if(validAgeGroup() == false){
        output = output + "Please Enter A Valid " + "<span style = 'color:red ;font-weight:bold'>AGE GROUP</span><br>"
        //console.log(output);
        //document.getElementById("theDiv").innerHTML = output;
    }
    else{
        output = output + "Please Enter A Valid " + "<span style = 'color:orange ;font-weight:bold'>AGE GROUP</span><br>"
    }

    document.getElementById("theDiv").innerHTML = output;
    checkPassMatch();
    /*if(ePass !== cPass && validUser() == true
            && validEmail() == true
            && validPhone() == true
            && validEPass() == true
            && validGender() == true){
        alert("passwords do not match");
    }*/




}