import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando as páginas
import Login from './src/pages/login';
import Cadastro from './src/pages/cadastro';
import Funcionalidades from './src/pages/cpf/funcionalidades';
import Notificacoes from './src/pages/cpf/funcionalidades/notificacoes';
import Ajuda from './src/pages/cpf/funcionalidades/ajuda';
import Perfil from './src/pages/cpf/funcionalidades/dadospessoais';
import AlterarSenha from './src/pages/cpf/funcionalidades/dadospessoais/alterarsenha';
import EditarPerfil from './src/pages/cpf/funcionalidades/dadospessoais/editarperfil';
import Enderecos from './src/pages/cpf/funcionalidades/dadospessoais/enderecos';
import AlterarEndereco from './src/pages/cpf/funcionalidades/dadospessoais/enderecos/editarendereco';
import NovoEndereco from './src/pages/cpf/funcionalidades/dadospessoais/enderecos/editarendereco';

// Importando o contexto
import { EnderecosProvider } from './src/pages/cpf/funcionalidades/dadospessoais/enderecos/enderecoscontext';

// Tipos de navegação
import { RootStackParamList } from './src/types';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // Envolvendo a aplicação com o EnderecosProvider para garantir o acesso ao contexto
    <EnderecosProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Cadastro" 
            component={Cadastro} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Funcionalidades" 
            component={Funcionalidades} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Ajuda" 
            component={Ajuda} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Notificacoes" 
            component={Notificacoes} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Perfil" 
            component={Perfil} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="AlterarSenha" 
            component={AlterarSenha} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="EditarPerfil" 
            component={EditarPerfil} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Enderecos" 
            component={Enderecos} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="AlterarEndereco"
            component={AlterarEndereco} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="NovoEndereco" 
            component={NovoEndereco} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </EnderecosProvider>
  );
}
