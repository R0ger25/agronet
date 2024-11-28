import React, { createContext, useContext, useState, ReactNode } from 'react';

type Endereco = {
  id: string;
  nome: string;
  cep: string;
};

type EnderecosContextType = {
  enderecos: Endereco[];
  updateEndereco: (id: string, enderecoAtualizado: Endereco) => void;
  addEndereco: (endereco: Endereco) => void;
  deleteEndereco: (id: string) => void; // Função para excluir o endereço
};

const EnderecosContext = createContext<EnderecosContextType | undefined>(undefined);

type EnderecosProviderProps = {
  children: ReactNode;
};

export const EnderecosProvider: React.FC<EnderecosProviderProps> = ({ children }) => {
  const [enderecos, setEnderecos] = useState<Endereco[]>([]);

  const updateEndereco = (id: string, enderecoAtualizado: Endereco) => {
    setEnderecos((prevEnderecos) =>
      prevEnderecos.map((endereco) =>
        endereco.id === id ? enderecoAtualizado : endereco
      )
    );
  };

  const addEndereco = (endereco: Endereco) => {
    setEnderecos((prevEnderecos) => [...prevEnderecos, endereco]);
  };

  const deleteEndereco = (id: string) => {
    setEnderecos((prevEnderecos) =>
      prevEnderecos.filter((endereco) => endereco.id !== id)
    );
  };

  return (
    <EnderecosContext.Provider value={{ enderecos, updateEndereco, addEndereco, deleteEndereco }}>
      {children}
    </EnderecosContext.Provider>
  );
};

export const useEnderecos = (): EnderecosContextType => {
  const context = useContext(EnderecosContext);
  if (!context) {
    throw new Error('useEnderecos must be used within a EnderecosProvider');
  }
  return context;
};
