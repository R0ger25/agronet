import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2c',
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80, // Espaço para evitar sobreposição com o Footer
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#32CD32',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  contactItem: {
    backgroundColor: '#2c2f48',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
  },
  contactText: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default styles;
