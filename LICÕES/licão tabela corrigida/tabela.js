let proximoId = 1;

function adicionarLinha(a, b, c, x1, x2) {
    const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];

    const linhaX1 = tabela.insertRow();
    linhaX1.insertCell(0).innerHTML = proximoId; 
    linhaX1.insertCell(1).innerHTML = a;
    linhaX1.insertCell(2).innerHTML = b;
    linhaX1.insertCell(3).innerHTML = c;
    linhaX1.insertCell(4).innerHTML = `x1: ${x1.toFixed(2)}`;

    const linhaX2 = tabela.insertRow();
    linhaX2.insertCell(0).innerHTML = proximoId + 1; 
    linhaX2.insertCell(1).innerHTML = a;
    linhaX2.insertCell(2).innerHTML = b;
    linhaX2.insertCell(3).innerHTML = c;
    linhaX2.insertCell(4).innerHTML = `x2: ${x2.toFixed(2)}`;

    proximoId += 2; 
    document.getElementById('linhaForm').reset();
}

function bhaskara() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const delta = (b * b) - (4 * a * c);

    document.getElementById("resultadoDelta").innerHTML = delta.toFixed(2);

    if (delta < 0) {
        alert("Delta é negativo, não há raízes reais.");
    } else {
        const x1 = (-(b) + Math.sqrt(delta)) / (2 * a);
        const x2 = (-(b) - Math.sqrt(delta)) / (2 * a);

        adicionarLinha(a, b, c, x1, x2);
    }
}
