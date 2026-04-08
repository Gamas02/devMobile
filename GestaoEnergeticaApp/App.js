import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Switch } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [isLuzOn, setIsLuzOn] = useState(false);
  const [luz, setLuz] = useState(50);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: 'https://img.freepik.com/fotos-premium/edificio-vazio-de-um-grande-espaco-de-oficina-de-fabrica-interior-de-um-armazem-de-fundo_141345-5190.jpg' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.card}>

            <View style={styles.header}>
              <Text style={styles.title}>Controle de Luz</Text>
              <Switch
                value={isLuzOn}
                onValueChange={setIsLuzOn}
                trackColor={{ false: "#555", true: "#4cd137" }}
                thumbColor={isLuzOn ? "#fff" : "#ccc"}
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.content}>
              <Text style={styles.label}>
                Luminosidade: <Text style={styles.value}>{luz}%</Text>
              </Text>

              <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={0}
                maximumValue={100}
                value={luz}
                onValueChange={(value) => setLuz(Math.floor(value))}
                disabled={!isLuzOn}
                minimumTrackTintColor="#4cd137"
                maximumTrackTintColor="#999"
              />

              {!isLuzOn && (
                <View style={styles.warningBox}>
                  <Text style={styles.warningText}>
                    Ative o switch para controlar a luminosidade
                  </Text>
                </View>
              )}
            </View>

          </View>
        </View>
        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(20,20,20,0.9)',
    borderRadius: 20,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 15,
  },
  content: {},
  label: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 10,
  },
  value: {
    color: '#4cd137',
    fontWeight: 'bold',
  },
  warningBox: {
    marginTop: 15,
    padding: 10,
    backgroundColor: 'rgba(255, 77, 77, 0.1)',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#ff4d4d',
  },
  warningText: {
    color: '#ff4d4d',
    fontSize: 14,
  },
});