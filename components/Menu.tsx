import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const Menu = () => {
  const {navigate}:{navigate:Function} = useNavigation();

  return (
    <View
      style={{ backgroundColor: "white", height: "100%", position: "relative" }}
    >
      <TouchableOpacity
        onPress={() => {
          navigate("HlavniStranka");
        }}
      >
        <Image source={require("../assets/jezek.jpg")} />
      </TouchableOpacity>
      <View style={styles.menuFlex}>
        <Text
          
          style={styles.menuItem}
          onPress={() => {
            navigate("Indikace");
          }}
        >
          <Text style={styles.item}>INDIKACE</Text>
        </Text>
        <Text
 
          style={styles.menuItem}
          onPress={() => {
          navigate("LekovyProfil");
          }}
        >
          <Text style={styles.item}>LÉKOVÝ PROFIL</Text>
        </Text>
        <Text
          
          style={styles.menuItem}
          onPress={() => {
            navigate("Davkovani");
          }}
        >
          <Text style={styles.item}>DÁVKOVÁNÍ</Text>
        </Text>
        <Text
    
          style={styles.menuItem}
          onPress={() => {
            navigate("Baleni");
          }}
        >
          <Text style={styles.item}>BALENÍ</Text>
        </Text>

        <Text

          style={styles.menuItem}
          onPress={() => {
            navigate("Spc");
          }}
        >
          {" "}
          <Text style={styles.item}>SPC</Text>
        </Text>
      </View>
      <Image
        style={styles.krabicka}
        source={require("../assets/krabicka_logo2.png")}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  krabicka:{
    resizeMode:"contain",
    flex:1,
    width:230
  },
  menuItem: {
    padding: 15,
    color: "white",
    textAlign: "left",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  menuFlex: {
    justifyContent: "space-around",
    marginTop: 80,
  },
  active: {
    color: "purple",
  },
  back: {
    width: "100%",
    height: "100%",
  },
  item: {
    color: "grey",
  },

});
