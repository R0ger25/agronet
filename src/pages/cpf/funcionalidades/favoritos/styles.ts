import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e2c',
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  backButton: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    fontSize: 24,
    color: '#1db954',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#1db954',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',  // Tornando o título mais forte
  },
  favoriteContainer: {
    flexDirection: 'column',
    gap: 15,
    paddingBottom: 100, // Adicionando um padding inferior para o caso do footer
  },
  favoriteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15, // Aumentando o padding para dar mais espaço entre os elementos
    marginBottom: 15, // Mais espaço entre os itens
    alignItems: 'center', // Garantir que os itens estão alinhados no centro
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff0000',
    marginRight: 10,
  },
  heartButton: {
    fontSize: 28, // Aumentando o tamanho para tornar mais interativo
    color: '#ff0000',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    padding: 5, // Tornando o botão de coração mais clicável
  },
  heartText: {
    fontSize: 28, // Aumentando o tamanho do ícone de coração
    color: '#ff0000',
  },
  noFavoritesText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#1e1e2c',
  },
  footerButton: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  footerIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
});

export default styles;
