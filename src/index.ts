

class Index {
    static main(): void {
        var biblioteca = new Biblioteca();

        // Cadastrar livros
        var livroFisico = new Livro('978-3-16-148410-0', 'Livro A', 'Autor A');
        var ebook = new Ebook('978-1-23-456789-7', 'Livro B', 'Autor B', 2021);

        biblioteca.cadastrarLivro(livroFisico);
        biblioteca.cadastrarLivro(ebook);

        // Buscar livro pelo ISBN
        var livroEncontrado = biblioteca.livroEncontrado('978-3-16-148410-0');
        console.log(livroEncontrado);

        // Remover livro pelo ISBN
        var livroRemovido = biblioteca.livroRemovido('978-1-23-456789-7');
        console.log(livroRemovido ? 'Livro removido com sucesso' : 'Livro não encontrado');
    }
}

