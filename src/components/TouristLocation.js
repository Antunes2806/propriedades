import { Image, View, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Tourist({
  TextoTourist,
  Textoendereco,
  Textodescricao,
  style,
  style1,
  style2,
  style3,
  caminhoimg,
}) {
  return (
    <View>
      <Text style={style}>{TextoTourist}</Text>
      <Text style={style1}>{Textoendereco}</Text>
      <Image source={caminhoimg} style={style3} />
      <Text style={style2}>{Textodescricao}</Text>
    </View>
  );
}
