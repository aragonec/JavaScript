//me aseguro de que se ha cargado toda la pagina
$(document).ready(function(){

    $("#login").animate({
        'top':"10%"
    },1000);
    $("#txtNombre").on('keyup',function(){
        $("#txtNombre").css('border','1px solid white');
        $(".alerta").fadeOut(400);
    })
    $("#btnIniciar").click(function(){
        if($("#txtNombre").val()==""){
            $("#txtNombre").css('border','1px solid red');
            $(".alerta").fadeIn(400);
        }else{
            $("#login").animate({
                'left':"-480px"
            },1000,function(){
                $("#login").fadeOut(1000);
            });
        }


    });
});