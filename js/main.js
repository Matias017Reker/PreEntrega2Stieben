//VARS + FUNCTION + LogIn + PRODUCTOS

const User = {
    name: "Reker_007",
    mail: "matusan@hotmail.com",
    password: "1234"
};

User.name = prompt ("Ingrese su nombre de Usuario.");
User.mail = prompt ("Ingrese su correo electronico.");
User.password = prompt ("Ingrese su contraseña.");
let option;
let cuotas;

class Producto {
    constructor(id, nombre, precio, oferta) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.oferta = oferta;
    }

    mostrarOferta() {
        if (this.oferta) {
            alert(` ${this.nombre} en oferta por $${this.precio}.`);
        }
    }
}

let producto1 = new Producto(1,"Ryzen 5 3600 AM4 + Cooler",90,true);
let producto2 = new Producto(2,"Ryzen 7 5800x AM4",190,false);
let producto3 = new Producto(3,"Ryzen 9 5900x AM4",250,false);
let producto4 = new Producto(4,"I3 10105f Socket/1200",100,false);
let producto5 = new Producto(5,"I5 14400F Socket/1700",210,false);
let producto6 = new Producto(6,"I7 12700K Socket/1700",185,false);
let producto7 = new Producto(7,"Rx580 8GB DualOC",100,false);
let producto8 = new Producto(8,"Rx6650xt 8GB",200,false);
let producto9 = new Producto(9,"Rx7600 8GB DualOC",250,false);
let producto10 = new Producto(10,"Gtx1650 4GB OC",150,false);
let producto11 = new Producto(11,"Rtx3050 6GB OC",200,false);
let producto12 = new Producto(12,"Rtx4070Super 12GB",270,false);
let producto13 = new Producto(13,"Aerocool bionic G Bk.V2",30,true);
let producto14 = new Producto(14,"ASUS Rog Strix Gc601 HeliosAluminium",50,false);
let producto15 = new Producto(15,"Kolink Inspire Vidrio Templado",40,false);
let producto16 = new Producto(16,"Kolink Void Black ARGB Vidrio Templado",35,false);
let producto17 = new Producto(17,"Asrock A520M HDV AM4",50,true);
let producto18 = new Producto(18,"Asrock B550 PhantomGaming 4AC AM4",60,false);
let producto19 = new Producto(19,"ASUS Rog Strix X670-E E_Gaming",85,false);
let producto20 = new Producto(20,"Asrock B760M Socket 1700 Sonic/Edition",55,false);
let producto21 = new Producto(21,"ASUS Prime H610M Socket/1700",100,false);
let producto22 = new Producto(22,"Gigabyte H470M Socket/1200",65,false);
let producto23 = new Producto(23,"AeroCool Cylon 700W 80Plus-B RGB",30,true);
let producto24 = new Producto(24,"Corsair 550W 80Plus-B",50,false);
let producto25 = new Producto(25,"Gigabyte 750W 80Plus-G",65,false);
let producto26 = new Producto(26,"Wesdar MK4 BR ARGB",8,false);
let producto27 = new Producto(27,"Cougar Vantar S RGB Low Profile Switch Scissor",20,false);
let producto28 = new Producto(28,"Logitech K270 Bk Wireless",15,false);
let producto29 = new Producto(29,"Logitech M100 Gris",5,false);
let producto30 = new Producto(30,"RedDragon Centrophorus M601 RGB",34,true);
let producto31 = new Producto(31,"Hyperx Pulsefire Haste 2 W RGB",34,false);
let producto32 = new Producto(32,"RedDragon Hylas H260W W RGB",18,true);
let producto33 = new Producto(33,"Hyperx Cloud Stinger Core 2 W",36,false);
let producto34 = new Producto(34,"Cable para fuente 1.5M",2,false);
let producto35 = new Producto(35,"Patriot Viper DDR4 8GB 3200MHz Steel",20,false);
let producto36 = new Producto(36,"T-Force DDR4 2x8GB 3200MHz Nigth Hawk RGB Black",50,false);
let producto37 = new Producto(37,"T-Force DDR5 2x16GB 6400MHz Delta RGB Black",140,false);
let producto38 = new Producto(38,"Fan Antec 120ARGB x3 + Control",40,false);
let producto39 = new Producto(39,"ID-Cooling SE-903-SD",10,true);
let producto40 = new Producto(40,"ASUS TUF LC 120 RGB",160,false);

let productos = [
    producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10,
    producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20,
    producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30,
    producto31, producto32, producto33, producto34, producto35, producto36, producto37, producto38, producto39, producto40
];

