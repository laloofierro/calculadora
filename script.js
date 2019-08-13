( function() {
  'use strict';

  var botones = document.querySelectorAll("button");
  var display = document.querySelector("input");

  var valor1 = "";
  var valor2 = "";
  var operador = "";

  var punto = false;

  console.log(botones);


  function resultado(a, b, operacion){

    if (operacion == "+") {
      return parseFloat(a) + parseFloat(b);
    } else if (operacion == "-") {
      return parseFloat(a) - parseFloat(b);
    } else if (operacion == "x") {
      return parseFloat(a) * parseFloat(b);
    } else if (operacion == "/") {
      return parseFloat(a) / parseFloat(b);
    } else if (operacion == "%") {
      return (parseFloat(a) * parseFloat(b) / 100);
    }

  }


  function obtenerDato(evento) {
    // console.log(evento.target.getAttribute("id"));: es otra forma de hacerlo //
    console.log(evento.target.id);

    if (evento.target.id >= "0" && evento.target.id <= "9"){
      // display.value = display.value + evento.target.id;
      display.value += evento.target.id;
    }

    if (evento.target.id == "+" || evento.target.id == "-" || evento.target.id == "x" || evento.target.id == "/" || evento.target.id == "%") {
    valor1 = display.value;
    operador = evento.target.id;
    display.value = "";
    punto = false;
    }

    if (evento.target.id == "ac") {
      display.value = "";
      valor1 = "";
      valor2 = "";
      operador = "";
      punto = false;
    }

    if (evento.target.id == "." && punto == false) {
      // display.value = display.value + ".";
      display.value += ".";
      punto = true;
    }

    if (evento.target.id == "s" && display.value != "") {
      display.value = parseFloat (display.value)*-1;
    }

    if (evento.target.id == "="){
      if (valor1 != "" && display.value != "") {
        valor2 = display.value;
        display.value = resultado (valor1, valor2, operador);
      }
    }

  }

  for (var i=0; i<botones.length; i++) {
    botones[i].addEventListener("click", obtenerDato)
  }

}());
