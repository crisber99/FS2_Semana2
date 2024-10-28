function calcular_edad(fecha){

    //calculo la fecha de hoy
    hoy=new Date()
    //alert(hoy)

    //calculo la fecha que recibo
    //La descompongo en un array
    var array_fecha = fecha.split("-")
    //si el array no tiene tres partes, la fecha es incorrecta
    if (array_fecha.length!=3)
       return false

    //compruebo que los ano, mes, dia son correctos
    var ano
    ano = parseInt(array_fecha[0]);
    if (isNaN(ano))
       return false

    var mes
    mes = parseInt(array_fecha[1]);
    if (isNaN(mes))
       return false

    var dia
    dia = parseInt(array_fecha[2]);
    if (isNaN(dia))
       return false


    //si el año de la fecha que recibo solo tiene 2 cifras hay que cambiarlo a 4
    if (ano<=99)
       ano +=1900

    //resto los años de las dos fechas
    edad=hoy.getFullYear()- ano - 1; //-1 porque no se si ha cumplido años ya este año

    //si resto los meses y me da menor que 0 entonces no ha cumplido años. Si da mayor si ha cumplido
    if (hoy.getMonth() + 1 - mes < 0) //+ 1 porque los meses empiezan en 0
       return edad
    if (hoy.getMonth() + 1 - mes > 0)
       return edad+1

    //entonces es que eran iguales. miro los dias
    //si resto los dias y me da menor que 0 entonces no ha cumplido años. Si da mayor o igual si ha cumplido
    if (hoy.getUTCDate() - dia >= 0)
       return edad + 1

    return edad
}

function ValidaCampos()
{
    document.getElementById("alert").className = "";
    document.getElementById("alerta").innerText = "";

    if(document.getElementById("nombres").value == "")
    {
        document.getElementById("alert").className = "alert alert-danger slide-in";
        document.getElementById("alerta").innerText = "Debe ingresar su nombre completo.";
        document.getElementById("nombres").focus();
        return;
    }

    if(document.getElementById("email").value == "")
    {
        document.getElementById("alert").className = "alert alert-danger slide-in";
        document.getElementById("alerta").innerText = "Debe ingresar su email.";
        document.getElementById("email").focus();
        return;
    }else if(isValidEmail(document.getElementById("email").value) == false){
        document.getElementById("alert").className = "alert alert-danger slide-in";
        document.getElementById("alerta").innerText = "Debe ingresar un email valido.";
        document.getElementById("email").focus();
        return;
    }

    if(document.getElementById("usuario").value == "")
    {
        document.getElementById("alert").className = "alert alert-danger slide-in";
        document.getElementById("alerta").innerText = "Debe ingresar su usuario.";
        document.getElementById("usuario").focus();
        return;
    }

    if(document.getElementById("pass").value == "")
    {
        document.getElementById("alert").className = "alert alert-danger slide-in";
        document.getElementById("alerta").innerText = "Debe ingresar su password.";
        document.getElementById("pass").focus();
        return;
    }
    else if(document.getElementById("pass").value.length < 6){
        document.getElementById("alert").className = "alert alert-danger slide-in";
        document.getElementById("alerta").innerText = "Debe ingresar su password con un mínimo de 6 caracteres.";
        document.getElementById("pass").focus();
        return;
    }

    if(document.getElementById("cPass").value == ""){
        document.getElementById("alert").className = "alert alert-danger slide-in";
        document.getElementById("alerta").innerText = "Debe ingresar su password.";
        document.getElementById("cPass").focus();
        return;
    }
    else if(document.getElementById("pass").value != document.getElementById("cPass").value){
        document.getElementById("alert").className = "alert alert-danger slide-in";
        document.getElementById("alerta").innerText = "El password debe ser igual en ambos campos.";
        document.getElementById("cPass").focus();
        return;
    }else{
        if(vacio(document.getElementById("pass").value) == true){
            document.getElementById("alert").className = "alert alert-danger slide-in";
            document.getElementById("alerta").innerText = "La contraseña no puede contener espacios en blanco.";
            document.getElementById("cPass").focus();
            return;
        }

        if(letras(document.getElementById("pass").value) == false){
            document.getElementById("alert").className = "alert alert-danger slide-in";
            document.getElementById("alerta").innerText = "La contraseña debe contener al menos 1 letra en Mayúscula.";
            document.getElementById("cPass").focus();
            return;
        }

        if(numeros(document.getElementById("pass").value) == false){
            document.getElementById("alert").className = "alert alert-danger slide-in";
            document.getElementById("alerta").innerText = "La contraseña debe contener al menos 1 número.";
            document.getElementById("cPass").focus();
            return;
        }
    }

    

    if(document.getElementById("fechaNac").value == ""){
        document.getElementById("alert").className = "alert alert-danger slide-in";
        document.getElementById("alerta").innerText = "Debe ingresar una fecha.";
        document.getElementById("fechaNac").focus();
        return;
    }
    else
    {
        var fecha = document.getElementById("fechaNac").value;
        var edad = calcular_edad(fecha);
        if(edad <= 13){
            document.getElementById("alert").className = "alert alert-danger slide-in";
            document.getElementById("alerta").innerText = "Eres menor de edad.";
            return;
        }
    }

    document.getElementById("alert").className = "alert alert-success slide-in";
    document.getElementById("alerta").innerText = "Todos los campos han sido validados correctamente.";

}

function vacio(p1){
        var espacios = false;
        var cont = 0;
    
        while (!espacios && (cont < p1.length)) {
        if (p1.charAt(cont) == " ")
            espacios = true;
        cont++;
        }
        
        return espacios;
    }

function LimpiarCampos()
{
    document.getElementById("nombres").value = "";
    document.getElementById("email").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("cPass").value = "";
    document.getElementById("fechaNac").value = "";
    document.getElementById("direccion").value = "";
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
    }

function numeros(texto)
{
    var num = false;
        var cont = 0;
        var reg=new RegExp("^[0-9]");
        while (!num && (cont < texto.length)) {
        if (texto.charAt(cont).match(reg))
            num = true;
        cont++;
        }
        
        return num;
}

function letras(texto){
    var letra = false;
        var cont = 0;
        var reg=new RegExp("^[A-Z]");
        while (!letra && (cont < texto.length)) {
        if (texto.charAt(cont).match(reg))
            letra = true;
        cont++;
        }
        
        return letra;
}