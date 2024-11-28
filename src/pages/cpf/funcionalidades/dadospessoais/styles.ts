import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2c",
    justifyContent: "flex-start",
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: "#1db954",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  profileContainer: {
    flex: 1,
    gap: 10,
  },
  profileItem: {
    backgroundColor: "#2c2f48",
    color: "#ccc",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    textAlign: "center",
  },
  profileText: {
    color: "#ccc",
  },
  profileLink: {
    backgroundColor: "#1db954",
    color: "#000",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  profileLinkText: {
    color: "#000",
  },
  logout: {
    backgroundColor: "red", // Remova qualquer fundo que possa interferir no layout
  },
});

export default styles;