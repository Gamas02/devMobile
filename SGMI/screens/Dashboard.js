import React from 'react';
import {
    View, Text, Image, ScrollView,
    TouchableOpacity, StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import machines from '../components/MachineList';
import { colors, radius } from '../style/theme';

const statusColor = {
    Operando: { bg: '#E8F5E9', text: '#2E7D32' },
    Manutenção: { bg: '#FFF8E1', text: '#F57F17' },
    Inativo: { bg: '#FCEAEA', text: '#C62828' },
};

export default function Dashboard({ navigation }) {
    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.bg} />

            <View style={styles.header}>
                <Text style={styles.title}>Máquinas</Text>
                <Text style={styles.sub}>{machines.length} equipamentos cadastrados</Text>
            </View>

            <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
                {machines.map((machine) => {
                    const sc = statusColor[machine.status];
                    return (
                        <View key={machine.id} style={styles.card}>
                            <Image source={{ uri: machine.image }} style={styles.image} />
                            <View style={styles.cardBody}>
                                <View style={styles.row}>
                                    <Text style={styles.name}>{machine.name}</Text>
                                    <View style={[styles.badge, { backgroundColor: sc.bg }]}>
                                        <Text style={[styles.badgeText, { color: sc.text }]}>{machine.status}</Text>
                                    </View>
                                </View>
                                <Text style={styles.location}>📍 {machine.location}</Text>
                                <TouchableOpacity
                                    style={styles.btn}
                                    activeOpacity={0.75}
                                    onPress={() => navigation.navigate('Details', { machine })}
                                >
                                    <Text style={styles.btnText}>Ver detalhes</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: colors.bg },
    header: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 12 },
    title: { fontSize: 26, fontWeight: '700', color: colors.text, letterSpacing: -0.5 },
    sub: { fontSize: 13, color: colors.textMuted, marginTop: 2 },
    list: { padding: 16, gap: 14 },
    card: {
        backgroundColor: colors.card,
        borderRadius: radius.lg,
        borderWidth: 0.5,
        borderColor: colors.border,
        overflow: 'hidden',
    },
    image: { width: '100%', height: 160, backgroundColor: colors.bg },
    cardBody: { padding: 14, gap: 8 },
    row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    name: { fontSize: 15, fontWeight: '600', color: colors.text, flex: 1, marginRight: 8 },
    badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
    badgeText: { fontSize: 11, fontWeight: '600' },
    location: { fontSize: 12, color: colors.textMuted },
    btn: {
        backgroundColor: colors.primary,
        borderRadius: radius.md,
        paddingVertical: 11,
        alignItems: 'center',
        marginTop: 4,
    },
    btnText: { color: '#fff', fontSize: 13, fontWeight: '600' },
});