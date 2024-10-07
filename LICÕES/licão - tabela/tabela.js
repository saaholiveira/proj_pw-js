let proximoId = 1;

function adicionarLinha() {
    // Entrada de valores do formulário
    const Id = document.getElementById("Id").value;
    const produto = document.getElementById("produto").value;
    const marca = document.getElementById("marca").value;
    const segmento = document.getElementById("segmento").value;
    const valor = document.getElementById("valor").value;
    const datavenda = document.getElementById("datavenda").value;

    // Se for preenchido vazio 
    if (Id === '' || valor === '' || datavenda === '') {
        alert('Preencha todos os campos!');
    } else {
        const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];

        // Inserindo uma nova linha
        const novaLinha = tabela.insertRow();

        // Inserindo valores de linha
        const celId = novaLinha.insertCell(0);
        const celproduto = novaLinha.insertCell(1);
        const celmarca = novaLinha.insertCell(2);
        const celsegmento = novaLinha.insertCell(3);
        const celvalor = novaLinha.insertCell(4);
        const celdatavenda = novaLinha.insertCell(5);

        // Inserindo os valores dentro das células
        celId.innerHTML = proximoId;
        celproduto.innerHTML = produto;
        celmarca.innerHTML = marca;
        celsegmento.innerHTML = segmento;
        celvalor.innerHTML = valor;
        celdatavenda.innerHTML = datavenda;

        proximoId++;

        // Limpar formulário
        document.getElementById('linhaForm').reset();
    }
}
