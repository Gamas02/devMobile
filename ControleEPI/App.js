import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, ScrollView,
  SectionList, ActivityIndicator
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [episAgrupados, setEpisAgrupados] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const dados = [
        {
          title: 'Proteção da Cabeça',
          data: [
            { nome: 'Capacete de Segurança', descricao: 'Proteção contra impactos e quedas de objetos em obras e indústrias.' },
            { nome: 'Protetor Facial', descricao: 'Escudo de policarbonato contra respingos químicos e faíscas.' },
          ],
        },
        {
          title: 'Proteção dos Olhos',
          data: [
            { nome: 'Óculos de Proteção', descricao: 'Lente policarbonato antirrisco, protege contra partículas e radiação UV.' },
            { nome: 'Óculos Ampla Visão', descricao: 'Vedação total contra gases, vapores e respingos de líquidos.' },
          ],
        },
        {
          title: 'Proteção Auditiva',
          data: [
            { nome: 'Protetor Auricular Concha', descricao: 'Atenuação de 28 dB para ambientes com ruído acima de 85 dB.' },
            { nome: 'Protetor Auricular Plug', descricao: 'Espuma moldável de inserção, atenuação de 20 dB, uso contínuo.' },
          ],
        },
        {
          title: 'Proteção das Mãos',
          data: [
            { nome: 'Luvas de Borracha Nitrílica', descricao: 'Proteção química e mecânica para manuseio de materiais perigosos.' },
            { nome: 'Luvas de Raspa de Couro', descricao: 'Proteção térmica e mecânica para soldagem e corte.' },
          ],
        },
        {
          title: 'Proteção dos Pés',
          data: [
            { nome: 'Bota de Segurança com Biqueira', descricao: 'Biqueira de aço e solado antiderrapante contra perfurações.' },
            { nome: 'Botina de Couro', descricao: 'Proteção contra impactos, umidade e agentes químicos no piso.' },
          ],
        },
        {
          title: 'Proteção Respiratória',
          data: [
            { nome: 'Máscara PFF2 / N95', descricao: 'Proteção contra poeiras, névoas, fumos e agentes biológicos.' },
            { nome: 'Respirador Semifacial', descricao: 'Com filtro combinado para vapores orgânicos e partículas sólidas.' },
          ],
        },
      ];
      setEpisAgrupados(dados);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        {/* ScrollView para cabeçalho fixo com aviso */}
        <ScrollView style={styles.headerArea}>
          <Text style={styles.title}>Catálogo de EPIs</Text>
          <Text style={styles.warning}>
            Atenção: Todo estagiário deve consultar e utilizar os EPIs indicados antes de acessar a área de produção.
          </Text>
        </ScrollView>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#e30613" />
            <Text>Carregando catálogo de EPIs...</Text>
          </View>
        ) : (
          /* SectionList para EPIs agrupados por categoria */
          <SectionList
            sections={episAgrupados}
            keyExtractor={(item, index) => item.nome + index}
            renderItem={({ item }) => (
              <View style={styles.itemCard}>
                <Text style={styles.itemNome}>{item.nome}</Text>
                <Text style={styles.itemDescricao}>{item.descricao}</Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.headerSection}>
                <Text style={styles.headerText}>{title}</Text>
              </View>
            )}
            stickySectionHeadersEnabled={true} // Cabeçalho "gruda" no topo ao rolar
          />
        )}

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  headerArea: { padding: 15, backgroundColor: '#fff', maxHeight: 120 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#e30613' },
  warning: { color: '#666', fontSize: 13, fontStyle: 'italic' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  headerSection: {
    backgroundColor: '#004a8e', // Azul SENAI
    padding: 10,
    justifyContent: 'center',
  },
  headerText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  itemCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemNome: { fontSize: 15, fontWeight: 'bold', color: '#1a1a1a' },
  itemDescricao: { fontSize: 13, color: '#666', marginTop: 3 },
});
