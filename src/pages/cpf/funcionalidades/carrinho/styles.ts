import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Contêiner principal
    mainContainer: {
      backgroundColor: '#1e1e2c', // Cor de fundo do contêiner
      padding: 20,
      flex: 1,
      justifyContent: 'flex-start',
    },
  
    // Botão de voltar
    backButton: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      fontSize: 24,
      color: '#32CD32',
      marginBottom: 20,
    },
    backButtonText: {
      fontSize: 24,
      color: '#32CD32',
    },
  
    // Título
    title: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 24,
      marginBottom: 20,
    },
  
    // Estilos do item no carrinho (sem exemplo de item)
    cartItemContainer: {
      paddingBottom: 20,
    },
  
    // Rodapé do carrinho
    cartFooter: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#1e1e2c',
      textAlign: 'center',
      color: '#fff',
    },
    totalPrice: {
      fontSize: 18,
      color: '#FF0000',
      marginBottom: 10,
    },
    checkoutButton: {
      backgroundColor: '#1DD1A1',
      padding: 10,
      fontSize: 16,
      borderRadius: 5,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkoutButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      textAlign: 'center',
    },
  });
  
  export default styles;
  