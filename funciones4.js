function cargarDatos(){
    let isValid=true;
    
    /*Nombre*/
    const name=document.getElementById("name").value;
    if (!name) {
        alert("Falta cargar tu nombre");
        isValid = false;
    } else if (isNaN(name) === false) {
        alert("Haz cargado números en tu nombre");
        isValid = false;
    }
    
    
    /*Apellido*/
    const apellido=document.getElementById("apellido").value;
    if (!apellido){
        alert("Falta cargar tu apellido");
        isValid=false;
    }
    else if (isNaN(apellido) === false) {
        alert("Haz cargado números en tu apellido");
        isValid=false;
    }
    
    /*Edad*/
    const edad=document.getElementById("edad").value;
    if (!edad){
        alert("No fue cargada edad");
        isValid=false;
    }
    else if (isNaN(edad)===true) {
        alert("Haz cargado letras en la celda de edad");
        isValid=false;
    }else if (edad<1||100<edad){
        alert("Haz cargado un numero no valido en la celda de edad");
    }
    
    
    /*Sexo*/
    const sexoRadios = document.getElementsByName('sexo');
    let sexoSeleccionado = '';
    for (const radio of sexoRadios) {
        if (radio.checked) {
            sexoSeleccionado = radio.value;
            break;
        }
    }
    if(!sexoSeleccionado){
        alert("No has cargado tu sexo, por favor selecciona tu genero.")
        isValid=false
    }
    /*Provincias*/
    const provincia=document.getElementById("provincia").value;
    if(!provincia){
        alert("No seleccionaste ninguna provincia");
        isValid=false;
    }

    /*Domicilio Calle*/
    const domicilioCalle=document.getElementById("domicilioC").value;
    if(!domicilioCalle){
        alert("No has llenado tu calle");
        isValid=false;
    }else if(isNaN(domicilioCalle)===false){
        alert("Has cargado números en la celda de calle");
        isValid=false;
    }

    /*Domicilio N°calle*/
    const domicilioNC=document.getElementById("domicilioNC").value;
    if (!domicilioNC){
        alert("No fue cargado el numero de casa");
        isValid=false;
    } else if(isNaN(domicilioNC)===true){
        alert("Has puesto letras en el numero de casa");
        isValid=false;
    }else if (domicilioNC<1||10000<domicilioNC){
        alert("Has cargado un numero no valido en la celda de Numero de casa");
    }
    
    
    /*Llenar el textArea y cambiar imagen*/
    const imagen=document.getElementById("img")
    const pieDeFoto=document.getElementById("pieDeFoto")
    const resultado=document.getElementById('resultado');
    if (isValid) {
        resultado.textContent = `Nombre: ${name}
Apellido: ${apellido}
Edad: ${edad}
Sexo: ${sexoSeleccionado}
Provincia: ${provincia}
Domicilio:Calle: ${domicilioCalle} - Numero altura de casa: ${domicilioNC}`;
    imagen.src  ="./assets/perro.jpg"
    pieDeFoto.innerHTML="Felicidades a cargado sus datos"
}else{
    imagen.src  ="./assets/perrito.jpg"
    pieDeFoto.innerHTML="Vuelve lo a intentar"
}


}
