let proximoId = 1;

function adicionarLinha() {
    // Entrada de valores do formulário
    const a = document.getElementById("Id").value;
    const b = document.getElementById("produto").value;
    const c = document.getElementById("marca").value;

    // Se for preenchido vazio 
    if (a === '' || b === '' || c === '') {
        alert('Preencha todos os campos!');
    } else {
        const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];

        // Inserindo uma nova linha
        const novaLinha = tabela.insertRow();

        // Inserindo valores de linha
        const cela = novaLinha.insertCell(0);
        const celb = novaLinha.insertCell(1);
        const celc = novaLinha.insertCell(2);
        

        cela.innerHTML = proximoId;
        celb.innerHTML = b;
        celc.innerHTML = c;
        

        proximoId++;

        // Limpar formulário
        document.getElementById('linhaForm').reset();
    }
}
