function redirigiendo(btn) {
    btn.preventDefault();
    let ventanaNm = btn.target.textContent;
    document.getElementById("redirigiendoAlert").textContent ="Redirigiendo a " + ventanaNm;
    
    $("#redirigiendoAlert").fadeIn(200);
}

document.addEventListener("DOMContentLoaded", () => {
  let saldo = localStorage.getItem("saldo") || 0; // si no existe usa 60000
  document.getElementById("balance").textContent = "$" + saldo;

  $("#balance").fadeIn(800);
});

document.getElementById("Depositar").addEventListener("click",redirigiendo);
document.getElementById("Depositar").addEventListener("click",()=>{setTimeout(()=>{window.location.href="./deposit.html";},1000)});
document.getElementById("EnviarDinero").addEventListener("click",redirigiendo);
document.getElementById("EnviarDinero").addEventListener("click",()=>{setTimeout(()=>{window.location.href="./sendmoney.html";},1000)});
document.getElementById("UltMov").addEventListener("click",redirigiendo);
document.getElementById("UltMov").addEventListener("click",()=>{setTimeout(()=>{window.location.href="./transactions.html";},1000)});

//TODO Animacion de saldo
