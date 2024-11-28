import React from "react";
import { View, TouchableOpacity, Image, StyleSheet} from "react-native";

interface FooterProps {
  handleNavigation: (screen: string) => void;
}

const Footer: React.FC<FooterProps> = ({ handleNavigation }) => {
  return (
    <View style={styles.footer} >
      <TouchableOpacity onPress={() => handleNavigation("Home")}>
        <Image
          source={require("../assets/icons-rod/home.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation("ComprarInsumo")}>
        <Image
          source={require("../assets/icons-rod/insumo.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation("Notificacoes")}>
        <Image
          source={require("../assets/icons-rod/notificacoes.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation("Perfil")}>
        <Image
          source={require("../assets/icons-rod/dados.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 0,
    backgroundColor: "#1e1e2c",
    bottom: 0,
    width: "100%",
    },
    footerIcon: {
    width: 25,
    height: 25,
    },
});

export default Footer;
