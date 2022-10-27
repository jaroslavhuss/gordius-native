import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Layout from "../components/Layout";
const Baleni = () => {
  const { mainColor, sizeOfFont, bold, grey, nadpis } = styles;
  return (
    <Layout>
      <Text style={{ marginTop: 30 }}></Text>
      <View>
        <Text>
          <Text style={[nadpis]}>
           
            <Text style={[bold, mainColor]}>Bez preskripčního omezení {"\n"}</Text> 
            <Text style={bold}>v
            indikaci</Text><Text style={[bold, mainColor]}> periferní neuropatická bolest</Text>
             {"\n"}
          </Text>
          <Text style={{ marginTop: 20 }}>{"\n"}</Text>
          <Text style={sizeOfFont}>
            {" "}
            - Přípravek{" "}
            <Text style={bold}>
              je hrazen v léčbě periferní neuropatické bolesti.
            </Text>
            {"\n"}
          </Text>
          <Text style={sizeOfFont}>
            {" "}
            - Přípravek je hrazen{" "}
            <Text style={bold}>
              na základě preskripce neurologa a psychiatra
            </Text>
            {" "}pro léčbu parciálních {"\n"}
          
          </Text>
          <Text style={[sizeOfFont]}>{"    "}záchvatů epilepsie se sekundární generalizací
            nebo bez ní.</Text>

          <Text
            style={{
              fontSize: 10,
              color: "grey",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            {"\n\n\n"}
            Zdroj: Rozhodnutí SÚKL. Sp. Zn. SUKLS101873/2014, č.j.
            sukl176811/2018, dne 29. 3. 2018, staženo z www.sukl.cz.
     
          </Text>
        </Text>
        <Image style={{resizeMode:"contain", width:820, marginTop:-120}} source={require("../assets/final_table.png")} />
    
       </View>
    </Layout>
  );
};

export default Baleni;
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
    fontSize: 35,
    margin: 20,
  },
});
