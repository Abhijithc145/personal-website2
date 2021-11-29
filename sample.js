var err = document.getElementsByClassName("error");
var mal=document.getElementById("email");
var phoneNum = document.getElementById("phoneNumber");
var username = document.getElementById("nameField");
var message = document.getElementById("MSG");
var letters = /^[a-zA-Z.]+$/;
var numbletter = /^[0-9]+$/;
var maletter=  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let flag=0;
$("#submit-form").submit((e) => {
    e.preventDefault();
    a = username.value
    err[0].innerHTML = "";
    err[1].innerHTML = "";
    err[2].innerHTML = "";
    console.log(a)
    if (username.value == "") {
        err[0].innerHTML = "null not valid";
        return;
    } 
    if (username.value.trim() == "") {
        err[0].innerHTML = "space invalid";
        return;
    } 
     if (letters.test(username.value) == false) {
        err[0].innerHTML = "only character allowed";
        return;
    } 
    
    if(mal.value == "")
    {
        err[1].innerHTML ="null not vaid";
        return;
    }
    if(maletter.test(mal.value)== false){
        err[1].innerHTML=" email not matched"
        return;
    }
    if(phoneNum.value=="")
    {
        err[2].innerHTML="null not matched"
        return;
    }
    if (phoneNum.value.trim() == "") {
        err[2].innerHTML = "space invalid";
        return;
    } 
    var m=phoneNum.value;
    if(m.length<10 || m.length>10)
    {
        err[2].innerHTML=" less than 10 number";
        return;
    }

    if(numbletter.test(phoneNum.value)== false){
        err[2].innerHTML="  not number"
        return;
    }
    if(message .value=="")
    {
        err[3].innerHTML="not fill"
        return;
    }

    if ($("#submit-form").valid()) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxP5dG5da78mK3gS6DtC4DN7T8eb23sgwnwcHigdw/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully");
                $("#submit-form")[0].reset();
                // window.location.reload()
                //window.location.href="https://google.com"
            },
            error: function (err) {
                alert("Something Error");
            },
        });
    }
});




// function checkNumber() {
//     if(phoneNum.value == ""){
//         console.log("1")
//     }else if(phoneNum.value.trim() == ""){
//         console.log(2)
//     }
//     else if()
// }
