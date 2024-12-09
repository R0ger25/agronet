import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from './styles';

const Carrinho: React.FC = () => {
  const handleBack = () => {
    // Lógica de voltar
    Alert.alert('Voltar');
  };

  const handleCheckout = () => {
    // Lógica para finalizar a compra
    Alert.alert('Finalizar Compra');
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>⬅️</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Carrinho</Text>

      <ScrollView contentContainerStyle={styles.cartItemContainer}>
        {/* Sem itens no carrinho */}
      </ScrollView>

      <View style={styles.cartFooter}>
        <Text style={styles.totalPrice}>Valor Total: R$0,00</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Finalizar a Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Carrinho;
