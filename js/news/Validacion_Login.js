$(document).ready(function() {
   document.getElementById("cedula").focus();
    Limpiar_Mensajes();

    $('#mostrar').click(function() {
        var ver = document.getElementById("contrasenia");
        if (ver.type === "password") {
            $('.contraseña').attr('type', 'text');
            document.getElementById("ojito").className="fa fa-eye-slash";
            $('.contraseña').focus();
        } else {
            $('.contraseña').attr('type', 'password');
            $('.contraseña').focus();
            document.getElementById("ojito").className="fa fa-eye";
        }
    });

    $("#enviar").on("click", function() {

        envioFormulario();

    });


    document.onkeypress=function(e){
 if(e.which == 13  || e.keyCode==13 ) {

     envioFormulario();
          return false;
       
       }
       else{return true;}
}

});

function envioFormulario(){
            var errores = '';
        var form = $("#formulario_login");

        

        if (Validar_Datos()) {
$.ajax({
                type: 'POST',
                url: BASE_URL + 'Usuario/Usuario_Existente',
                data: {
                    'cedula': $("#cedula").val(),
                    'contrasenia': $("#contrasenia").val(),
                    'captcha': $("#captcha_code").val()
                },
                beforeSend: function() {
                    $("#enviar").text("Enviando...");
                    $('#enviar').attr("disabled", true);
                },
                complete: function(respuesta) {
                    $("#enviar").text("Entrar");
                    $('#enviar').attr("disabled", false);
                },
                success: function(respuesta) {
                    Respuesta_Controlador(respuesta, form);
                },
                error: function(respuesta) {
                    alert("Error al enviar Controlador")
                }
            });
        } 
}

function Validar_Datos() {
    var cedula=document.getElementById("cedula");
    var msjCedula=document.getElementById("mensaje-cedula");
    var clave=document.getElementById("contrasenia");
    var msjClave=document.getElementById("mensaje-contrasenia");
    var captcha=document.getElementById("captcha_code");
    var msjCaptcha=document.getElementById("texto");
    var retornar=false;
    
    if(cedula.value=="" || cedula.value==null){
        msjCedula.innerHTML="Debe ingresar su cédula.";
        cedula.focus();
        cedula.style.borderColor="red";
    }
    else{
        cedula.style.borderColor="";
        msjCedula.innerHTML="";
        
        if(contrasenia.value=="" || contrasenia.value==null){
        msjClave.innerHTML="Debe ingresar su contraseña.";
        contrasenia.focus();
        contrasenia.style.borderColor="red";
        }
        else{
        msjClave.innerHTML="";
        contrasenia.style.borderColor="";

        if(captcha.value=="" || captcha.value==null){
        msjCaptcha.innerHTML="Debe ingresar el captcha.";
        captcha.focus();
        captcha.style.borderColor="red";
        }
        else{
        msjCaptcha.innerHTML="";
        captcha.style.borderColor="";
        retornar=true;
        }
        }
    }

    return retornar;
}

function Respuesta_Controlador(respuesta, form) {
    if (respuesta == 0) {
        $('#cedula').css("border-color", "#F14B4B")
        $('#cedula').focus()
        $('#mensaje-cedula').html("Usuario No Registrado.");
    } else {
        if (respuesta == 1) {
            $("#contrasenia").blur();
            form.serialize();
            form.submit();
        } else {
            if (respuesta == 2) {
                if ($("#captcha_code").val() == '') {
                    errores = 'Debe ingresar el codigo de seguridad.';
                    $('#captcha_code').css("border-color", "#F14B4B")
                    $('#texto').html(errores);
                } else {
                    $('#captcha_code').css("border-color", "#F14B4B")
                    $('#captcha_code').focus()
                    $('#texto').html("Captcha Inconrrecto, Inntente de Nuevo.");
                }

            } else {
                $('#contrasenia').css("border-color", "#F14B4B")
                $('#contrasenia').focus()
                $('#mensaje-contrasenia').html(respuesta);
            }
        }
    }
}

function Limpiar_Mensajes() {
    $("#cedula").on({
        "click": function() {
            $('#cedula').css("border-color", "#d1d1d1")
            $('#mensaje-cedula').html("");
        }
    });

    $("#contrasenia").on({
        "click": function() {
            $('#contrasenia').css("border-color", "#d1d1d1")
            $('#mensaje-contrasenia').html("");
        }
    });

    $("#captcha_code").on({
        "keyup": function() {
            $('#captcha_code').css("border-color", "#d1d1d1")
            $('#texto').html("");
        }
    });
}