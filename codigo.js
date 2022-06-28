//------------------------------Capitulo 13------------------------------

//Peticiones HTTP

// let peticion;
// if(window.XMLHttpRequest) peticion = new XMLHttpRequest();
// else peticion = new ActiveXObject("Microsoft.XMLHTTP");


// //Para realizar una peticion GET
// peticion.addEventListener("load", ()=>{
//     let respuesta;

//     console.log(peticion.readyState);
    
//     if(peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
//     else respuesta = "Lo siento, no se ha encontrado el recurso";
    
//     console.log(JSON.parse(respuesta));
// })

// //Para metodo GET
// // peticion.open("GET","informacion.txt");
// // peticion.send();


// //Para metodo POST
// peticion.open("POST","https://reqres.in/api/users");
// peticion.setRequestHeader("Content-type","application/json;charset=UTF8");
// peticion.send(JSON.stringify({
//     "nombre":"morfeo",
//     "trabajo": "lider"
// }));

/*------------------Peticiones con el metodo fetch. Funciona para el GET------------------*/

    /*
Para este metodo existen tres conversores:

.text() : Convierte el resultado de la promesa fetch a string 
.json() : Convierte el resultado de la promesa fetch a formato json
.blob() : Convierte 
    */
//----------Fetch para GET---------

fetch("https://reqres.in/api/unknown/2")
    .then(res=>res.json())
    // .then(res=>console.log(res));

//----------Fetch para post---------

fetch("https://reqres.in/api/users",{
    method : "POST",
    body : JSON.stringify({
        "nombre" : "Santiago",
        "apellido" : "Galeano"
    }),
    headers:{"Content-type" : "application/json"}
})
    .then(res=>res.json())
    // .then(res=>console.log(res));

//----------.blob() en Fetch. Para crear un enlace temporal para archivos multimedia---------

const imagen = document.querySelector(".imagen");

fetch("img.jpg")
    .then(res=>res.blob())
    .then(img=>imagen.src = URL.createObjectURL(img));


//----------------Libreria AXIOS---------
//axios.get()
//axios.post()
axios("informacion.txt")
    // .then(res=>console.log(res.data));

axios.post("https://reqres.in/api/users",{
    "nombre" : "santiago",
    "apellido" : "galeano"
})
    // .then(res=>console.log(res));



//----------------Fetch y Axios con Async & Await. La forma optima de utilizar estos metodos---------

const getName = async ()=>{
    let peticion = await fetch("informacion.txt");
    let resultado = await peticion.json();
    let div = document.createElement("DIV");
    div.classList.add("nombre");
    div.textContent = resultado.nombre;
    document.body.appendChild(div);
    console.log(resultado)

}

const getEdad = async ()=>{
    let resultado = await axios("informacion.txt");
    // let resultado = await peticion.json();
    let div = document.createElement("DIV");
    div.classList.add("edad");
    div.textContent = resultado.data.edad;
    document.body.appendChild(div);
    console.log(resultado)

}

document.getElementById("getName").addEventListener("click",getName);

document.getElementById("getEdad").addEventListener("click",getEdad);

// Edad: ${resultado.edad}
