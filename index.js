var randomNumb1 = Math.floor(Math.random(randomNumb1) * 6) + 1 ;    // for selecting random number 1-6
var randomdDIceImg1 = "dice" + randomNumb1 + ".png";                 // selecting image of random number selected
var randomImgSource1 = "images/" + randomdDIceImg1;                   // generating new source
var image1 = document.querySelectorAll("img")[0];                   // slecting source
image1.setAttribute("src", randomImgSource1);                        // setting new source

var randomNumb2 = Math.floor(Math.random(randomNumb2) * 6) + 1 ;
var randomdDIceImg2 = "dice" + randomNumb2 + ".png";     
var randomImgSource2 = "images/" + randomdDIceImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSource2);  

if(randomNumb1 > randomNumb2){
    document.querySelector("h1").innerHTML = "Player 1 Win..! ✨";
}
else if(randomNumb1 < randomNumb2){
    document.querySelector("h1").innerHTML = "Player 2 Win..! ✨";
}
else{
    document.querySelector("h1").innerHTML = "Draw..!";
}