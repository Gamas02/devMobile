import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [valorC, setValorC] = useState('')
  const [valorF, setValorF] = useState('')

  const converter = () => {
    const conversor = (parseFloat(valorC.replace(',','.')) * 1.8) + 32
    setValorF(conversor.toFixed(2))
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>🌡 TempSwap</Text>
      <Text style={styles.subtitle}>
        Conversor de Celsius para Fahrenheit
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Digite a temperatura em Celsius
        </Text>

        <TextInput
          style={styles.input}
          placeholder='0 °C'
          value={valorC}
          onChangeText={setValorC}
          keyboardType='numeric'
        />

        <TouchableOpacity style={styles.button} onPress={converter}>
          <Text style={styles.buttonText}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.result}>
          {valorF !== '' ? `${valorF} °F` : ''}
        </Text>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#4f46e5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5
  },

  subtitle: {
    fontSize: 16,
    color: '#e0e7ff',
    marginBottom: 30,
    textAlign: 'center'
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5
  },

  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 18,
    marginBottom: 20
  },

  button: {
    backgroundColor: '#4f46e5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  result: {
    marginTop: 25,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111'
  }

});