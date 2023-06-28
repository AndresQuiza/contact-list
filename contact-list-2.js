let listaContactos = [
    (contacto1 = {
        id:1077840607,
        nombres: "Andrés Felipe",
        apellidos: "Quiza Galvis",
        telefono: 3135541771,
        ubicaciones: " ",
        ciudad: "Garzón - Huila",
        dirección: "carrera 1b 3 bis 29", 
    }),
];

function añadirContacto(
    id,
    nombres,
    apellidos,
    telefono,
    ubicaciones,
    ciudad,
    dirección,
){
    return {id, nombres, apellidos, telefono, ubicaciones, ciudad, dirección};
}
function eliminarContacto(pos, cantidadContact) {
    listaContactos.splice(pos, cantidadContact);
}
function verLista () {
    console.log(listaContactos);
}
function modificarContacto(posmodi, catidmodContact, modiContact) {
    listaContactos.splice(posmodi, catidmodContact, modiContact);    
}


listaContactos.push(
    añadirContacto(
    55066943,
    "Melva Ximena",
    "Galvis Arias",
    3104997159,
    "",
    "Garzón - Huila",
    "Calle 7 # 10 11"
    )
);

listaContactos.push(
    añadirContacto(
    12202317,
    "Camilo Andres",
    "Quiza Zuñiga",
    3103393317,
    "",
    "Garzón - Huila",
    "Calle 5 este 29 08"
    )
);
verLista();
eliminarContacto(1, 1);
verLista();