import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

export default function Card({ titulo, subtitulo, periodo, descricao }:
  { titulo: string; subtitulo?: string; periodo?: string; descricao?: string }) {
  return (
    <View style={s.card}>
      <Text style={s.titulo}>{titulo}</Text>
      {subtitulo && <Text style={s.sub}>{subtitulo}</Text>}
      {periodo && <Text style={s.periodo}>{periodo}</Text>}
      {descricao && <Text style={s.desc}>{descricao}</Text>}
    </View>
  );
}

const s = StyleSheet.create({
  card: { backgroundColor: theme.card, padding: 16, borderRadius: 16, marginBottom: 12,
          borderLeftWidth: 4, borderLeftColor: theme.primary },
  titulo: { color: theme.text, fontSize: 18, fontWeight: '700' },
  sub: { color: theme.accent, marginTop: 2, fontWeight: '600' },
  periodo: { color: theme.muted, fontSize: 12, marginTop: 2 },
  desc: { color: theme.text, marginTop: 8, lineHeight: 20 },
});