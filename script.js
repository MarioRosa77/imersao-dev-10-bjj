const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("input[type='text']");
let dados = [];

// Carrega os dados do JSON em segundo plano quando a página é iniciada,
// mas não exibe nada na tela.
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const resposta = await fetch("data.json");
        dados = await resposta.json();
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
});

function iniciarBusca() {
    const termoBusca = searchInput.value.toLowerCase();
    const resultados = dados.filter(item => 
        item.nome.toLowerCase().includes(termoBusca)
    );
    renderizarCards(resultados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os resultados de buscas anteriores
    for (let dado of dados){
        let article = document.createElement("article");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.descricao}</p>
        <p>Para mais detalhes, veja o <a href="${dado.link}" target="_blank">vídeo de exemplo</a>.</p>
        `
        cardContainer.appendChild(article);
    }
}