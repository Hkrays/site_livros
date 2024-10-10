// script.js

// Função para filtrar os livros com base na pesquisa
function filtrarLivros() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const container = document.getElementById('book-container');
    const books = container.getElementsByClassName('book');

    for (let i = 0; i < books.length; i++) {
        const titleElement = books[i].getElementsByClassName('book-title')[0];
        const title = titleElement.textContent || titleElement.innerText;

        if (title.toLowerCase().indexOf(filter) > -1) {
            books[i].style.display = "";
        } else {
            books[i].style.display = "none";
        }
    }
}

// Adicionar o evento de escuta na barra de pesquisa
document.getElementById('searchInput').addEventListener('keyup', filtrarLivros);
