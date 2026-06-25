function depositar(monto) {
  let saldo = parseInt(localStorage.getItem("saldo")) || 0;
  saldo += monto;
  localStorage.setItem("saldo", saldo);
}

document.getElementById("deposit").addEventListener("click",(e)=>{
    e.preventDefault();
    let monto = parseInt(document.getElementById("depositAmount").value);
    depositar(monto);
    window.location.href = "./menu.html";
});