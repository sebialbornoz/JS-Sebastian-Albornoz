// Arreglo para almacenar las tareas
let tareas = [];

// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTareaTexto = document.getElementById("nuevaTarea").value;
    if (nuevaTareaTexto.trim() !== "") {
        const nuevaTarea = {
            texto: nuevaTareaTexto,
            completada: false
        };
        tareas.push(nuevaTarea);
        actualizarListaTareas();
        document.getElementById("nuevaTarea").value = "";
    } else {
        alert("Por favor, ingresa una tarea válida.");
    }
}

// Obtén el campo de entrada
const nuevaTareaInput = document.getElementById("nuevaTarea");

// Escucha el evento "keydown" en el campo de entrada
nuevaTareaInput.addEventListener("keydown", function(event) {
    // Verifica si la tecla presionada es "Enter" (código 13)
    if (event.keyCode === 13) {
        // Llama a la función agregarTarea() para agregar la tarea a la lista
        agregarTarea();
    }
});

// Función para marcar una tarea como completada
function marcarComoCompletada(index) {
    tareas[index].completada = !tareas[index].completada;
    actualizarListaTareas();
}

// Función para eliminar una tarea
function eliminarTarea(index) {
    tareas.splice(index, 1);
    actualizarListaTareas();
}

// Función para actualizar la lista de tareas en el DOM
function actualizarListaTareas() {
    const listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, index) => {
        const nuevaTareaElemento = document.createElement("li");
        nuevaTareaElemento.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        
        // Crear casilla de verificación
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarea.completada;
        checkbox.addEventListener("change", () => marcarComoCompletada(index));
        
        // Crear etiqueta para mostrar el texto de la tarea
        const label = document.createElement("label");
        label.textContent = tarea.texto;
        label.style.textDecoration = tarea.completada ? "line-through" : "none";
        
        // Crear botón para eliminar la tarea
        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn", "btn-danger", "btn-sm");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => eliminarTarea(index));
        
        // Agregar elementos al nuevo elemento de la lista de tareas
        nuevaTareaElemento.appendChild(checkbox);
        nuevaTareaElemento.appendChild(label);
        nuevaTareaElemento.appendChild(botonEliminar);
        
        listaTareas.appendChild(nuevaTareaElemento);
    });
}
