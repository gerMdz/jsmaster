// Exporto por función
export default function showDatos(datos) {
    datos.forEach(element => {
        console.log(element)
    })

    return datos;
}

export function showName(name) {
    console.log(name)
}

// Exporto el módulo entero, sacar el export a cada función
// export default {
//     showDatos,
//     showName
// };
