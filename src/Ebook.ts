class Ebook extends Livro {
    tamanhoArquivo: number;

    constructor(isbn: string, titulo: string, autor: string, tamanhoArquivo: number) {
        super(isbn, titulo, autor);
        this.tamanhoArquivo = tamanhoArquivo;
    }

    exibirDetalhes(): void {
        super.exibirDetalhes();
        console.log(`Tamanho do Arquivo: ${this.tamanhoArquivo} MB`);
    }
}
