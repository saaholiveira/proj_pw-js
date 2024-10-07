let proximoId = 1;

function adicionarLinha() {
    // Entrada de valores do formulário
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const admissao = document.getElementById("admissao").value;
    const demissao = document.getElementById("demissao").value;

    // Se for preenchido vazio 
    if (nome === '' || idade === '' || admissao === '') {
        alert('Preencha todos os campos!');
    } else {
        const tabela = document.getElementById("tabeladados").getElementsByTagName('tbody')[0];

        // Inserindo uma nova linha
        const novaLinha = tabela.insertRow();

        // Inserindo valores de linha
        const celulaid = novaLinha.insertCell(0);
        const cellNome = novaLinha.insertCell(1);
        const cellIdade = novaLinha.insertCell(2);
        const cellAdmissao = novaLinha.insertCell(3);
        const cellDemissao = novaLinha.insertCell(4);

        // Inserindo os valores dentro das células
        celulaid.innerHTML = proximoId;
        cellNome.innerHTML = nome;
        cellIdade.innerHTML = idade;
        cellAdmissao.innerHTML = admissao;
        cellDemissao.innerHTML = demissao;

        proximoId++;

        // Limpar formulário
        document.getElementById('linhaForm').reset();
    }
}
