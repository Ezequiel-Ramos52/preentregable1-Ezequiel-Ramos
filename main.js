let nuevaTareaTexto = []

function agregarTarea() {
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    if(nuevaTareaTexto === " ") {
        alert("Ingrese una tarea");
        return;
    }

    nuevaTareaTexto = [nuevaTareaTexto]
    console.log(nuevaTareaTexto)

    let nuevaTarea = document.createElement("li")
    nuevaTarea.textContent = nuevaTareaTexto;

    document.getElementById("listaTareas").appendChild(nuevaTarea);
    document.getElementById("nuevaTarea").value = " ";

}