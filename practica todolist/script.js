//Input-add btn_add elementos

let input = document.querySelector("#Input-add"); //.querySelector selecciona el primer elemento d euna clase
let button = document.querySelector("#btn_add");
let elementos = document.querySelector("#elementos");
let tareas = []; //


button.addEventListener("click", function (evento){
  //evento.preventDefault();
  let nombreTarea = input.value;
  let idTarea = Date.now();
  let nuevatarea = {
    nombre: nombreTarea,
    id: idTarea
  }

  tareas.push(nuevatarea);

  mostrarTareas();

});

function mostrarTareas(){
  elementos.innerHTML="";
  for(i=0; i<tareas.length; i++) {
    //console.log(tareas[i]);
    let nuevoli = document.createElement("li");
  
    nuevoli.innerHTML = `<font COLOR="#FF00FF"> ${tareas[i].nombre} </font> <button onclick="eliminarTarea(${tareas[i].id})">ELIMINAR</button>`;

    elementos.append(nuevoli);
  }

}

function eliminarTarea(idtareaeliminar){
  
  //meterme en el array..
  //buscar una tarea q tenga el id
  // eliminarla

  tareas = tareas.filter(
    function(tarea) { 
      return tarea.id !== idtareaeliminar 
    }
  );
  console.log(tareas);

  mostrarTareas();

}
