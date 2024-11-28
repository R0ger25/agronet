import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2c',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#2c2f48',
    color: '#fff',
    fontSize: 16,
    marginBottom: 15,
  },
  saveButton: {
    padding: 10,
    backgroundColor: '#1db954',
    color: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'transparent',
  },
  backButtonText: {
    fontSize: 30,
    color: '#1db954',
  },
  itemContainer: {
    flexDirection: 'row', // Para alinhar o item com os botões de editar e excluir
    justifyContent: 'space-between', // Espalha os itens para as extremidades
    alignItems: 'center', // Alinha o conteúdo verticalmente
    backgroundColor: '#2c2f48',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  item: {
    flex: 1, // Ocupa o espaço restante dentro do itemContainer
    backgroundColor: '#2c2f48', // Garante consistência com o itemContainer
    padding: 10, // Define espaçamento interno
    borderRadius: 5,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#1db954',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: '#e53935', // Cor vermelha para exclusão
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#1db954',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
