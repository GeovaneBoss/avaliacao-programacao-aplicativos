class Biblioteca {
    livros: Livro[] = [];

    cadastrarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    livroRemovido({ isbn }: { isbn: string; }): boolean {
        var index = this.livros.findIndex(livro => livro.isbn === isbn);
        if (index !== -1) {
            this.livros.splice(index, 1);
            return true;
        }
        return false;
    }

    livroEncontrado(isbn: string): Livro | undefined {
        return this.livros.find(livro => livro.isbn === isbn);
    }

    mostrarDetalhes(): void {
        this.livros.forEach(livro => livro.exibirDetalhes());
    }
}
