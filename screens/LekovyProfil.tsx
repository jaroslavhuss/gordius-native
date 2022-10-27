import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../components/Layout";
const LekovyProfil = () => {
  const { mainColor, sizeOfFont, bold, grey, nadpis } = styles;
  return (
    <Layout>
      <Text style={{ marginTop: 30 }}></Text>

      <View>
        <Text style={[mainColor, sizeOfFont, bold, nadpis]}>
          - 60% Biologická dostupnost
        </Text>

        <Text style={[mainColor, sizeOfFont, bold, nadpis]}>
          - Velmi dobrá snášenlivost
        </Text>
        <Text style={[grey, sizeOfFont]}>
          {"       "}- nejčastější NÚ: somnolence, vertigo, nauzea
        </Text>

        <Text style={[mainColor, sizeOfFont, bold, nadpis]}>
          - Min. lékových interakcí
        </Text>
        <Text style={[grey, sizeOfFont]}>
          {"       "}- není metabolizován, vylučuje se ledvinami
        </Text>
        <Text style={[mainColor, sizeOfFont, bold, nadpis]}>
          - Příznivý vliv na kvalitu spánku a emoční ladění
        </Text>
      
        <Text style={[mainColor, sizeOfFont, bold, nadpis]}>
            - Využití u neuropsychiatrických poruch
          </Text>
      
          <Text style={[grey, sizeOfFont]}>
            {"         "}- syndrom neklidných nohou
          </Text>
          <Text style={[grey, sizeOfFont]}>
            {"         "}- profylaxe migrény
          </Text>
          <Text style={[grey, sizeOfFont]}>
            {"         "}- tremor
          </Text>
          <Text style={[grey, sizeOfFont]}>
            {"         "}- abstinenční syndrom
          </Text>
   
      </View>
    </Layout>
  );
};

export default LekovyProfil;
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
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  grey: {
    color: "grey",
    maxWidth: "95%",
  },
  nadpis: {
    fontSize: 30,
    margin: 20,
  },
});
