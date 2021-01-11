var x=1;
var hola="Hola";
document.getElementById("btnCalcular").addEventListener('click',function(){
    var xxxx=document.getElementById("txtNombre");
    if(xxxx.value==""){
        xxxx.style.backgroundColor="red";
        xxxx.style.color="white";
    }else{
        xxxx.style.color="black";
        xxxx.style.backgroundColor="green";
        document.getElementById("mititulo").innerHTML="Bienvenido "+xxxx.value;
        xxxx.value="";
    }
});
document.getElementById("txtNombre").addEventListener('keyup',function(){
    var xxxx=document.getElementById("txtNombre");
    document.getElementById("mititulo").innerHTML="Bienvenido "+xxxx.value;
});

function miFuncion(){
    var todo="";
    for(var y=0;y<x;y++){
        todo=todo+"<button>Hola soy el boton"+x+"</button>";
    }
    document.getElementById("mititulo").innerHTML=todo;
    x++;
}