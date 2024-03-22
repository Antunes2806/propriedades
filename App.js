import { View } from "react-native";
import { styles } from "./src/styles/StyleSheet";
import Tourist from "./src/components/TouristLocation";

export default function App() {
  return (
    <View style={styles.container}>
      <Tourist
        TextoTourist="Torre Effeil"
        style={styles.TextoTourist}
        //endereço
        Textoendereco="Endereço:Champs de Mars, no n.°5 da avenida Anatole de France, no 7.° arrondissement de Paris"
        style1={styles.Textoendereco}
        //img
        caminhoimg={require("./src/assets/images/torreeiffel.jpeg")}
        style3={styles.caminhoimg}
        //descrição
        Textodescricao="A Torre Eiffel possui 324 metros de altura e
         possui três níveis; A Torre Eiffel era considerada a estrutura mais 
         alto do mundo até o ano de 1930; Atualmente, a torre é a estrutura mais alta de Paris e a segunda da França."
        style2={styles.Textodescricao}
      />
      <Tourist />
    </View>
  );
}