const arrayDeProductos = [
    new Producto(1, "Ryzen 5 3600 AM4 + Cooler", 90, true),
    new Producto(2, "Ryzen 7 5800x AM4", 190, false),
    new Producto(3, "Ryzen 9 5900x AM4", 250, false),
    new Producto(4, "I3 10105f Socket/1200", 100, false),
    new Producto(5, "I5 14400F Socket/1700", 210, false),
    new Producto(6, "I7 12700K Socket/1700", 185, false),
    new Producto(7, "Rx580 8GB DualOC", 100, false),
    new Producto(8, "Rx6650xt 8GB", 200, false),
    new Producto(9, "Rx7600 8GB DualOC", 250, false),
    new Producto(10, "Gtx1650 4GB OC", 150, false),
    new Producto(11, "Rtx3050 6GB OC", 200, false),
    new Producto(12, "Rtx4070Super 12GB", 270, false),
    new Producto(13, "Aerocool bionic G Bk.V2", 30, true),
    new Producto(14, "ASUS Rog Strix Gc601 HeliosAluminium", 50, false),
    new Producto(15, "Kolink Inspire Vidrio Templado", 40, false),
    new Producto(16, "Kolink Void Black ARGB Vidrio Templado", 35, false),
    new Producto(17, "Asrock A520M HDV AM4", 50, true),
    new Producto(18, "Asrock B550 PhantomGaming 4AC AM4", 60, false),
    new Producto(19, "ASUS Rog Strix X670-E E_Gaming", 85, false),
    new Producto(20, "Asrock B760M Socket 1700 Sonic/Edition", 55, false),
    new Producto(21, "ASUS Prime H610M Socket/1700", 100, false),
    new Producto(22, "Gigabyte H470M Socket/1200", 65, false),
    new Producto(23, "AeroCool Cylon 700W 80Plus-B RGB", 30, true),
    new Producto(24, "Corsair 550W 80Plus-B", 50, false),
    new Producto(25, "Gigabyte 750W 80Plus-G", 65, false),
    new Producto(26, "Wesdar MK4 BR ARGB", 8, false),
    new Producto(27, "Cougar Vantar S RGB Low Profile Switch Scissor", 20, false),
    new Producto(28, "Logitech K270 Bk Wireless", 15, false),
    new Producto(29, "Logitech M100 Gris", 5, false),
    new Producto(30, "RedDragon Centrophorus M601 RGB", 34, true),
    new Producto(31, "Hyperx Pulsefire Haste 2 W RGB", 34, false),
    new Producto(32, "RedDragon Hylas H260W W RGB", 18, true),
    new Producto(33, "Hyperx Cloud Stinger Core 2 W", 36, false),
    new Producto(34, "Cable para fuente 1.5M", 2, false),
    new Producto(35, "Patriot Viper DDR4 8GB 3200MHz Steel", 20, false),
    new Producto(36, "T-Force DDR4 2x8GB 3200MHz Nigth Hawk RGB Black", 50, false),
    new Producto(37, "T-Force DDR5 2x16GB 6400MHz Delta RGB Black", 140, false),
    new Producto(38, "Fan Antec 120ARGB x3 + Control", 40, false),
    new Producto(39, "ID-Cooling SE-903-SD", 10, true),
    new Producto(40, "ASUS TUF LC 120 RGB", 160, false)
];

const enOferta = productos.filter(productos => productos.oferta);

const rtx = productos.find(producto => producto.nombre.toLowerCase().includes("rtx"));

console.log(productos);
console.log(enOferta);
console.log(rtx)

function calcularcuotas(){
    let monto = parseInt(prompt("Ingrese el monto que se ajuste a su presupuesto."))

if(isNaN(monto) || monto <=0){
    alert("Monto del presupuesto invalido por favor, ingrese un numero valido.");
    return;
}

let cuotas = parseInt(prompt("En cuantas cuotas decea realizar el pago?(3, 6, 9, 12)"))

if (isNaN(cuotas) || [3, 6, 9, 12].indexOf(cuotas) === -1) {
    alert("Por favor, ingrese una cantidad de cuotas válida.");
    return;
}

let iva = Math.round(monto * 0.21 * 100) / 100;
let montoTotal = Math.round((monto + iva) * 100) / 100;
let montoCuotas = Math.round((montoTotal / cuotas) * 100) / 100;

alert(`El monto total con IVA es: ${montoTotal} y el monto por cada cuota es de $${montoCuotas}`);
}

//console.log(username);
//console.log(mail);
//console.log(password);

while (User.name !== "Reker_007" || User.mail !== "matusan@hotmail.com" || User.password !== "1234"){
alert ("Datos ingresados incorrectos")
User.name = prompt ("Ingrese su nombre de Usuario.");
User.mail = prompt ("Ingrese su correo electronico.");
User.password = prompt ("Ingrese su contraseña.");
}

