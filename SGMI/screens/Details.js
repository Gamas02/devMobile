import React from 'react';
import {
    View, Text, Image, ScrollView,
    TouchableOpacity, StyleSheet, SafeAreaView,
} from 'react-native';
import { colors, radius } from '../style/theme';

const statusColor = {
    Operando: { bg: '#E8F5E9', text: '#2E7D32' },
    Manutenção: { bg: '#FFF8E1', text: '#F57F17' },
    Inativo: { bg: '#FCEAEA', text: '#C62828' },
};

export default function Details({ route, navigation }) {
    const { machine } = route.params;
    const sc = statusColor[machine.status];

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Image source={{ uri: machine.image }} style={styles.image} />

                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Text style={styles.backIcon}>‹</Text>
                </TouchableOpacity>

                <View style={styles.content}>
                    <View style={styles.row}>
                        <Text style={styles.name}>{machine.name}</Text>
                        <View style={[styles.badge, { backgroundColor: sc.bg }]}>
                            <Text style={[styles.badgeText, { color: sc.text }]}>{machine.status}</Text>
                        </View>
                    </View>

                    <Text style={styles.location}>📍 {machine.location}</Text>

                    <View style={styles.divider} />

                    <Text style={styles.sectionLabel}>Sobre o equipamento</Text>
                    <Text style={styles.description}>{machine.description}</Text>

                    <View style={styles.divider} />

                    <TouchableOpacity
                        style={styles.reportBtn}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Forms', { machine })}
                    >
                        <Text style={styles.reportIcon}>⚠️</Text>
                        <Text style={styles.reportText}>Reportar estado da máquina</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: colors.bg },
    image: { width: '100%', height: 240, backgroundColor: colors.border },
    backBtn: {
        position: 'absolute', top: 48, left: 16,
        backgroundColor: 'rgba(0,0,0,0.45)',
        borderRadius: 20, width: 36, height: 36,
        alignItems: 'center', justifyContent: 'center',
    },
    backIcon: { color: '#fff', fontSize: 22, lineHeight: 28 },
    content: { padding: 20, gap: 12 },
    row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    name: { fontSize: 20, fontWeight: '700', color: colors.text, flex: 1, marginRight: 8 },
    badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
    badgeText: { fontSize: 11, fontWeight: '600' },
    location: { fontSize: 13, color: colors.textMuted },
    divider: { height: 0.5, backgroundColor: colors.border, marginVertical: 4 },
    sectionLabel: {
        fontSize: 12, fontWeight: '600', color: colors.textSecondary,
        textTransform: 'uppercase', letterSpacing: 0.5,
    },
    description: { fontSize: 15, lineHeight: 24, color: colors.textSecondary },
    reportBtn: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
        backgroundColor: '#FFF3F3',
        borderWidth: 1, borderColor: '#FFCDD2',
        borderRadius: radius.md, paddingVertical: 14, marginTop: 8,
    },
    reportIcon: { fontSize: 18 },
    reportText: { fontSize: 14, fontWeight: '600', color: '#C62828' },
});