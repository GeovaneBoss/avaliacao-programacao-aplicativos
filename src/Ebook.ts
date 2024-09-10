  

  class Ebook extends Livro {
    tamanhoArquivoMB: number;
    formatoArquivo: string;

    constructor(isbn: string, titulo: string, autor: string, anoPublicacao: number, tamanhoArquivoMB: number, formatoArquivo: string) {
        super(isbn, titulo, autor, anoPublicacao);
        this.tamanhoArquivoMB = tamanhoArquivoMB;
        this.formatoArquivo = formatoArquivo;
    }
}
