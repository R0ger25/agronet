import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
import { useProdutoContext } from '../../../../context/produtocontext'; // Importa o contexto de produtos
import styles from './styles';
import Footer from '../../../../components/Footer';
import produtos, { Produto } from '../../../../data/produtos'; 

interface ComprarInsumosProps {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
    canGoBack: () => boolean;
  };
}

const ComprarInsumos: React.FC<ComprarInsumosProps> = ({ navigation }) => {
  const { produtos, toggleFavorite } = useProdutoContext(); // Obtém produtos e toggleFavorite do contexto
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<Produto[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null);
  const [historyModalVisible, setHistoryModalVisible] = useState(false);

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

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleAddToCart = (product: Produto) => {
    setCart((prevCart) => [...prevCart, product]);
    Alert.alert('Carrinho', `${product.nome} foi adicionado ao carrinho!`);
  };

  // Função para adicionar ou remover o produto dos favoritos
  const handleToggleFavorite = (product: Produto) => {
    toggleFavorite(product.id); // Usa a função do contexto para alternar o estado de favorito
    Alert.alert(
      'Favoritos',
      `${product.nome} foi ${product.favorito ? 'adicionado' : 'removido'} dos favoritos!`
    );
  };

  // Função para calcular a média dos preços
  const calculateAveragePrice = (historial: { preco: number; date: Date }[]) => {
    if (!historial || historial.length === 0) return 0;
    const total = historial.reduce((sum, record) => sum + record.preco, 0);
    return total / historial.length;
  };

  // Atualizar o preço de um produto e adicionar ao histórico
  const updatePrice = (productId: number, newPrice: number) => {
    // A lógica para atualização de preços vai aqui, similar ao que já foi feito antes.
  };

  // Exibir o histórico de preços de um produto
  const showPriceHistory = (product: Produto) => {
    setSelectedProduct(product);
    setHistoryModalVisible(true);
  };

  // Fechar o modal
  const closeHistoryModal = () => {
    setHistoryModalVisible(false);
  };

  const filteredProducts = produtos.filter(
    (product) =>
      product.nome.toLowerCase().includes(searchQuery) || product.tipo.toLowerCase().includes(searchQuery)
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>⬅️</Text>
      </TouchableOpacity>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          placeholderTextColor="#ccc"
          onChangeText={handleSearch}
        />
        <Image source={require('../../../../assets/icons/lupa.png')} style={styles.searchIcon} />
      </View>

      <Text style={styles.title}>Comprar Insumos</Text>

      <ScrollView contentContainerStyle={styles.productContainer}>
        {filteredProducts.map((product) => (
          <View style={styles.product} key={product.id}>
            <Image source={product.imagem} style={styles.productImage} />
            <Text style={styles.productName}>{product.nome}</Text>
            <Text style={styles.priceContainer}>${product.preco.toFixed(2)}</Text>
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => showPriceHistory(product)} // Exibir histórico de preços
              >
                <Image source={require('../../../../assets/icons/historico.png')} style={styles.actionIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleToggleFavorite(product)} // Adicionar ou remover dos favoritos
              >
                <Text
                  style={[
                    styles.actionText,
                    {
                      color: product.favorito ? 'red' : '#ccc', // Cor do ícone de favorito
                    },
                  ]}
                >
                  {product.favorito ? '❤️' : '♡'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => handleAddToCart(product)}>
                <Text style={styles.actionText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Modal de Histórico de Preços */}
      {selectedProduct && (
        <Modal visible={historyModalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Histórico de Preços de {selectedProduct.nome}</Text>
              <Text style={styles.averagePrice}>
                Média de Preços: ${calculateAveragePrice(selectedProduct.historial!).toFixed(2)}
              </Text>
              <ScrollView>
                {selectedProduct.historial?.map((record, index) => (
                  <View key={index} style={styles.historyItem}>
                    <Text>{`Preço: $${record.preco.toFixed(2)} - Data: ${record.date.toLocaleString()}`}</Text>
                  </View>
                ))}
              </ScrollView>
              <TouchableOpacity onPress={closeHistoryModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      <Footer handleNavigation={handleNavigation} />
    </View>
  );
};

export default ComprarInsumos;
