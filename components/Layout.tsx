import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Menu from "./Menu";
const Layout = ({ children }:{children:React.ReactNode}) => {
  return (
    <View style={styles.flexniTo}>
      <View style={styles.menu}>
        <Menu />
      </View>
      <View style={styles.obsah}>
        <View style={{ padding: 20 }}>
          <Image
            style={{ alignSelf: "flex-end" }}
            source={require("../assets/toprightlogo.jpg")}
          />
        </View>
        {children}
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  flexniTo: {
    flex: 2,
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  menu: {
    width: "20%",
  },
  obsah: {
    width: "80%",
    backgroundColor: "white",
  },
});
