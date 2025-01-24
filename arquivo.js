document.getElementById("mostrar").addEventListener("click", function() {
    var nome = document.getElementById("nome").value;
    document.getElementById("resposta").innerHTML = "Olá, " + nome + "!";
  });

