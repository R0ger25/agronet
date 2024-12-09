import React, { createContext, useContext, useState, ReactNode } from 'react';
import produtos, { Produto } from '../data/produtos'; // Importa os produtos iniciais

// Define o tipo do contexto
interface ProdutoContextType {
  produtos: Produto[];
  toggleFavorite: (id: number) => void;
}

// Tipo das props do ProdutoProvider
interface ProdutoProviderProps {
  children: ReactNode;
}

// Criação do contexto
const ProdutoContext = createContext<ProdutoContextType | undefined>(undefined);

// Provider do contexto
export const ProdutoProvider: React.FC<ProdutoProviderProps> = ({ children }) => {
  // Estado para armazenar os produtos
  const [produtosState, setProdutosState] = useState<Produto[]>(produtos);

  // Função para alternar o estado de favorito
  const toggleFavorite = (id: number) => {
    setProdutosState((prevProdutos) =>
      prevProdutos.map((produto) =>
        produto.id === id ? { ...produto, favorito: !produto.favorito } : produto
      )
    );
  };

  return (
    <ProdutoContext.Provider value={{ produtos: produtosState, toggleFavorite }}>
      {children}
    </ProdutoContext.Provider>
  );
};

// Hook para consumir o contexto
export const useProdutoContext = (): ProdutoContextType => {
  const context = useContext(ProdutoContext);
  if (!context) {
    throw new Error('useProdutoContext must be used within a ProdutoProvider');
  }
  return context;
};
