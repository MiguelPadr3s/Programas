var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
//-------------------------------------------------------------------------------------
var randomN2 = Math.floor(Math.random() * 6) + 1;

var randomImg2 = "images/dice" + randomN2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImg2);


if (randomNumber1 > randomN2){
    document.querySelector("h1").innerHTML = "Gano el jugador 1"
}

else if (randomNumber1 < randomN2){
    document.querySelector("h1").innerHTML = "Gano el jugador 2"
}

else {
    document.querySelector("h1").innerHTML = "empataron"
}