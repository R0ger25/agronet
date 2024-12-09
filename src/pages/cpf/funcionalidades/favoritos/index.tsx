import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useProdutoContext } from '../../../../context/produtocontext'; // Importando o hook do contexto
import Footer from '../../../../components/Footer';
import styles from './styles'; // Estilos da página

interface FavoritosProps {
    navigation: {
      navigate: (route: string) => void;
      goBack: () => void;
      canGoBack: () => boolean;
    };
}

const Favoritos: React.FC<FavoritosProps> = ({ navigation }) => {
  // Obtendo os produtos do contexto
  const { produtos, toggleFavorite } = useProdutoContext();

  // Filtra os produtos favoritados
  const produtosFavoritos = produtos.filter((produto) => produto.favorito);

  const handleNavigation = (route: string) => {
    navigation.navigate(route);
  };

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      console.warn('No screen to go back to!');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>⬅️</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Favoritos</Text>

      {/* Lista de Favoritos */}
      <ScrollView contentContainerStyle={styles.favoriteContainer}>
        {produtosFavoritos.length > 0 ? (
          produtosFavoritos.map((produto) => (
            <View key={produto.id} style={styles.favoriteItem}>
              <Image source={produto.imagem} style={styles.productImage} />
              <Text style={styles.price}>R${produto.preco.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.heartButton}
                onPress={() => toggleFavorite(produto.id)} // Altera o estado de favorito
              >
                <Text style={styles.heartText}>{produto.favorito ? '❤️' : '♡'}</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.noFavoritesText}>Nenhum item favorito.</Text>
        )}
      </ScrollView>
      <Footer handleNavigation={handleNavigation} />
    </View>
  );
};

export default Favoritos;
