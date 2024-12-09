// produtos.ts
export interface Produto {
  id: number;
  nome: string;
  tipo: string;
  preco: number; // Preço atual
  imagem: any; // Caminho ou URL da imagem
  historial?: { preco: number; date: Date }[]; // Histórico de preços com data
  favorito: boolean; // Campo para indicar se o produto está favoritado
}

const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Adubo Organico',
    tipo: 'Adubo',
    preco: 17.00,
    imagem: require('../assets/icons/adubo_organico.jpg'),
    favorito: false, // Inicialmente não favoritado
    historial: [
      { preco: 16.00, date: new Date('2024-26-01') },
      { preco: 17.00, date: new Date('2024-31-01') },
    ],
  },
  {
    id: 2,
    nome: 'Adubo Quimico',
    tipo: 'Adubo',
    preco: 20.00,
    imagem: require('../assets/icons/adubo_quimico.jpg'),
    favorito: false, // Inicialmente não favoritado
    historial: [
      { preco: 22.00, date: new Date('2024-06-01') },
      { preco: 20.00, date: new Date('2024-11-01') },
    ],
  },
  {
    id: 3,
    nome: 'Fertilizante Liquido',
    tipo: 'Fertilizante',
    preco: 15.00,
    imagem: require('../assets/icons/fertilizante_liquido.jpg'),
    favorito: false, // Inicialmente não favoritado
    historial: [
      { preco: 14.50, date: new Date('2024-04-01') },
      { preco: 15.00, date: new Date('2024-09-01') },
    ],
  },
  {
    id: 4,
    nome: 'Fertilizante em Po',
    tipo: 'Fertilizante',
    preco: 25.00,
    imagem: require('../assets/icons/fertilizante_em_po.jpg'),
    favorito: false, // Inicialmente não favoritado
    historial: [
      { preco: 27.00, date: new Date('2024-07-01') },
      { preco: 25.00, date: new Date('2024-12-01') },
    ],
  },
  {
    id: 5,
    nome: 'Pesticida Natural',
    tipo: 'Pesticida',
    preco: 30.00,
    imagem: require('../assets/icons/pesticida_natural.jpg'),
    favorito: false, // Inicialmente não favoritado
    historial: [
      { preco: 32.00, date: new Date('2024-03-01') },
      { preco: 30.00, date: new Date('2024-08-01') },
    ],
  },
  {
    id: 6,
    nome: 'Pesticida Sintetico',
    tipo: 'Pesticida',
    preco: 40.00,
    imagem: require('../assets/icons/pesticida_sintetico.jpg'),
    favorito: false, // Inicialmente não favoritado
    historial: [
      { preco: 45.00, date: new Date('2024-01-01') },
      { preco: 40.00, date: new Date('2024-06-01') },
    ],
  },
];

export default produtos;
