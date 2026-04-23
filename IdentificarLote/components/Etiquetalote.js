import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Etiquetalote({ codigo, validade }) {
  return (
    <View style={styles.etiqueta}>
      <View style={styles.cabecalho}>
        <Text style={styles.cabecalhoTexto}>📦 LOTE DE PRODUÇÃO</Text>
      </View>

      <View style={styles.corpo}>
        <View style={styles.campo}>
          <Text style={styles.rotulo}>CÓDIGO DO LOTE</Text>
          <Text style={styles.valor}>{codigo}</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.campo}>
          <Text style={styles.rotulo}>VALIDADE</Text>
          <Text style={[styles.valor, styles.validade]}>{validade}</Text>
        </View>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>✅ Rastreabilidade Industrial</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  etiqueta: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  cabecalho: {
    backgroundColor: "#1E40AF",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  cabecalhoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
    letterSpacing: 1.5,
  },

  corpo: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  campo: {
    flex: 1,
    alignItems: "center",
  },

  rotulo: {
    fontSize: 10,
    color: "#94A3B8",
    fontWeight: "600",
    letterSpacing: 1.2,
    marginBottom: 4,
  },

  valor: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E293B",
    letterSpacing: 1,
  },

  validade: {
    color: "#DC2626",
  },

  divisor: {
    width: 1,
    height: 40,
    backgroundColor: "#E2E8F0",
    marginHorizontal: 12,
  },

  rodape: {
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#DBEAFE",
  },

  rodapeTexto: {
    fontSize: 11,
    color: "#2563EB",
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
