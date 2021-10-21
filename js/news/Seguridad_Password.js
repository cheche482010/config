$(document).ready(function() {
    var longitud = false,
        minuscula = false,
        numero = false,
        simbolo = false,
        comparar = false,
        mayuscula = false;
    $('#contrasenia').keyup(function() {
        var contrasenia = $(this).val();
        if (contrasenia.length < 8) {
            $('#length').removeClass('valid').addClass('invalid');
            $('#icono6').html('<i class="fas fa-times"></i>');
            longitud = false;
        } else {
            $('#length').removeClass('invalid').addClass('valid');
            $('#icono6').html('<i class="fas fa-check"></i>');
            longitud = true;
        }

        //validar letra
        if (contrasenia.match(/[A-z]/)) {
            $('#letra').removeClass('invalid').addClass('valid');
            $('#icono').html('<i class="fas fa-check"></i>');
            minuscula = true;
        } else {
            $('#letra').removeClass('valid').addClass('invalid');
            $('#icono').html('<i class="fas fa-times"></i>');
            minuscula = false;
        }

        //validar mayuscula letra
        if (contrasenia.match(/[A-Z]/)) {
            $('#mayuscula').removeClass('invalid').addClass('valid');
            $('#icono2').html('<i class="fas fa-check"></i>');
            mayuscula = true;
        } else {
            $('#mayuscula').removeClass('valid').addClass('invalid');
            $('#icono2').html('<i class="fas fa-times"></i>');
            mayuscula = false;
        }

        //validar numero
        if (contrasenia.match(/\d/)) {
            $('#numero').removeClass('invalid').addClass('valid');
            $('#icono3').html('<i class="fas fa-check"></i>');
            numero = true;
        } else {
            $('#numero').removeClass('valid').addClass('invalid');
            $('#icono3').html('<i class="fas fa-times"></i>');
            numero = false;
        }
        //validar simbolo
        if (contrasenia.match(/[!@#$%^&*()_=\[\]{};':`"\\|,.<>\/?+~-]/)) {
            $('#simbolo').removeClass('invalid').addClass('valid');
            $('#icono4').html('<i class="fas fa-check"></i>');
            simbolo = true;
        } else {
            $('#simbolo').removeClass('valid').addClass('invalid');
            $('#icono4').html('<i class="fas fa-times"></i>');
            simbolo = false;
        }

        if (contrasenia == confirmar) {
            $('#comparar').removeClass('invalid').addClass('valid');
            $('#icono5').html('<i class="fas fa-check"></i>');
            comparar = true;
        } else {
            $('#comparar').removeClass('valid').addClass('invalid');
            $('#icono5').html('<i class="fas fa-times"></i>');
            comparar = false;
        }

        $('#confirmar').keyup(function() {
            var confirmar = $(this).val();
            if (contrasenia == confirmar) {
                $('#comparar').removeClass('invalid').addClass('valid');
                $('#icono5').html('<i class="fas fa-check"></i>');
                comparar = true;
            } else {
                $('#comparar').removeClass('valid').addClass('invalid');
                $('#icono5').html('<i class="fas fa-times"></i>');
                comparar = false;
            }
        });
    }).focus(function() {
        $('#pswd_info').show();
    }).blur(function() {
        //$('#pswd_info').hide();
    });

});