alert("Bienvenido, " + User.name)

//CODIGO

if (confirm("¿Quieres ver nuestra sección de ofertas?")) {
    productos.forEach(producto => producto.mostrarOferta());
} else {
    alert("Entendido");
}


do{
    option = parseInt(prompt("Productos\n\n1-CPU\n\n2-GPU\n\n3-Gabinete\n\n4-Mother\n\n5-Fuente\n\n6-Perifericos\n\n7-RAM\n\n8-Refrigeracion\n\n0-Salir"))
    switch (option) {
        case 0:
            alert ("Esperamos que encontrara lo que buscaba")
            break;
        case 1:
            let text1 = "AMD\n-Ryzen 5 3600 AM4 + Cooler ($90)\n-Ryzen 7 5800x AM4 ($190)\n-Ryzen 9 5900x AM4 ($250)\n\nIntel\n-I3 10105f Socket/1200 ($100)\n-I5 14400F Socket/1700 $210\n-I7 12700K Socket/1700 ($185)"
            alert(text1)
            break;
        case 2:
            let text2 = "AMD\n-Rx580 8GB DualOC ($100)\n-Rx6650xt 8GB ($200)\n-Rx7600 8GB DualOC ($250)\n\nNvidia\n-Gtx1650 4GB OC ($150)\n-Rtx3050 6GB OC ($200)\n-Rtx4070Super 12GB ($270)"
            alert(text2)
            break;
        case 3:
            let text3 = "GABINETES\n\n-Aerocool bionic G Bk.V2 ($30)\n-ASUS Rog Strix Gc601 HeliosAluminium ($50)\n-Kolink Inspire Vidrio Templado ($40)\n-Kolink Void Black ARGB Vidrio Templado ($35)"
            alert(text3)
            break;
        case 4:
            let text4 = "AMD\n-Asrock A520M HDV AM4 ($50)\n-Asrock B550 PhantomGaming 4AC AM4 $60\n-ASUS Rog Strix X670-E E_Gaming $85\n\nIntel\n-Asrock B760M Socket 1700 Sonic/Edition ($55)\n-ASUS Prime H610M Socket/1700 ($100)\n-Gigabyte H470M Socket/1200 ($65)"
            alert(text4)
            break;
        case 5:
            let text5 = "FUENTES\n\n-AeroCool Cylon 700W 80Plus-B RGB ($30)\n-Corsair 550W 80Plus-B ($50)\n-Gigabyte 750W 80Plus-G ($65)"
            alert(text5)
            break;
        case 6:
            let text6 = "Teclado\n-Wesdar MK4 BR ARGB ($8)\n-Cougar Vantar S RGB Low Profile Switch Scissor ($20)\n-Logitech K270 Bk Wireless ($15)\n\nMouse\n-Logitech M100 Gris ($5)\nRedDragon Centrophorus M601 RGB ($14)\n-Hyperx Pulsefire Haste 2 W RGB ($34)\n\nHeadSet\n-RedDragon Hylas H260W W RGB ($18)\nHyperx Cloud Stinger Core 2 W ($36)\n\nCables\n-Cable para fuente 1.5M ($2)"
            alert(text6)
            break;
        case 7:
            let text7 = "RAM\n\n-Patriot Viper DDR4 8GB 3200MHz Steel ($20)\n-T-Force DDR4 2x8GB 3200MHz Nigth Hawk RGB Black ($50)\n-T-Force DDR5 2x16GB 6400MHz Delta RGB Black ($140)"
            alert(text7)
            break;
        case 8:
            let text8 = "Cooler\n-Fan Antec 120ARGB x3 + Control ($40)\n\nCPU Cooler\n-ID-Cooling SE-903-SD ($10)\n\n-CPU Liquida\n-ASUS TUF LC 120 RGB ($160)"
            alert(text8)
            break;
        default:
            alert("La opcion elegida no es valida, por favor, ingresar una que si lo sea.")
            break;
    }
}while(option !== 0)

do {
calcularcuotas()
let respuesta = parseInt(prompt("\n\nQuiere realizar otro calculo de presupuesto?\n\n1- Si\n2-No"))
respuesta
while (respuesta !== 1 && respuesta !== 2){
alert("Respuesta incorrecta, seleccione una respuesta valida.");
respuesta = parseInt(prompt("\n\nQuiere realizar otro calculo de presupuesto?\n\n1- Si\n2-No"))
}

if (respuesta === 2){
    break
}
}while(true)

alert ("Gracias por elegirnos, tenga un buen día!")