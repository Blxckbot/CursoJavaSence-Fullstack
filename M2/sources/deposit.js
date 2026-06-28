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
    banco:"N/A",
    type:"dep"
  };
  nuevoDeposito.monto= "+"+monto; 
  transferencias.push(nuevoDeposito);
  localStorage.setItem("transferencias", JSON.stringify(transferencias));
}

function actualizarSaldo() {
let saldoActual = parseInt(localStorage.getItem("saldo")) || 0;
$("#saldoActual").text(saldoActual);
}

document.getElementById("deposit").addEventListener("submit",(e)=>{
    e.preventDefault();
    let monto = parseInt(document.getElementById("depositAmount").value);
    if(monto>0){
      depositar(monto);
      guardarDeposito(monto);

      $("#deposit").fadeOut(300);
      $("#alertaDeposit").fadeIn(300);
      actualizarSaldo();
      setTimeout(()=>{window.location.href = "./menu.html";},2000);



      
    }else{
      alert("Deposite una cantidad válida");
    }
    
});
actualizarSaldo();