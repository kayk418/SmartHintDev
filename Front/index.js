const inputSearch = document.querySelector("#search")
const navMenu = document.querySelector("[data-type='nav-menu']")

const details = document.querySelector("details li")
inputSearch.addEventListener("input", function () {
    const str = this.value;
    console.log(str)
    if(str){
        filterdata(str)
    } else {
        showALLItems()
    }
})

function showALLItems(){

}

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
  
    if (cpf.length > 11) {
      cpf = cpf.slice(0, 11); // Limita o CPF em 11 dígitos
    }
  
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); // Aplica a máscara

    console.log(cpf);
  
    return cpf;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var inputCPF = document.getElementById("CPF");
  
    inputCPF.addEventListener("input", function() {
      var cpf = formatarCPF(inputCPF.value);
      inputCPF.value = cpf;
    });
  });