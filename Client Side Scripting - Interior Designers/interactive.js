// ****************************************************
// Function for 'Write a review section'
// ****************************************************

function sendMessage() {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const phone = document.getElementById("phone")
    const message = document.getElementById("message")

    if(name.value != "" && email.value != "" && phone.value != "" && message.value != "") {
        var result = confirm("Are you sure you want to submit this message?")
        if(result) {
            this.checkCookie(name.value);
            name.value = "";
            email.value = "";
            phone.value = "";
            message.value = "";
        }
    }
}

// ****************************************************

// ****************************************************
// Function for blocking all popups
// ****************************************************

function block(){
    document.querySelector("#prev-img1").style.display = "none";
    document.querySelector("#prev-img2").style.display = "none";
    document.querySelector("#prev-img3").style.display = "none";
    document.querySelector("#prev-img4").style.display = "none";
    document.querySelector("#prev-img5").style.display = "none";
    document.querySelector("#prev-img6").style.display = "none";
    
    document.querySelector("#design-info1").style.display = "none";
    document.querySelector("#design-info2").style.display = "none";
    document.querySelector("#design-info3").style.display = "none";

}

// ****************************************************
// Functions to Show or hide the image popups
// ****************************************************

function prevImg1(){
    document.querySelector("#prev-img1").style.display = "flex";
}

function prevImg2(){
    document.querySelector("#prev-img2").style.display = "flex";
}

function prevImg3(){
    document.querySelector("#prev-img3").style.display = "flex";
}

function prevImg4(){
    document.querySelector("#prev-img4").style.display = "flex";
}

function prevImg5(){
    document.querySelector("#prev-img5").style.display = "flex";
}

function prevImg6(){
    document.querySelector("#prev-img6").style.display = "flex";
}

function Design1(){
    document.querySelector("#design-info1").style.display = "flex";
}

function Design2(){
    document.querySelector("#design-info2").style.display = "flex";
}

function Design3(){
    document.querySelector("#design-info3").style.display = "flex";
}

function basic(){
    document.querySelector("#basic-signup").style.display = "flex";
}

function advance(){
    document.querySelector("#advance-signup").style.display = "flex";
}

// ****************************************************

// ****************************************************
// Function to book the Basic Package for the user
// ****************************************************

function blockPackageBasic(){
    const Bname = document.getElementById("Bname")
    const Bemail = document.getElementById("Bemail")
    const Bphone = document.getElementById("Bphone")
    const Baddress = document.getElementById("Baddress")
    const Bdate = document.getElementById("Bdate")

    if(Bname.value != "" && Bemail.value != "" && Bphone.value != "" && Baddress.value != "" && Bdate.value != null) {
        var result = confirm("Are you sure you want to continue with the filled values?")
        if(result){
            document.querySelector("#basic-signup").style.display = "none";
            alert("Your package has been booked! Thank You for choosing Us!")
            this.checkCookie(Bname.value);
        }
    }
}

// ****************************************************

// ****************************************************
// Function to blook the Advance Package for the user
// ****************************************************

function blockPackageAdvance() {
    const Aname = document.getElementById("Aname")
    const Aemail = document.getElementById("Aemail")
    const Aphone = document.getElementById("Aphone")
    const Aaddress = document.getElementById("Aaddress")
    const Adate = document.getElementById("Adate")

    if(Aname.value != "" && Aemail.value != "" && Aphone.value != "" && Aaddress.value != "" && Adate.value != null) {
        var result = confirm("Are you sure you want to continue with the filled values?")
        if(result){
            document.querySelector("#advance-signup").style.display = "none";
            alert("Your package has been booked! Thank You for choosing Us!")
            this.checkCookie(Aname.value);
        }
    }
}

// ****************************************************

// ****************************************************
// Function for clicking in cross of the popup
// ****************************************************

function cross(){
    document.querySelector("#basic-signup").style.display = "none";
    document.querySelector("#advance-signup").style.display = "none";
}

// ****************************************************

// ****************************************************
// Functions for displaying the customer reviews 
// ****************************************************

function displayAllStar(){
    var star1 = document.getElementsByClassName("star-1");
    for(i = 0; i < star1.length; i++){
        star1[i].style.display = "block";
    }

    var star2 = document.getElementsByClassName("star-2");
    for(i = 0; i < star2.length; i++){
        star2[i].style.display = "block";
    }
    var star3 = document.getElementsByClassName("star-3");
    for(i = 0; i < star3.length; i++){
        star3[i].style.display = "block";
    }
    var star4 = document.getElementsByClassName("star-4");
    for(i = 0; i < star4.length; i++){
        star4[i].style.display = "block";
    }
    var star5 = document.getElementsByClassName("star-5");
    for(i = 0; i < star5.length; i++){
        star5[i].style.display = "block";
    }
}

