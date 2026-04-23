import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import EtiquetaLote from "./components/Etiquetalote";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerTitulo}>SMCI - Rastreabilidade</Text>
        <Text style={styles.headerSubtitulo}>Inspeção de Insumos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.conteudo}>
        <Text style={styles.secao}>Insumos Recebidos</Text>

        {/* Lote de polímero recebido */}
        <EtiquetaLote codigo="POL-2024-00847" validade="31/12/2025" />

        <EtiquetaLote codigo="POL-2024-00848" validade="28/02/2025" />

        <EtiquetaLote codigo="POL-2024-00901" validade="15/06/2026" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },

  header: {
    backgroundColor: "#1E40AF",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },

  headerTitulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  headerSubtitulo: {
    color: "#BFDBFE",
    fontSize: 13,
    marginTop: 2,
  },

  conteudo: {
    padding: 16,
  },

  secao: {
    fontSize: 12,
    fontWeight: "700",
    color: "#64748B",
    letterSpacing: 1.5,
    marginBottom: 12,
    textTransform: "uppercase",
  },
});
