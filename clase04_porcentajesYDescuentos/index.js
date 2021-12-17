const precioOriginal = 120;
const descuento = 18;


const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescuento = (precioOriginal * (porcentajePrecioConDescuento/100));

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}

var dato1 = document.getElementById("price").value;
var dato2 = document.getElementById("discount").value;

var savingP = document.getElementById("mainResults-savings");
var finalPrice = document.getElementById("mainResults-finalP");

console.log(typeof dato);

if((dato1 == undefined || dato1 == "") || (dato2 == undefined || dato2 == "")){
    savingP.innerText = 0;
    finalPrice.innerText = 0;
}

function onClickButtonPriceDisccount(){
    /* inputs */
    const inputPrice = document.getElementById("price");
    const inputDiscount = document.getElementById("discount");
    const savings = document.getElementById("mainResults-savings");
    const finalP = document.getElementById("mainResults-finalP");
    /* Values */
    inputPriceValue = inputPrice.value;
    inputDiscountValue = inputDiscount.value;

    /* Condicion inicial */

    /* Calculos */
    const precioConDescuento = calcularPrecioConDescuento(inputPriceValue, inputDiscountValue);
    const saveMoney = inputPriceValue-precioConDescuento;

    /* Imprimir resultado */
    savings.innerHTML = saveMoney;
    finalP.innerHTML = precioConDescuento;

}

