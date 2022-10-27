import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../components/Layout";
const Indikace = () => {
  const [showComponent, setShowComponent] = useState(false);
  const {
    double,
    lesser,
    bigger,
    mainColor,
    sizeOfFont,
    bold,
    grey,
    nadpis,
  } = styles;
  return (
    <Layout>
      <Text style={{ marginTop: 30 }}></Text>
      <View style={double}>
        <Text style={[lesser, mainColor, sizeOfFont, bold, nadpis]}>1)</Text>
        <View style={bigger}>
          <Text style={[mainColor, sizeOfFont, bold, nadpis]}>
            Léčba periferní neuropatické bolesti{"\n"}u dospělých
          </Text>
          <Text style={{ marginTop: 10 }}></Text>
          <Text style={[grey, sizeOfFont]}>
            <Text style={bold}>G63.2</Text> Polyneuropatie diabetická
          </Text>
          <Text style={[grey, sizeOfFont]}>
            <Text style={bold}>G62.9</Text> Polyneuropatie NS
          </Text>
          <Text style={[grey, sizeOfFont]}>
            <Text style={bold}>G53.0</Text> Neuralgie po Herpes zoster
          </Text>
        </View>
      </View>
      {
        //Další blok
      }
      <Text style={{ marginTop: 30 }}></Text>
      <View style={double}>
        <Text style={[lesser, mainColor, sizeOfFont, bold, nadpis]}>2)</Text>
        <View style={bigger}>
          <Text
            style={[mainColor, sizeOfFont, bold, nadpis]}
            onPress={() => {
              setShowComponent(!showComponent);
            }}
          >
            Epilepsie
          </Text>
          {showComponent ? (
            <View>
              <Text style={{ marginTop: 1 }}></Text>
              <Text style={[grey, sizeOfFont]}>
                - <Text style={bold}>přídatná léčba</Text> při léčbě parciálních
                záchvatů se sekundární generalizací i bez ní{" "}
                <Text style={bold}>u dospělých a dětí ve věku 6 let</Text> a
                starších
              </Text>
              <Text style={{ marginTop: 1 }}></Text>
              <Text style={[grey, sizeOfFont]}>
                - <Text style={bold}>monoterapie</Text> při léčbě parciálních
                záchvatů se sekundární generalizace i bez ní{" "}
                <Text style={bold}>
                  u dospělých a mladistvých ve věku 12 let a starších
                </Text>
                .
              </Text>
            </View>
          ) : (
            <Text></Text>
          )}
        </View>
      </View>
    </Layout>
  );
};

export default Indikace;
const styles = StyleSheet.create({
  double: {
    display: "flex",
    flexDirection: "row",
  },
  lesser: {
    flex: 2,
  },
  bigger: {
    flex: 10,
  },
  mainColor: {
    color: "#CF0404",
  },
  sizeOfFont: {
    fontSize: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  grey: {
    color: "grey",
    maxWidth: "95%",
  },
  nadpis: {
    fontSize: 35,
  },
});
