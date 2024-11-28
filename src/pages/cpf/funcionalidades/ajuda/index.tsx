import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Footer from "../../../../components/Footer";
import styles from './styles'; // Importando os estilos

const Ajuda = () => {
  const navigation = useNavigation();

  const handleWhatsApp = () => {
    Alert.alert('Abrindo WhatsApp...');
  };

  const handleTelegram = () => {
    Alert.alert('Abrindo Telegram...');
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho com botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>⬅️</Text>
      </TouchableOpacity>

      {/* Conteúdo Principal */}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Ajuda</Text>

        {/* Informações de Contato */}
        <View style={styles.contactItem}>
          <Text style={styles.contactText}>agronet@email.com</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactText}>Telefone 1: (28) 99944-5566</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactText}>Telefone 2: (28) 99911-2233</Text>
        </View>

        {/* Ícones de Redes Sociais */}
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={handleWhatsApp}>
            <Image source={require('../../../../assets/icons/whats.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTelegram}>
            <Image source={require('../../../../assets/icons/telegram.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Rodapé fixado */}
      <Footer handleNavigation={navigation.navigate} />
    </View>
  );
};

export default Ajuda;
