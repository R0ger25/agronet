import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles"; // Importando os estilos
import Footer from "../../../../components/Footer"; // Importe o rodapé, conforme feito anteriormente

interface NotificacoesProps {
  navigation: any;
}

const Notificacoes: React.FC<NotificacoesProps> = ({ navigation }) => {
  // Lista de notificações
  const notifications = [
    "Notificação 1: Verifique seu Email.",
    "Notificação 2",
    "Notificação 3",
    "Notificação 4",
    "Notificação 5",
  ];

  // Função para navegação de volta
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>⬅️</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Notificações</Text>

      <ScrollView style={styles.notificationContainer}>
        {notifications.map((notification, index) => (
          <View key={index} style={styles.notificationItem}>
            <Text style={styles.notificationText}>{notification}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Rodapé */}
      <Footer handleNavigation={navigation.navigate} />
    </View>
  );
};

export default Notificacoes;
