document.addEventListener("DOMContentLoaded",()=>{
    let listaMov = JSON.parse(localStorage.getItem("transferencias")) || [];
    let listaMovHTML = document.getElementById("transferList");

    listaMovHTML.innerHTML = "";

    listaMov.reverse().forEach(element => {
        if(element.type == "dep"){
        listaMovHTML.innerHTML+=`
        <li class="list-group-item" name="${element.type}">${element.nombre} -> $${element.monto}</li>
        `;
        }else if (element.type == "tran") {
        listaMovHTML.innerHTML+=`
        <li class="list-group-item" name="${element.type}">Transferencia a: ${element.nombre} -> $${element.monto}</li>
        `;
        }else if (element.type == "com") {
        listaMovHTML.innerHTML+=`
        <li class="list-group-item" name="${element.type}">Compra en: ${element.nombre} -> $${element.monto}</li>
        `;
        }else{
        listaMovHTML.innerHTML+=`
        <li class="list-group-item" name="${element.type}">Desconocido: ${element.nombre} -> $${element.monto}</li>
        `;
        }

    });
});

$("#filter input").on("change",function() {
    let filtro = $(this).val();

    $("#transferList li").each(function() {
    let trans = $(this).attr("name");
    
    if (trans.includes(filtro)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });

});