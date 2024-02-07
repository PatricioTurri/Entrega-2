let nombre = document.getElementById ("nombre");
let boton = document.getElementById ("btn") ;

boton.addEventListener ("click" , function (){
    let mostrar = document.createElement ("h1") ;
    mostrar.innerHTML = `
        <h1>${nombre.value}</h1>
    `
    document.body.appendChild (mostrar) ;
})