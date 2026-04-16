import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import { Touchable, TouchableOpacity, Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [estado, setEstado] = useState("false");

  const alternarEstado = () => {
    if (estado === "desligado") setEstado("ativo");
    else if (estado === "ativo") setEstado("manutencao");
    else setEstado("desligado");
  };

  const colorStatus = () => {
    if (estado === "ativo") return "green";
    if (estado === "manutencao") return "orange";
    if (estado === "desligado") return "red";
    return "gray";
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://tse4.mm.bing.net/th/id/OIP.Fwg8ujR1hr6KMiZh0nMuuQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        }}
        style={{ width: 100, height: 100 }}
      />

      <Text>Máquina:</Text>
      <Text>Prensa Hidráulica</Text>

      <Text style={{ color: colorStatus(), fontWeight: "bold" }}>
        Status: {estado}
      </Text>

      <View>
        <TouchableOpacity onPress={alternarEstado} style={styles.button}>
          <Text style={styles.buttonText}>Alterar estado</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3, // sombra Android
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
