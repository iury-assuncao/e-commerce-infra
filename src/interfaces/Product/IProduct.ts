export interface IProduct {
  id: number;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
  imagens?: url[];
}

interface url {
  url: string;
}
