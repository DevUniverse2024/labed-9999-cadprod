let produtos = [];

function limparCampos() {
    document.getElementById('idProduto').value = '';
    document.getElementById('nomeProduto').value = '';
    document.getElementById('precoProduto').value = '';
    document.getElementById('quantidadeProduto').value = '';
}

function atualizarTabela() {
    const tbody = document.querySelector('#tabelaProdutos tbody');
    tbody.innerHTML = '';
    produtos.forEach(produto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td>${produto.quantidade}</td>
        `;
        tbody.appendChild(tr);
    });
}

function incluirProduto() {
    const id = document.getElementById('idProduto').value.trim();
    const nome = document.getElementById('nomeProduto').value.trim();
    const preco = parseFloat(document.getElementById('precoProduto').value);
    const quantidade = parseInt(document.getElementById('quantidadeProduto').value);

    if (!id || !nome || isNaN(preco) || isNaN(quantidade)) {
        alert('Preencha todos os campos corretamente!');
        return;
    }

    if (produtos.some(p => p.id === id)) {
        alert('Já existe um produto com este ID!');
        return;
    }

    produtos.push({ id, nome, preco, quantidade });
    atualizarTabela();
    limparCampos();
}

function alterarProduto() {
    const id = document.getElementById('idProduto').value.trim();
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        alert('Produto não encontrado!');
        return;
    }

    const nome = document.getElementById('nomeProduto').value.trim();
    const preco = parseFloat(document.getElementById('precoProduto').value);
    const quantidade = parseInt(document.getElementById('quantidadeProduto').value);

    if (nome) produto.nome = nome;
    if (!isNaN(preco)) produto.preco = preco;
    if (!isNaN(quantidade)) produto.quantidade = quantidade;

    atualizarTabela();
    limparCampos();
}

function excluirProduto() {
    const id = document.getElementById('idProduto').value.trim();
    produtos = produtos.filter(p => p.id !== id);
    atualizarTabela();
    limparCampos();
}

function consultarProduto() {
    const id = document.getElementById('idProduto').value.trim();
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        alert('Produto não encontrado!');
        return;
    }

    document.getElementById('nomeProduto').value = produto.nome;
    document.getElementById('precoProduto').value = produto.preco;
    document.getElementById('quantidadeProduto').value = produto.quantidade;
}

function listarProdutos() {
    atualizarTabela();
}