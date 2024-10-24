let proximoId = 1;

function adicionarLinha() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const serie = document.getElementById("serie").value;
    const curso = document.getElementById("curso").value;

    if (serie === '' || idade === '') {
        alert('Preencha todos os campor!');
    } else {
        const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];
    
        const novaLinha = tabela.insertRow();
    
        const celnome = novaLinha.insertCell(0);
        const celidade = novaLinha.insertCell(1);
        const celserie = novaLinha.insertCell(2);
        const celcurso = novaLinha.insertCell(3);
    
        celnome.innerHTML = proximoId;
        celidade.innerHTML = idade;
        celserie.innerHTML = serie;
        celcurso.innerHTML = curso;

        proximoId++

        document.getElementById('linhaForm').reset();
    }
}



