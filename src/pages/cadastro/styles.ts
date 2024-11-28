import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Pegando as dimensões da tela

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121826",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "transparent",
    fontSize: 24,
    color: "#1DD1A1",
  },
  backButtonText: {
    color: "#1DD1A1",
    fontSize: 24,
  },
  logo: {
    width: width * 0.75,
    height: height * 0.2,
    marginBottom: 40,
  },
  loginContainer: {
    width: width * 0.9,
    maxWidth: 400,
    padding: 20,
    backgroundColor: "#2C3E50",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 50,
  },
  label: {
    color: "#E0E0E0",
    fontSize: 16,
    marginBottom: 5,
    textAlign: "left",
    width: "100%",
  },
  input: {
    width: width * 0.8,
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: "#4A4A4A",
    color: "#E0E0E0",
    textAlign: "center",
  },
  button: {
    width: width * 0.8,
    height: 50,
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
});

export default styles;
