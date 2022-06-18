const precioFinal = (precioProducto, descuento, cupon) =>{
    const porcentajeDescuento = 100 - descuento;
    const precioFinal = ((precioProducto * porcentajeDescuento) / 100) - cupon;
    return precioFinal;
}


let producto = document.getElementById("priceProduct").value;
if((producto == undefined || producto == "")){
    showPrice.innerText = "0"; 
}


const products = () =>{
    let producto = document.getElementById("priceProduct").value;
    let discount = document.getElementById("discountProduct").value;
    let coupon = document.getElementById("couponProduct").value;
    let showPrice = document.getElementById("showPrice");
    let invalido = document.getElementById("invalidCoupon")

    let base = [
        {
            name: "whapy2022",
            precio: 50
        },
        { 
            name: "whapyUnicorn",
            precio: 150
        },
        {
            name: "unicorn2022",
            precio: 100
        },
        {
            name:"hola",
            precio: 10
        }
    ]
    if((coupon == undefined || coupon == "")){
        let cupon = 0
        const precioProductoFinal = precioFinal(producto,discount,cupon)
        showPrice.innerHTML = precioProductoFinal
        if(precioProductoFinal<=0){
            showPrice.innerHTML = "producto gratis"
        }
    }else{
        let encuentra = base.find(element => element.name === coupon);    
        if(!encuentra){
            invalido.innerHTML = "Cupon incorrecto"
            let cupon = 0
            const precioProductoFinal = precioFinal(producto,discount,cupon)
            showPrice.innerHTML = precioProductoFinal
            if(precioProductoFinal<=0){
                showPrice.innerHTML = "producto gratis"
            }
    
        }else{
            let descuento = encuentra.precio;
            const precioProductoFinal = precioFinal(producto,discount,descuento)
            console.log(producto,discount,descuento)
            console.log(precioProductoFinal)
            showPrice.innerHTML = precioProductoFinal
            invalido.innerHTML = ""
            if(precioProductoFinal<=0){
                showPrice.innerHTML = "producto gratis"
            }
        }     
    }
    
}

