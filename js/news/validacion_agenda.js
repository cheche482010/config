var fecha_inicio=document.getElementById('fecha_inicio');
var lunes=document.getElementById("lunes");
var martes=document.getElementById("martes");
var miercoles=document.getElementById("miercoles");
var jueves=document.getElementById("jueves");
var viernes=document.getElementById("viernes");
var sabado=document.getElementById("sabado");
var domingo=document.getElementById("domingo");
var hora_inicio=document.getElementById("hora_inicio");
var hora_fin=document.getElementById("hora_fin");
var boton=document.getElementById("guardarEvento");


boton.onclick=function(){
    var fechaI=new Date(fecha_inicio.value);
	var diaI=dateSelected(fechaI.getDay());
	var fechaF=new Date(fecha_fin.value);
	var diaF=dateSelected(fechaF.getDay());

	for (var i=fechaI.getDay();i<fechaF.getDay()+1;i++){
		  if(i==fechaI.getDay()){
		  	var id=diaI['id']+hora_inicio.value;
		  	var colspan=fechaF.getDay()-fechaI.getDay();
		  	var rowspan=hora_fin.value-hora_inicio.value;
		  	document.getElementById(id).colSpan=colspan+1;
		  	document.getElementById(id).rowSpan=rowspan;
		  }
		  else{
		  	var dia=dateSelected(i);
		  	var id=dia['id']+hora_inicio.value;
		  	document.getElementById(id).style.display="none";
		  }

	}

}

fecha_inicio.onchange=function(){
//	limpiarDias();
	var fecha=new Date(fecha_inicio.value);
	var dia=dateSelected(fecha.getDay());
	dia['input'].style.background="#23614C";
	dia['input'].style.color="white";
	llenarDias();
}


fecha_fin.onchange=function(){
   
	var fecha=new Date(fecha_fin.value);
	var dia=dateSelected(fecha.getDay());
	dia['input'].style.background="#23614C";
	dia['input'].style.color="white";
	llenarDias();
}


hora_inicio.onchange=function(){
    document.getElementById(hora_inicio.value).style.background="#14382C";
    document.getElementById(hora_inicio.value).style.color="white";
    hora_fin.value=parseInt(hora_inicio.value);
    llenarHoras();
}

hora_fin.onchange=function(){
    document.getElementById(hora_fin.value).style.background="#14382C";
    document.getElementById(hora_fin.value).style.color="white";
    llenarHoras();
}


	
function dateSelected(day){
//	alert(day);
	var dia=new Object;
	switch(day){
		case 0:
		dia['input']=lunes;
		dia['id']="L";
		break;
		case 1:
		dia['input']=martes;
		dia['id']="M";
		break;
		case 2:
		dia['input']=miercoles;
		dia['id']="MI";
		break;
		case 3:
		dia['input']=jueves;
		dia['id']="J";
		break;
		case 4:
		dia['input']=viernes;
		dia['id']="V";
		break;
		case 5:
		dia['input']=sabado;
		dia['id']="S";
		break;
		default:
		dia['input']=domingo;
		dia['id']="D";
		break;
	}

	return dia;
}




function limpiarDias(){
	lunes.style.background=lunes.style.color=martes.style.background=martes.style.color="";
	miercoles.style.background=miercoles.style.color=jueves.style.background=jueves.style.color="";
	sabado.style.background=sabado.style.color=domingo.style.background=domingo.style.color="";
	viernes.style.background=viernes.style.color="";
}

function llenarDias(){
	for(var i=0;i<7;i++){
		dia=dateSelected(i);
			dia["input"].style.background="";
			dia["input"].style.color="";

	}

	var inicio=new Date(fecha_inicio.value);
	var fin=new Date(fecha_fin.value);
	var diaInicio=inicio.getDay();
    var diaFin="";
    var valid=false;

	if(fecha_fin.value==""){
		diaFin=diaInicio;
		valid=true;
	}
	else{
		diaFin=fin.getDay();
		valid=validarFechas(inicio,fin);
	}

   
   if(valid){
	for(var i=diaInicio;i<diaFin+1;i++){
		dia=dateSelected(i);
			dia['input'].style.background="#1992AD";
			dia['input'].style.color="white";

	}
}
}

function llenarHoras(){
	for(var i=1;i<11;i++){
		document.getElementById(i).style.background="";
		document.getElementById(i).style.color="";
	}
	var inicio=parseInt(hora_inicio.value);
	var fin=parseInt(hora_fin.value);
	for(var i=inicio;i<fin+1;i++){
		document.getElementById(i).style.background="#1992AD";
		document.getElementById(i).style.color="white";
	}
}
    

function validarFechas(inicio,fin){
	var valid=false;
	if(fin<inicio){
		swal({
         title:"Error",
         type:"warning",
         text:"La fecha de inicio no puede ser después que la fecha de fin.",
         timer:2000,
         showConfirmButton:false
		});
		fecha_fin.value="";
	}
	else{
		valid=true;
	}

	return valid;
}

