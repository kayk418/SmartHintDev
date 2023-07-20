   function formatarCPF(cpf) {
      cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
    
      if (cpf.length > 11) {
        cpf = cpf.slice(0, 11); // Limita o CPF em 11 dígitos
      }
    
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); // Aplica a máscara
    
      return cpf;
    }

    
    document.addEventListener ("DOMContentLoaded", function);{
      var inputCPF = document.getElementById("CPF");

      inputCPF.addEventListener("input", function); {
        var cpf = formatarCPF(inputCPF.value);
        inputCPF.value = cpf;
      }
      
      document.getElementById("codigo").onblur = function() {libera()};
function libera() {
  var codigo = document.getElementById("codigo");
  var codigo_interno = document.getElementById("codigo_interno");

  if (codigo !== "") {
    codigo_interno.disabled = true;
    codigo_interno.value = "produto...";
  }
}
<label for="codigo">Código
<input type="text" id="codigo">
</label>
<label for="codigo_interno">Código Interno
<input type="text" id="codigo_interno">
</label>
    
    }
    