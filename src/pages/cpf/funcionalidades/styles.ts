import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: "#1e1e2c",
    flex: 1,
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
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 15,
  },
  functionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1db954",
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  functionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