function display5Star(){

    var star1 = document.getElementsByClassName("star-1");
    for(i = 0; i < star1.length; i++){
        star1[i].style.display = "none";
    }

    var star2 = document.getElementsByClassName("star-2");
    for(i = 0; i < star2.length; i++){
        star2[i].style.display = "none";
    }
    var star3 = document.getElementsByClassName("star-3");
    for(i = 0; i < star3.length; i++){
        star3[i].style.display = "none";
    }
    var star4 = document.getElementsByClassName("star-4");
    for(i = 0; i < star4.length; i++){
        star4[i].style.display = "none";
    }
    var star5 = document.getElementsByClassName("star-5");
    for(i = 0; i < star5.length; i++){
        star5[i].style.display = "block";
    }
}

function display4Star(){
    
    var star1 = document.getElementsByClassName("star-1");
    for(i = 0; i < star1.length; i++){
        star1[i].style.display = "none";
    }

    var star2 = document.getElementsByClassName("star-2");
    for(i = 0; i < star2.length; i++){
        star2[i].style.display = "none";
    }
    var star3 = document.getElementsByClassName("star-3");
    for(i = 0; i < star3.length; i++){
        star3[i].style.display = "none";
    }
    var star4 = document.getElementsByClassName("star-4");
    for(i = 0; i < star4.length; i++){
        star4[i].style.display = "block";
    }
    var star5 = document.getElementsByClassName("star-5");
    for(i = 0; i < star5.length; i++){
        star5[i].style.display = "none";
    }
}

function display3Star(){
    
    var star1 = document.getElementsByClassName("star-1");
    for(i = 0; i < star1.length; i++){
        star1[i].style.display = "none";
    }

    var star2 = document.getElementsByClassName("star-2");
    for(i = 0; i < star2.length; i++){
        star2[i].style.display = "none";
    }
    var star3 = document.getElementsByClassName("star-3");
    for(i = 0; i < star3.length; i++){
        star3[i].style.display = "block";
    }
    var star4 = document.getElementsByClassName("star-4");
    for(i = 0; i < star4.length; i++){
        star4[i].style.display = "none";
    }
    var star5 = document.getElementsByClassName("star-5");
    for(i = 0; i < star5.length; i++){
        star5[i].style.display = "none";
    }
}

function display2Star(){
    
    var star1 = document.getElementsByClassName("star-1");
    for(i = 0; i < star1.length; i++){
        star1[i].style.display = "none";
    }

    var star2 = document.getElementsByClassName("star-2");
    for(i = 0; i < star2.length; i++){
        star2[i].style.display = "block";
    }
    var star3 = document.getElementsByClassName("star-3");
    for(i = 0; i < star3.length; i++){
        star3[i].style.display = "none";
    }
    var star4 = document.getElementsByClassName("star-4");
    for(i = 0; i < star4.length; i++){
        star4[i].style.display = "none";
    }
    var star5 = document.getElementsByClassName("star-5");
    for(i = 0; i < star5.length; i++){
        star5[i].style.display = "none";
    }
}

function display1Star(){
   
    var star1 = document.getElementsByClassName("star-1");
    for(i = 0; i < star1.length; i++){
        star1[i].style.display = "block";
    }

    var star2 = document.getElementsByClassName("star-2");
    for(i = 0; i < star2.length; i++){
        star2[i].style.display = "none";
    }
    var star3 = document.getElementsByClassName("star-3");
    for(i = 0; i < star3.length; i++){
        star3[i].style.display = "none";
    }
    var star4 = document.getElementsByClassName("star-4");
    for(i = 0; i < star4.length; i++){
        star4[i].style.display = "none";
    }
    var star5 = document.getElementsByClassName("star-5");
    for(i = 0; i < star5.length; i++){
        star5[i].style.display = "none";
    }
}

// ****************************************************

// ****************************************************
// Functions for cookies
// ****************************************************

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
function checkCookie(name) {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } 
    else {
        user = name;
        if (user != "" && user != null) {
            setCookie("username", user, 30);
            alert("cookie stored!")
        }
    }
}