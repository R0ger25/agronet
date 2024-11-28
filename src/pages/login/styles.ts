// src/pages/login/styles.ts
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Pegando as dimensões da tela

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121826", // Cor de fundo da tela
    justifyContent: "flex-start", // Coloca os elementos no topo da tela
    alignItems: "center", // Centraliza os elementos horizontalmente
    paddingTop: height * 0.1, // Espaço para a logo no topo
    paddingHorizontal: 20, // Adiciona espaçamento nas laterais
  },
  logo: {
    width: width * 0.6, // Logo ocupa 60% da largura da tela
    height: height * 0.2, // Logo ocupa 20% da altura da tela
    marginBottom: 40, // Espaço entre a logo e o formulário
  },
  loginContainer: {
    width: width * 0.9, // Formulário ocupa 80% da largura da tela
    maxWidth: 400, // Limita a largura máxima para 400px
    padding: 20,
    backgroundColor: "#2C3E50",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20, // Espaço entre o formulário e o botão de cadastro
  },
  label: {
    color: "#E0E0E0", // Cor das labels
    fontSize: 16,
    marginBottom: 5,
    textAlign: "left", // Alinha as labels à esquerda
    width: "100%", // Garante que a label ocupe toda a largura
  },
  input: {
    width: width * 0.8, // Campos de texto ocupam 80% da largura da tela
    height: 50, // Tamanho fixo da altura do campo
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: "#4A4A4A",
    color: "#E0E0E0",
    textAlign: "center", // Centraliza o texto dentro do campo
  },
  button: {
    width: width * 0.8, // Botão ocupa 80% da largura da tela
    height: 50, // Altura fixa para o botão
    backgroundColor: "#1DD1A1",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  registerText: {
    color: "#E0E0E0",
    marginTop: 10,
  },
  registerLink: {
    color: "#1DD1A1",
    fontWeight: "bold",
  },
});
