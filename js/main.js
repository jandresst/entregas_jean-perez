


const servicios = [
    {
        id: 1, 
        nombre: "desarrollo", 
        precio: 170000
    },
    {
        id: 2, 
        nombre: "mantencion", 
        precio: 50000
    },
    {
        id: 3, 
        nombre: "integracion", 
        precio: 80000
    },
    {
        id: 4, 
        nombre: "proyecto", 
        precio: 400000
    },
];

let service = document.getElementById("servicios");

servicios.forEach(producto => {
    let card = document.createElement("div");
    card.className = "card col-md-3";
    card.innerHTML = `<h3>Servicio: ${producto.nombre}</h3>
                      <h4>Precio: $${producto.precio}</h4>`;
    service.appendChild(card);
});

let serviciosSeleccionados = document.getElementById("detalleCotizacion");
let Cantidad = document.getElementById("cantidad");
let calcularTotalBtn = document.getElementById("calcularTotal");

calcularTotalBtn.onclick = () => {
    let cantidad = parseInt(Cantidad.value);
    if (cantidad > 0) {
        let servicioSeleccionado = document.getElementById("servicioSeleccionado").value;
        let precioTotal = cantidad * servicios.find(servicio => servicio.id == servicioSeleccionado).precio;
        serviciosSeleccionados.innerHTML = `Total: $${precioTotal}`;
        let print = document.createElement("h3");
        print.innerHTML = `Total: $${precioTotal}`;
        serviciosSeleccionados.appendChild(print);

        let precio = document.getElementById("precio");
        precio.value = precioTotal;
    }
};


let calcularCuotasBtn = document.getElementById("calcular");
let resultadoCalculadoraCuotas = document.getElementById("resultadoCalculadoraCuotas");

calcularCuotasBtn.onclick = () => {
    let precioTotal = parseInt(document.getElementById("precio").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);
    if(cuotas > 0){
        let cuotaMensual = precioTotal / cuotas
        resultadoCalculadoraCuotas.innerHTML = `Total: $${precioTotal} en ${cuotas} cuotas de $${cuotaMensual}`;
    }
};  