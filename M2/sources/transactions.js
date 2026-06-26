document.addEventListener("DOMContentLoaded",()=>{
    let listaMov = JSON.parse(localStorage.getItem("transferencias")) || [];
    let listaMovHTML = document.getElementById("transferList");

    listaMovHTML.innerHTML = "";

    listaMov.reverse().forEach(element => {
        listaMovHTML.innerHTML+=`
        <li class="list-group-item">${element.nombre} -> $${element.monto}</li>
        `;
    });
})