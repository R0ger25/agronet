import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importando o hook de navegação
import { StackNavigationProp } from '@react-navigation/stack'; // Importando o tipo de navegação
import { RootStackParamList } from "../../types"; // Importando os tipos
import styles from "./styles"; // Importando os estilos

type CadastroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cadastro'>;

export default function Cadastro() {
  const navigation = useNavigation<CadastroScreenNavigationProp>(); // Usando o hook com o tipo para a tela de Cadastro
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [senha, setSenha] = useState("");

  // Função de validação de CPF ou CNPJ
  const validarCPFouCNPJ = (input: string) => {
    const apenasDigitos = input.replace(/\D/g, "");
    setCpfCnpj(apenasDigitos);
    return apenasDigitos.length === 11 || apenasDigitos.length === 14;
  };

  // Função de redirecionamento após validação
  const redirectToLogin = () => {
    if (validarCPFouCNPJ(cpfCnpj)) {
      if (cpfCnpj.length === 11 || cpfCnpj.length === 14) {
        Alert.alert("Cadastro realizado com sucesso");
        navigation.navigate("Login"); // Navega para a tela de Login
      }
    } else {
      Alert.alert("Erro", "O CPF deve ter 11 dígitos ou o CNPJ deve ter 14 dígitos.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>⬅️</Text>
      </TouchableOpacity>

      {/* Logo */}
      <Image source={require("../../assets/logo/logo.png")} style={styles.logo} resizeMode="contain" />

      {/* Formulário de Cadastro */}
      <View style={styles.loginContainer}>
        <Text style={styles.label}>CPF/CNPJ:</Text>
        <TextInput
          style={styles.input}
          placeholder="Número do CPF ou CNPJ"
          placeholderTextColor="#ccc"
          value={cpfCnpj}
          onChangeText={validarCPFouCNPJ}
          keyboardType="numeric"
          maxLength={14}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={redirectToLogin}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
