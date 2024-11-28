import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../../components/Footer";
import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();

  // Navegação para diferentes telas
  const handleNavigation = (screen: string) => {
    navigation.navigate(screen as never); // Ajuste para evitar problemas de tipagem
  };

  return (
    <View style={styles.mainContainer}>
      {/* Botão de voltar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>⬅️</Text>
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Funcionalidades</Text>

      {/* Botões de funcionalidades */}
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.functionButton}
          onPress={() => handleNavigation("ComprarInsumo")}
        >
          <Image
            source={require("../../../assets/icons/insumo.png")}
            style={styles.icon}
          />
          <Text style={styles.functionText}>Comprar Insumo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.functionButton}
          onPress={() => handleNavigation("Ofertas")}
        >
          <Image
            source={require("../../../assets/icons/ofertas.png")}
            style={styles.icon}
          />
          <Text style={styles.functionText}>Ofertas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.functionButton}
          onPress={() => handleNavigation("MeusPedidos")}
        >
          <Image
            source={require("../../../assets/icons/pedidos.png")}
            style={styles.icon}
          />
          <Text style={styles.functionText}>Meus Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.functionButton}
          onPress={() => handleNavigation("Carrinho")}
        >
          <Image
            source={require("../../../assets/icons/carrinho.png")}
            style={styles.icon}
          />
          <Text style={styles.functionText}>Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.functionButton}
          onPress={() => handleNavigation("Favoritos")}
        >
          <Image
            source={require("../../../assets/icons/favoritos.png")}
            style={styles.icon}
          />
          <Text style={styles.functionText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.functionButton}
          onPress={() => handleNavigation("Ajuda")}
        >
          <Image
            source={require("../../../assets/icons/ajuda.png")}
            style={styles.icon}
          />
          <Text style={styles.functionText}>Ajuda</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Rodapé */}
      <Footer handleNavigation={handleNavigation} />
    </View>
  );
}
