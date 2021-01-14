var indiceRandom = 0;
var op = [];
var nivel = 1;
var puntaje = 0;
var elementos = [];
//me aseguro de que se ha cargado toda la pagina
$(document).ready(function () {

   /* $("#login").animate({
        'top': "10%"
    }, 1000);*/
    if(localStorage.getItem('puntaje') != null){
        puntaje=parseInt(localStorage.getItem('puntaje'));
        console.log(puntaje);
    }
    $("#puntaje").text(puntaje);
    $("#Elemento").droppable({
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlight").find("h2").html("Dropped!");
            //$(this).css('background-color', 'green');
            var i = $(ui.helper[0]).data('numero');
            console.log(i);
            if (i == indiceRandom) {
                puntaje++;
            } else {
                puntaje--;
            }
            $("#puntaje").text(puntaje);
            localStorage.setItem('puntaje',puntaje);
            recargar(elementos);
        },
        over: function (event, ui) {
            $(this).css('background-color', 'gray');
        },
        out: function (event, ui) {
            $(this).css('background-color', 'purple');
        },
    });

    $.getJSON('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json',
        function (data) {
            elementos = data;
            recargar(elementos)
    });
    function recargar(data) {
        $("#Opciones").find('li').remove();
        var cuantos = data.elements.length;
        indiceRandom = Math.floor(Math.random() * cuantos);
        $("#Elemento").find('h2').text(data.elements[indiceRandom].name);
        for (var i = 0; i < (nivel * 2); i++) {
            var n = Math.floor(Math.random() * cuantos);
            op.push(n);
        }
        op.push(indiceRandom);
        console.log(op);
        op.sort(() => Math.random() - 0.5);
        console.log(op);
        op.forEach(n => {
            $("#Opciones").find('ul').append('<li class="drag" data-numero="' + n + '"><h2>' +
                data.elements[n].symbol + '</h2></li>');
        });
        $(".drag").draggable({
            revert: "invalid",
            refreshPosition: true,
            drag: function (event, ui) {
                $(this).css('opacity', '0.5');
            },
            stop: function (event, ul) {
                $(this).css('opacity', '1');
            }
        });
    }

    $("#txtNombre").on('keyup', function () {
        $("#txtNombre").css('border', '1px solid white');
        $(".alerta").fadeOut(400);
    });

    $("#btnIniciar").click(function () {
        if ($("#txtNombre").val() == "") {
            $("#txtNombre").css('border', '1px solid red');
            $(".alerta").fadeIn(400);
        } else {
            $("#login").animate({
                'left': "-480px"
            }, 1000, function () {
                $("#login").fadeOut(1000);
            });
        }
    });

});