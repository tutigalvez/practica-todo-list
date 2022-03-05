//declaro variables para almacenar mi nodos importantes...
let inputTarea = document.querySelector("#taskInput");
let botonAgregar = document.querySelector("#addTaskBtn");
let lista = document.querySelector("#lista");

let tareas = [];

botonAgregar.addEventListener("click", function(e) {
  e.preventDefault();

  let nombreDeLaTarea = inputTarea.value;

  let nuevaTarea = {
    nombre: nombreDeLaTarea,
    id: Date.now()
  };

  tareas.push(nuevaTarea);
  console.log(tareas);

  mostrarTareas();
  
});

function mostrarTareas(){
  lista.innerHTML= '';
  for(i=0; i < tareas.length; i++) {
    
    let nuevoLi = document.createElement('li');
    nuevoLi.innerHTML = `${tareas[i].nombre} <button onclick="eliminarTarea(${tareas[i].id})">X</button>` ;//' "
    lista.append(nuevoLi);
  }
}

function eliminarTarea(idTarea){ //22
  console.log("eliminar:", idTarea);
  //buscar la tarea en el array...
  // en el caso de encontrarla
  // eliminarla

  tareas = 
    tareas.filter(
function(tarea) {
        return tarea.id !== idTarea; 
      }
  );

  mostrarTareas();
}
