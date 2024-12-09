import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2c',
    alignItems: 'center',
    padding: 10,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#32CD32',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e2e3d',
    padding: 5,
    borderRadius: 20,
    width: '100%',
    maxWidth: 400,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  productContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  product: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    width: '48%', // 2 items per row
    alignItems: 'center',
  },
  productImage: {
    width: '80%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
    color: '#333',
  },  
  priceContainer: {
    color: '#FF0000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  actionButton: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  actionIcon: {
    width: 20,
    height: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1e1e2c',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
  footerIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff', // Apply white color
  },
  actionText: {
    fontSize: 18,
    color: '#000', // Ou qualquer outra cor que desejar
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparência para o fundo
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: '#1e1e2c',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  averagePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#32CD32', // Usando um verde para destacar a média
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default styles;