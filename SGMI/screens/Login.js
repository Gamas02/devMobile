import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity,
    StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform,
} from 'react-native';
import { colors, typography, spacing, radius } from '../style/theme';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.safe}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <View style={styles.header}>
                    <Text style={styles.logo}>⚙️</Text>
                    <Text style={styles.title}>MachineOps</Text>
                    <Text style={styles.subtitle}>Gestão de equipamentos industriais</Text>
                </View>

                <View style={styles.form}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="seu@email.com"
                        placeholderTextColor={colors.textMuted}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="••••••••"
                        placeholderTextColor={colors.textMuted}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity
                        style={styles.btn}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Dashboard')}
                    >
                        <Text style={styles.btnText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: colors.bg },
    container: { flex: 1, justifyContent: 'center', paddingHorizontal: spacing.lg },
    header: { alignItems: 'center', marginBottom: 40 },
    logo: { fontSize: 48, marginBottom: 12 },
    title: { fontSize: 28, fontWeight: '700', color: colors.text, letterSpacing: -0.5 },
    subtitle: { fontSize: 13, color: colors.textMuted, marginTop: 4, textAlign: 'center' },
    form: { gap: 8 },
    label: { fontSize: 13, fontWeight: '500', color: colors.textSecondary, marginBottom: 2, marginTop: 8 },
    input: {
        backgroundColor: colors.card,
        borderRadius: radius.md,
        borderWidth: 0.5,
        borderColor: colors.border,
        paddingHorizontal: 14,
        paddingVertical: 13,
        fontSize: 15,
        color: colors.text,
    },
    btn: {
        backgroundColor: colors.primary,
        borderRadius: radius.md,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 20,
    },
    btnText: { color: '#fff', fontSize: 15, fontWeight: '600' },
});