import { View, Text, ScrollView, ActivityIndicator, StyleSheet, Pressable, Linking } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useParse } from '../../hooks/useParse';
import { theme } from '../../constants/theme';

export default function Home() {
  const { dados, loading } = useParse<any>('Perfil');
  const perfil = dados[0];

  if (loading) return <ActivityIndicator style={{ flex: 1, backgroundColor: theme.bg }} color={theme.accent} />;

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={s.container}>
      <LinearGradient colors={[theme.primary, theme.accent]} style={s.hero}>
        <Image source={{ uri: perfil?.foto }} style={s.foto} />
        <Text style={s.nome}>{perfil?.nome}</Text>
        <Text style={s.titulo}>{perfil?.titulo}</Text>
      </LinearGradient>

      <Text style={s.resumo}>{perfil?.resumo}</Text>

      <View style={s.links}>
        <Pressable style={s.btn} onPress={() => Linking.openURL(perfil?.github)}>
          <Text style={s.btnTxt}>GitHub</Text>
        </Pressable>
        <Pressable style={s.btn} onPress={() => Linking.openURL(perfil?.linkedin)}>
          <Text style={s.btnTxt}>LinkedIn</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  hero: { borderRadius: 24, padding: 24, alignItems: 'center' },
  foto: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: '#fff' },
  nome: { color: '#fff', fontSize: 26, fontWeight: '800', marginTop: 12 },
  titulo: { color: '#fff', fontSize: 16, opacity: 0.9 },
  resumo: { color: theme.text, fontSize: 16, lineHeight: 24, marginTop: 24 },
  links: { flexDirection: 'row', gap: 12, marginTop: 24 },
  btn: { flex: 1, backgroundColor: theme.card, padding: 14, borderRadius: 12, alignItems: 'center' },
  btnTxt: { color: theme.accent, fontWeight: '700' },
});