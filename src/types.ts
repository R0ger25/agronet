export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Funcionalidades: undefined;
  AlterarSenha: undefined;
  EditarPerfil: undefined;
  Home: undefined;
  ComprarInsumos: undefined;
  Favoritos: undefined;
  Notificacoes: undefined;
  Perfil: undefined;
  AlterarEndereco: { 
    id: string; 
    nome: string; 
    cep: string; 
  }; // Aqui, definimos corretamente os parâmetros para AlterarEndereco
  Enderecos: undefined;
  NovoEndereco: undefined;
  Ajuda: undefined;
};
