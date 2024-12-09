// Dados dos produtos
const produtos = [
    {
        id: 1,
        nome: "Smartphone XYZ",
        descricao: "Smartphone com 6GB de RAM, 128GB de armazenamento e câmera de 64MP.",
        preco: 2499
    },
    {
        id: 2,
        nome: "Notebook ABC",
        descricao: "Notebook com processador Intel i7, 16GB de RAM e 512GB SSD.",
        preco: 3899
    },
    {
        id: 3,
        nome: "Fone de Ouvido JBL",
        descricao: "Fone de ouvido Bluetooth com cancelamento de ruído e até 20 horas de duração.",
        preco: 399
    }
];

// Função para mostrar os detalhes do produto no modal
function mostrarDetalhes(idProduto) {
    const produto = produtos.find(p => p.id === idProduto);
    
    document.getElementById('tituloProdutoModal').innerText = produto.nome;
    document.getElementById('descricaoProdutoModal').innerText = produto.descricao;
    document.getElementById('precoProdutoModal').innerText = `Preço: R$ ${produto.preco.toFixed(2)}`;
    
    document.getElementById('detalhesProduto').style.display = 'block';
}

// Função para fechar o modal
function fecharDetalhes() {
    document.getElementById('detalhesProduto').style.display = 'none';
}
