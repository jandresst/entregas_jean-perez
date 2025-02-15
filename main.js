
const IVA = 0.19;
let cotizaciones = [];
const servicios = ["Diseño Web", "Marketing Digital", "Publicidad"];



function obtenerDatos() {
    let servicio = seleccionarServicio();
    if (!servicio) return;
    
    let precioBase = parseFloat(prompt("Ingrese el precio base del servicio en CLP:"));
    if (isNaN(precioBase) || precioBase <= 0) {
        alert("Ingrese un precio válido."); // si no inserta valor válido, se repite el proceso
        return;
    }
    
    let precioFinal = calcularPrecioFinal(precioBase);
    mostrarResultado(servicio, precioBase, precioFinal);
}

// Función para seleccionar un servicio - investigado en w3schools
function seleccionarServicio() {
    let opciones = servicios.map((s, i) => `${i + 1}. ${s}`).join("\n");
    let seleccion = parseInt(prompt(`Seleccione el servicio a cotizar:\n${opciones}`));
    if (isNaN(seleccion) || seleccion < 1 || seleccion > servicios.length) {
        alert("Selección inválida. Inténtelo nuevamente.");
        return null;
    }
    return servicios[seleccion - 1];
}

// calcular IVA + precio base
function calcularPrecioFinal(precioBase) {
    return precioBase + (precioBase * IVA);
}

function formatoCLP(valor) {
    return "$" + valor.toLocaleString("es-CL");
}

function mostrarResultado(servicio, precioBase, precioFinal) {
    let mensaje = `Servicio: ${servicio}\nPrecio Base: ${formatoCLP(precioBase)}\nIVA: ${IVA * 100}%\nPrecio Final: ${formatoCLP(precioFinal)}`;
    alert(mensaje);
    console.log(mensaje);
    cotizaciones.push({ servicio, precioBase, precioFinal });
}

obtenerDatos();
