class Producto{

    constructor(nombre , precio , stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;  
    }

    get_datos(){
        console.log("<------------------------>");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio); 
        console.log("Stock: ", this.stock);     
        console.log("");
    }

    get_stock(){
        if(this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }

    update_stock( cantidad ){
        if( this.stock >= cantidad){
            this.stock = this.stock - cantidad;
        }
        else{
            console.log("El stock es insuficiente");
        }
    }
}




// Alta de productos //

let lista_productos = [];

for(let i = 0 ; i < 3 ; i = i + 1){
    let nombre = prompt("Ingresa un producto");
    let precio = prompt("Ingresa el precio");
    let stock = prompt("Ingresa el stock");
    let producto = new Producto( nombre , precio , stock);
    lista_productos.push(producto);
}

// Fin de alta de productos //


// Inicio for de lista_productos //

for( let producto of lista_productos){
    producto.get_datos();
}
// Fin de for de lista_productos //


// Simulacion de compra//

function buscar_producto( producto ){
    return producto.nombre == compra_usuario
}
let compra_usuario = prompt("Ingresa el producto que queres comprar");
let resultado_find = lista_productos.find(buscar_producto);

if( resultado_find != undefined ){
    if( resultado_find.get_stock() ){
        let unidades = prompt("¿Cuantos queres?");
        resultado_find.update_stock(unidades);
        console.log("Muchas gracias por tu compra");     
    }
    else{
        console.log("Producto sin stock");
    }
}
else{
    console.log("Este producto no existe")
}

resultado_find.get_datos();