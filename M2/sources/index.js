
document.getElementById("ingreso").addEventListener("submit",(e)=>{
    let rut=document.getElementById("rut").value;
    let pass=document.getElementById("pass").value;
    e.preventDefault();
    if (rut=="123" && pass=="123"){
    window.location.href= "menu.html";
    }else{
        document.getElementById("miAlerta").style.display = "block";
    }

});

