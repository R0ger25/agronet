import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles"; // Importando os estilos
import Footer from "../../../../components/Footer"; // Importe o rodapé, conforme feito anteriormente

interface PerfilProps {
  navigation: any;
}

const Perfil: React.FC<PerfilProps> = ({ navigation }) => {
  // Dados fictícios do perfil
  const userProfile = {
    nome: "Renan",
    cpf: "55*******72",
    telefone: "(28) 99999-9999",
  };

  // Função para navegação de volta
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>⬅️</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Dados Pessoais</Text>

      <ScrollView style={styles.profileContainer}>
        <View style={styles.profileItem}>
          <Text style={styles.profileText}>Nome Completo: {userProfile.nome}</Text>
        </View>
        <View style={styles.profileItem}>
          <Text style={styles.profileText}>CPF: {userProfile.cpf}</Text>
        </View>
        <View style={styles.profileItem}>
          <Text style={styles.profileText}>Telefone: {userProfile.telefone}</Text>
        </View>

        {/* Links clicáveis */}
        <TouchableOpacity
          onPress={() => navigation.navigate("EditarPerfil")}
          style={styles.profileLink}
        >
          <Text style={styles.profileLinkText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AlterarSenha")}
          style={styles.profileLink}
        >
          <Text style={styles.profileLinkText}>Alterar Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Notificacoes")}
          style={styles.profileLink}
        >
          <Text style={styles.profileLinkText}>Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MeusPedidos")}
          style={styles.profileLink}
        >
          <Text style={styles.profileLinkText}>Meus Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Favoritos")}
          style={styles.profileLink}
        >
          <Text style={styles.profileLinkText}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Carrinho")}
          style={styles.profileLink}
        >
          <Text style={styles.profileLinkText}>Carrinho</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Enderecos")}
          style={styles.profileLink}
        >
          <Text style={styles.profileLinkText}>Endereços</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Ajuda")}
          style={styles.profileLink}
        >
          <Text style={styles.profileLinkText}>Ajuda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={[styles.profileLink, styles.logout]}
        >
          <Text style={styles.profileLinkText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* Rodapé */}
      <Footer handleNavigation={navigation.navigate} />
    </View>
  );
};

export default Perfil;
