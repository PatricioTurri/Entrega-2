function personas (nombre , apellido , usuario , mail , telefono , domicilio) {
    this.nombre = nombre ;
    this.apellido = apellido ;
    this.usuario = usuario ;
    this.mail = mail ;
    this.telefono = telefono ;
    this.domicilio = domicilio ;
}
let persona1 = new personas ("Patricio" , "Turri" , "patoturri" , "gmail.com" , 454629444 , "Rivadavia 23, Moron") ;
let persona2 = new personas ("Javier" , "Rodriguez" , "javiro" , "gmail.com" , 423232139444 , "Alberdi 55, Moron") ;
let persona3 = new personas ("Agustin" , "Garcia" , "Aguga" , "gmail.com" , 4123123139444 , " Carabobo 23, Moron") ;
let persona4 = new personas ("Maria" , "Lopez" , "marlo" , "gmail.com" , 454123454544 , "Hirigoyen 23, Moron") ;
let persona5 = new personas () ;

function productos (id , nombre , precio){
    this.id = id ;
    this.nombre = nombre ;
    this.precio = precio ;
}
const producto1 = new productos (1 , "Camara Canon" , 30000) ; 
const producto2 = new productos (2 , "Drone" , 40000) ;
const producto3 = new productos (3 , "GoPro" , 10000) ;
const producto4 = new productos (4 , "Insta360" , 20000) ;

const todasLasPersonas = [persona1 , persona2 , persona3 , persona4] ;
const todosLosProductos = [producto1 , producto2 , producto3 , producto4] ;

function localStoragePorUsiario (x , y) {
    localStorage.setItem (x , y) ;
}

function crearUsuario () {
   let ingreseNombre = document.createElement ("div") ;
   ingreseNombre.innerHTML = `
   <h3>Escriba el nombre</h3>
   <input id="name1" type="text">
   <button id="btn1">Acpetar</button>
   `
   document.body.appendChild (ingreseNombre) ;
   let name1 = document.getElementById ("name1") ;
   let btn1 = document.getElementById ("btn1") ;
   btn1.addEventListener ("click" , function (){
    
    let ingreseApellido = document.createElement ("div")
    ingreseApellido.innerHTML = `
    <h3>Escriba el apellido</h3>
    <input id="name2" type="text">
    <button id="btn2">Acpetar</button>
    `
    document.body.appendChild (ingreseApellido) ;
   let name2 = document.getElementById ("name2") ;
   let btn2 = document.getElementById ("btn2") ;
   btn2.addEventListener ("click" , function (){
    
    let ingreseUsuario = document.createElement ("div") ;
    ingreseUsuario.innerHTML = `
    <h3>Escriba el usuario</h3>
    <input id="name3" type="text">
    <button id="btn3">Acpetar</button>
    `
    document.body.appendChild (ingreseUsuario) ;
   let name3 = document.getElementById ("name3") ;
   let btn3 = document.getElementById ("btn3") ;
   btn3.addEventListener ("click" , function (){

    let ingreseMail = document.createElement ("div") ;
    ingreseMail.innerHTML = `
    <h3>Escriba el mail</h3>
    <input id="name4" type="text">
    <button id="btn4">Acpetar</button>
    `
    document.body.appendChild (ingreseMail) ;
   let name4 = document.getElementById ("name4") ;
   let btn4 = document.getElementById ("btn4") ;
   btn4.addEventListener ("click" , function (){
    
    let ingreseTelefono = document.createElement ("div") ;
    ingreseTelefono.innerHTML = `
    <h3>Escriba el telefono</h3>
    <input id="name5" type="text">
    <button id="btn5">Acpetar</button>
    `
    document.body.appendChild (ingreseTelefono) ;
   let name5 = document.getElementById ("name5") ;
   let btn5 = document.getElementById ("btn5") ;
   btn5.addEventListener ("click" , function (){

    let ingreseDomicilio = document.createElement ("div") ;
    ingreseDomicilio.innerHTML = `
    <h3>Escriba el domicilio</h3>
    <input id="name6" type="text">
    <button id="btn6">Acpetar</button>
    `
    document.body.appendChild (ingreseDomicilio) ;
   let name6 = document.getElementById ("name6") ;
   let btn6 = document.getElementById ("btn6") ;
   btn6.addEventListener ("click" , function (){
    
    let persona5 = new personas (name1.value , name2.value , name3.value , name4.value , name5.value , name6.value) ;
    
    localStoragePorUsiario (name3.value , JSON.stringify (persona5)) ;
    
    //Para probar si funcionaba
    let traerDelLocal = JSON.parse (localStorage.getItem (name3.value)) ;
    console.table (traerDelLocal) ;
   })
   })
   })
   })
})
})
}

