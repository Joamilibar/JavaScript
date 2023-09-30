// PRECIO DE PRODUCTOS: OPCION DE SELECCIONAR TIPO, DE SER MEDIDA ESPECIAL, PEDIR MEDIDAS PARA EL CÁLCULO, CON UN VALOR DE MANO DE OBRA Y MEDIDAS PRE-ESTABLECIDOS.

// MONEDA: CLP, MEDIDA, CMS, METROS Y MTR2.

const metro2Tela = Number(60000);
const moJgoSabsSk = parseInt(240000);
const moJgoSabsK = parseInt(220000);
const moJgoSabsQ = parseInt(210000);
const moJgoSabsT = parseInt(190000);
const opciones = String("\nJuego de Sábanas: \n\n1. Super King \n2. King \n3. Queen \n4. Twin \n5. Medida Especial");
let seguir

function precioSolicitado(valor) {
    alert("El precio es de: " + (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'CLP' }).format(valor)))
}
function continuar(){
    seguir = prompt("¿Desea continuar cotizando? Escriba 'si' o 'no'");
}
let nombreCompleto = prompt("Ingresa tu Nombre Completo:");

do {
    if (nombreCompleto != "") {
        let opcion = prompt("Hola " + nombreCompleto + ". " + "Indique el tamaño a cotizar escribiendo el número que corresponda." + opciones);
        switch (opcion) {
            case "1":
                valor = moJgoSabsSk
                precioSolicitado(valor)
                continuar()
                continue;
            case "2":
                valor = moJgoSabsK
                precioSolicitado(valor)
                continuar()
                continue;
            case "3":
                valor = moJgoSabsQ
                precioSolicitado(valor)
                continuar()
                continue;
            case "4":
                valor = moJgoSabsT
                precioSolicitado(valor)
                continuar()
                continue;
            case "5":
                let largoCama = prompt("Ingrese el 'Largo' de la cama en centímetros");
                let anchoCama = prompt("Ingrese el 'Ancho' de la cama en centímetros");
                let medidaEspecial = Number(metro2Tela * (largoCama / 100) * (anchoCama / 100));
                valor = medidaEspecial
                precioSolicitado(valor)
                continuar()
                continue;
            default:
                seguir = (prompt("Opción incorrecta. " + "\n¿Desea continuar cotizando? Escriba 'si' o 'no'"));

        }
    } else alert("No ingreso su nombre, hasta luego.");
} while (seguir == "si");

