import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, ScrollView,
    StyleSheet, SafeAreaView, Alert, KeyboardAvoidingView, Platform,
} from 'react-native';
import { colors, radius } from '../style/theme';

const ESTADOS = ['Operando', 'Manutenção', 'Inativo'];
const OCORRENCIAS = ['Vibração excessiva', 'Superaquecimento', 'Erro de software', 'Falha mecânica', 'Falha elétrica', 'Sem ocorrências'];

const estadoColor = {
    Operando: { bg: '#E8F5E9', text: '#2E7D32', border: '#A5D6A7' },
    Manutenção: { bg: '#FFF8E1', text: '#F57F17', border: '#FFE082' },
    Inativo: { bg: '#FCEAEA', text: '#C62828', border: '#EF9A9A' },
};

export default function Forms({ route, navigation }) {
    const { machine } = route.params;
    const [estado, setEstado] = useState('');
    const [ocorrencia, setOcorrencia] = useState('');
    const [observacao, setObservacao] = useState('');

    const handleEnviar = () => {
        if (!estado || !ocorrencia) {
            Alert.alert('Campos obrigatórios', 'Selecione o estado e a ocorrência antes de enviar.');
            return;
        }
        Alert.alert(
            'Relatório enviado ✅',
            `Estado de "${machine.name}" reportado com sucesso.`,
            [{ text: 'OK', onPress: () => navigation.navigate('Dashboard') }]
        );
    };

    return (
        <SafeAreaView style={styles.safe}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

                    {/* Header */}
                    <View style={styles.headerRow}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                            <Text style={styles.backIcon}>‹</Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}>Reportar estado</Text>
                            <Text style={styles.machineName}>{machine.name}</Text>
                        </View>
                    </View>

                    {/* Estado atual */}
                    <Text style={styles.sectionLabel}>Estado atual da máquina</Text>
                    <View style={styles.optionsRow}>
                        {ESTADOS.map((e) => {
                            const sc = estadoColor[e];
                            const active = estado === e;
                            return (
                                <TouchableOpacity
                                    key={e}
                                    style={[styles.estadoBtn, { borderColor: sc.border }, active && { backgroundColor: sc.bg }]}
                                    onPress={() => setEstado(e)}
                                    activeOpacity={0.7}
                                >
                                    <Text style={[styles.estadoText, { color: active ? sc.text : colors.textMuted }]}>{e}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    {/* Ocorrência */}
                    <Text style={styles.sectionLabel}>Ocorrência observada</Text>
                    <View style={styles.chipGroup}>
                        {OCORRENCIAS.map((o) => (
                            <TouchableOpacity
                                key={o}
                                style={[styles.chip, ocorrencia === o && styles.chipSelected]}
                                onPress={() => setOcorrencia(o)}
                                activeOpacity={0.7}
                            >
                                <Text style={[styles.chipText, ocorrencia === o && styles.chipTextSelected]}>{o}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Observação */}
                    <Text style={styles.sectionLabel}>Observações adicionais</Text>
                    <TextInput
                        style={styles.textarea}
                        placeholder="Descreva o que foi observado durante a operação..."
                        placeholderTextColor={colors.textMuted}
                        multiline
                        numberOfLines={5}
                        textAlignVertical="top"
                        value={observacao}
                        onChangeText={setObservacao}
                    />

                    <TouchableOpacity style={styles.sendBtn} onPress={handleEnviar} activeOpacity={0.8}>
                        <Text style={styles.sendText}>Enviar relatório</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: colors.bg },
    scroll: { padding: 20, gap: 14 },
    headerRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 8 },
    backBtn: {
        width: 36, height: 36, borderRadius: 18,
        backgroundColor: colors.card, borderWidth: 0.5, borderColor: colors.border,
        alignItems: 'center', justifyContent: 'center',
    },
    backIcon: { fontSize: 22, color: colors.text, lineHeight: 28 },
    title: { fontSize: 20, fontWeight: '700', color: colors.text },
    machineName: { fontSize: 12, color: colors.textMuted, marginTop: 1 },
    sectionLabel: {
        fontSize: 12, fontWeight: '600', color: colors.textSecondary,
        textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 6,
    },
    optionsRow: { flexDirection: 'row', gap: 8 },
    estadoBtn: {
        flex: 1, paddingVertical: 10, borderRadius: radius.md,
        borderWidth: 1, alignItems: 'center', backgroundColor: colors.card,
    },
    estadoText: { fontSize: 12, fontWeight: '500' },
    chipGroup: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
    chip: {
        paddingHorizontal: 14, paddingVertical: 8,
        borderRadius: 20, borderWidth: 0.5, borderColor: colors.border,
        backgroundColor: colors.card,
    },
    chipSelected: { backgroundColor: colors.primary, borderColor: colors.primary },
    chipText: { fontSize: 13, color: colors.textSecondary },
    chipTextSelected: { color: '#fff', fontWeight: '600' },
    textarea: {
        backgroundColor: colors.card, borderRadius: radius.md,
        borderWidth: 0.5, borderColor: colors.border,
        padding: 14, fontSize: 14, color: colors.text, minHeight: 120,
    },
    sendBtn: {
        backgroundColor: colors.primary, borderRadius: radius.md,
        paddingVertical: 14, alignItems: 'center', marginTop: 8,
    },
    sendText: { color: '#fff', fontSize: 15, fontWeight: '600' },
});