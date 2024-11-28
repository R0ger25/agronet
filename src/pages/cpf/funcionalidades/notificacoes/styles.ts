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
  notificationContainer: {
    flex: 1,
    gap: 30,
  },
  notificationItem: {
    backgroundColor: "#2c2f48",
    color: "#ccc",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  notificationText: {
    color: "#ccc",
  },
});

export default styles;
