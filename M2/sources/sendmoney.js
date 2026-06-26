function obtenerDatos(){
let nombre = document.getElementById("inputNombre").value;
let cbu = document.getElementById("inputCbu").value;
let alias = document.getElementById("inputAlias").value;
let banco = document.getElementById("inputBanco").value;

let contacto = {
    nombre: nombre,
    cbu: cbu,
    alias: alias,
    banco: banco
};
return contacto;
}

function nuevoContacto(contacto) {
    //obtiene los datos del contacto nuevo
    let listaContactos = JSON.parse(localStorage.getItem("listaContactos")) || []; //obtiene la lista contacto
    listaContactos.push(contacto); //agrega el nuevo contacto
    localStorage.setItem("listaContactos", JSON.stringify(listaContactos)); //guarda la lista completa con el nuevo contacto
}

function mostrarContactos() {
  let listaContactos = JSON.parse(localStorage.getItem("listaContactos")) || [];
  let listaDoc = document.getElementById("contactList");

  listaDoc.innerHTML = ""; // limpiar antes de redibujar

  listaContactos.forEach((contacto, index) => {
    listaDoc.innerHTML += `
      <li class="list-group-item">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="contacto" id="c${index}" value="${contacto.alias}">
          <label class="form-check-label" for="c${index}">
            <span class="contact-name">${contacto.nombre}</span><br>
            <small class="text-muted">CBU: ${contacto.cbu}, Alias: ${contacto.alias}, Banco: ${contacto.banco}</small>
          </label>
        </div>
      </li>
    `;
  });
}
//-------------------------------CODIGO----------------------------------------------

//Hace aparecer el formulario
document.getElementById("agregarContacto").addEventListener("click",(e)=>{
    e.target.style.display = "none";
    document.getElementById("contactForm").style.display = "block";
});

//Obtiene los datos del formulario
document.getElementById("contactForm").addEventListener("submit",(e)=>{

    e.preventDefault();
    let contacto = obtenerDatos();
    nuevoContacto(contacto);


    document.getElementById("contactForm").reset(); // limpia el formulario
    document.getElementById("contactForm").style.display = "none"; // oculta el form
    document.getElementById("agregarContacto").style.display = "block"; // muestra el botón de nuevo
    mostrarContactos();
});

//hace aparecer la lista de contactos seleccionable
document.addEventListener("DOMContentLoaded", () => {
    mostrarContactos();
});

