

class Index {
    static main(): void {
        var biblioteca = new Biblioteca();

        // Cadastrar livros
        var livroFisico = new Livro('978-3-16-148410-0', 'Livro A', 'Autor A', 2020, 'Ficção', 300, true);
        var ebook = new Ebook('978-1-23-456789-7', 'Livro B', 'Autor B', 2021, 'Não-Ficção', 5, 'PDF');

        biblioteca.cadastrarLivro(livroFisico);
        biblioteca.cadastrarLivro(ebook);

        // Buscar livro pelo ISBN
        var livroEncontrado = biblioteca.livroEncontrado('978-3-16-148410-0');
        console.log(livroEncontrado);

        // Remover livro pelo ISBN
        var livroRemovido = biblioteca.livroRemovido({ isbn: '978-1-23-456789-7' });
        console.log(livroRemovido ? 'Livro removido com sucesso' : 'Livro não encontrado');
    }
}

