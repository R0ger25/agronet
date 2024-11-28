import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importando useNavigation
import { StackNavigationProp } from '@react-navigation/stack'; // Importando o tipo de navegação
import { RootStackParamList } from "../../types"; // Importando os tipos

import styles from "./styles";

// Tipando a navegação
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>(); // Usando o hook com tipo
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [senha, setSenha] = useState("");

  const validarCPFouCNPJ = (input: string) => {
    const apenasDigitos = input.replace(/\D/g, "");
    setCpfCnpj(apenasDigitos);
    return apenasDigitos.length === 11 || apenasDigitos.length === 14;
  };

  const redirectToHome = () => {
    if (validarCPFouCNPJ(cpfCnpj)) {
      if (cpfCnpj.length === 11 && senha.length != null) {
        Alert.alert("Login realizado com sucesso.");
        navigation.navigate("Funcionalidades");
      } else if (cpfCnpj.length === 14 && senha.length != null) {
        Alert.alert("Login realizado com sucesso.");
        //navigation.navigate("Funcionalidades");
      }
    } else {
      Alert.alert(
        "Erro",
        "O CPF deve ter 11 dígitos ou o CNPJ deve ter 14 dígitos."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.loginContainer}>
        <Text style={styles.label}>Login:</Text>
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

        <TouchableOpacity style={styles.button} onPress={redirectToHome}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Não tem uma conta?{" "}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate("Cadastro")} // Navegação para a tela de cadastro
          >
            Cadastre-se
          </Text>
        </Text>
      </View>
    </View>
  );
}
