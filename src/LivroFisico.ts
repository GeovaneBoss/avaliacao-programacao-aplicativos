class livroFisico {
    isbn: string;
    titulo: string;
    autor: string;

    constructor(isbn: string, titulo: string, autor: string) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
    }

    exibirDetalhes(): void {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, ISBN: ${this.isbn}`);
    }
}
