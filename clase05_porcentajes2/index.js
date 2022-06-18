function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}

const onClickButtonPriceDiscount = () =>{
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    console.log(precioConDescuento);
    console.log(priceValue, discountValue);
    

    const finalPrice = document.getElementById("ResultPrice");
    finalPrice.innerText = `El precio con descuento final es de ${precioConDescuento}`
}   