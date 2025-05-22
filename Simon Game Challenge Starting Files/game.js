var botones = ["red", "blue", "green", "yellow"];

var patronJuego = [];
var patronUsado = [];

var started = false;

var level = 0;

$(document).keydown(function() {
    if (!started) {
        $("#level-title").text("Nivel " + level);
        secuencia();
        started = true;
    }
})

$(".btn").click(function() {
    var colorUsado = $(this).attr("id");
    patronUsado.push(colorUsado);

    usarSonido(colorUsado)
    animacion(colorUsado)

    checarResp(patronUsado.length-1);

});

function checarResp(nivelActual) {
    if (patronJuego[nivelActual] === patronUsado[nivelActual]) {
        console.log("Success");
    if (patronUsado.length === patronJuego.length) {
        setTimeout(function () {
            secuencia();
        }, 1000);

    }

    } else {
        console.log("Wrong");

        usarSonido("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);

          $("#level-title").text("Se termino el juego, presiona cualquier tecla para reiniciar");
          startOver();
        }
}

function secuencia() {
    patronUsado = [];


    level++;

    $("#level-title").text("Nivel " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = botones[randomNumber];
    patronJuego.push(randomColor);

    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

    usarSonido(randomColor);
}

function usarSonido(name) {
    var sonido = new Audio("sounds/" + name + ".mp3");
    sonido.play();

}

function animacion(colorActual) {
    $("#" + colorActual).addClass("pressed");
    setTimeout(function () {
        $("#" + colorActual).removeClass("pressed");
      }, 100);
}

function startOver() {
    level = 0;
    patronJuego = [];
    started = false;
}