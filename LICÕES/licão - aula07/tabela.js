let proximoId = 1;

function bhaskara() {
      const a = $a.value;
      const b = $b.value;
      const c = $c.value;
    
      const delta = b * b - 4 * a * c;
    
     if (a == 0) {
        createAlert('O valor de <strong>a</strong>, deve ser diferente de 0');
      } else if (delta < 0) {
        createAlert('Sem raízes reais');
      } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        $x1.value = x1;
        $x2.value = x2;
      }
}

function adicionarLinha() {
      const a = document.getElementById("a").value;
      const b = document.getElementById("b").value;
      const c = document.getElementById("c").value;
      const x1 = document.getElementById("x1").value;
      const x2 = document.getElementById("x2").value;
}

if (a === '' || b === '' || c === '') {
      alert('Preencha todos os campos');
} else {
      const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];

      const novaLinha = tabela.insertRow();

      const cela = novaLinha.insertCell(0);
      const celb = novaLinha.insertCell(1);
      const celc = novaLinha.insertCell(2);
      const celx1 = novaLinha.insertCell(3);
      const celx2 = novaLinha.insertCell(4);

      cela.innerHTML = proximoId;
      celb.innerHTML = b;
      celc.innerHTML = c;
      celx1.innerHTML = x1;
      celx2.innerHTML = x2;


      proximoId++;

      document.getElementById('linhaForm').reset();
      
}