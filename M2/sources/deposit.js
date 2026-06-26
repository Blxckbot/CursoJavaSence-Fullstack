function depositar(monto) {
  let saldo = parseInt(localStorage.getItem("saldo")) || 0;
  saldo += monto;
  localStorage.setItem("saldo", saldo);
}

function guardarDeposito(monto){
  let transferencias = JSON.parse(localStorage.getItem("transferencias")) || [];
  let nuevoDeposito = {
    nombre:"Depósito en efectivo",
    CBU:"N/A",
    alias:"N/A",
    banco:"N/A"
  };
  nuevoDeposito.monto= "+"+monto; 
  transferencias.push(nuevoDeposito);
  localStorage.setItem("transferencias", JSON.stringify(transferencias));
}

document.getElementById("deposit").addEventListener("click",(e)=>{
    e.preventDefault();
    let monto = parseInt(document.getElementById("depositAmount").value);
    if(monto>0){
      depositar(monto);
      guardarDeposito(monto);
      window.location.href = "./menu.html";
    }else{
      alert("Deposite una cantidad válida");
    }
    
});