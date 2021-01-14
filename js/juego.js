var indiceRandom=0;
var op=[];
//me aseguro de que se ha cargado toda la pagina
$(document).ready(function () {

    /*$("#login").animate({
        'top': "10%"
    }, 1000);*/

    $.getJSON('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json',
        function (data) {
            //console.log(data.elements[0]);
            var cuantos = data.elements.length;
            indiceRandom = Math.floor(Math.random() * cuantos);
            $("#Elemento").find('h2').text(data.elements[indiceRandom].name);
            for(var i=0; i<3; i++){
                var n= Math.floor(Math.random() * cuantos);
                op.push(n);
                $("#Opciones").find('ul').append('<li><h2>'+data.elements[n].symbol+'</h2></li>');
            }
            $("#Opciones").find('ul').append('<li><h2>'+data.elements[indiceRandom].symbol+'</h2></li>');
            op.push(indiceRandom);
            console.log(op);
            //console.log(indiceRandom);
        });

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