let inicio = document.getElementById ("pres") ;
inicio.innerHTML = `
    <h1>Bienvenid@ a FotoPato</h1>
    <input id="name" type="text">
    <button id="btn">Hace click para incresar tu usuario</button>
`
document.body.appendChild (inicio) ;

let name = document.getElementById ("name")
let botonInicio = document.getElementById ("btn") ;
botonInicio.addEventListener ("click" , function (){
    let datoNombre = todasLasPersonas.filter ((x) => x.usuario.includes(name.value))
    if (datoNombre.length > 0) {
        for (const x of datoNombre){
            let mostrarDatosExistentes = document.createElement ("p")
            mostrarDatosExistentes.innerHTML = `
                </h2>Buenas<h2>
                <li>Nombre: ${x.nombre}</li>
                <li>Apellido: ${x.apellido}</li>
                <li>Usuario: ${x.usuario}</li>
                <li>Mail:${x.mail}</li>
                <li>Telefono: ${x.telefono}</li>
                <li>Domicilio: ${x.domicilio}</li>
            `
            document.body.appendChild (mostrarDatosExistentes) ;
            localStoragePorUsiario (name.value , JSON.stringify (datoNombre))
        }
    let produ = document.getElementById ("produ")
    produ.innerHTML = `
        <h2>Estos son nuestos productos</h2>
        <li><p>${producto1.nombre}</li></p>
        <button id="btn1">Quiero este</button>
        <li><p>${producto2.nombre}</li></p>
        <button id="btn2">Quiero este</button>
        <li><p>${producto3.nombre}</li></p>
        <button id="btn3">Quiero este</button>
        <li><p>${producto4.nombre}</li></p>
        <button id="btn4">Quiero este</button>
    `
    document.body.appendChild (produ) ;
    let boton1 = document.getElementById ("btn1") ;
    let boton2 = document.getElementById ("btn2") ;
    let boton3 = document.getElementById ("btn3") ;
    let boton4 = document.getElementById ("btn4") ;
    boton1.addEventListener ("click" , function(){
        mostrarBoton1 = document.createElement ("p")
        mostrarBoton1.innerHTML = `
            <h3>Estos es su valor</h3>
            <li>${producto1.nombre}</li>
            <li>${producto1.precio}</li>
        `
        document.body.appendChild (mostrarBoton1) ;
    }) 
    boton2.addEventListener ("click" , function(){
        mostrarBoton2 = document.createElement ("p")
        mostrarBoton2.innerHTML = `
            <h3>Estos es su valor</h3>
            <li>${producto2.nombre}</li>
            <li>${producto2.precio}</li>
        `
        document.body.appendChild (mostrarBoton2) ;
    }) 
    boton3.addEventListener ("click" , function(){
        mostrarBoton3 = document.createElement ("p")
        mostrarBoton3.innerHTML = `
            <h3>Estos es su valor</h3>
            <li>${producto3.nombre}</li>
            <li>${producto3.precio}</li>
        `
        document.body.appendChild (mostrarBoton3) ;
    }) 
    boton4.addEventListener ("click" , function(){
        mostrarBoton4 = document.createElement ("p")
        mostrarBoton4.innerHTML = `
            <h3>Estos es su valor</h3>
            <li>${producto4.nombre}</li>
            <li>${producto4.precio}</li>
        `
        document.body.appendChild (mostrarBoton4) ;
    }) 
    }else{
        let usuarios = document.getElementById ("usuarios") ;
        usuarios.innerHTML = `
            <h3>Toque aqui para registrarte<h3>
            <button id="reg">Registrate</button>
        `
        document.body.appendChild (usuarios) ;
        let regBoton = document.querySelector ("#reg") ;
        regBoton.addEventListener ("click" , crearUsuario) ;
        
    }
})