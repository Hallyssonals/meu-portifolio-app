import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

const techs = [
  ['React Native + Expo', 'Base do aplicativo'],
  ['Expo Router', 'Navegação entre telas'],
  ['Parse SDK + Back4App', 'Back-end e banco de dados'],
  ['expo-linear-gradient', 'Gradientes no visual'],
  ['expo-image', 'Exibição otimizada de imagens'],
  ['@expo/vector-icons', 'Ícones'],
  ['AsyncStorage', 'Persistência local / cache'],
  ['EAS Update', 'Publicação over-the-air'],
];

export default function Sobre() {
  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ padding: 20 }}>
      <Text style={s.h}>Tecnologias e módulos</Text>
      {techs.map(([n, d]) => (
        <View key={n} style={s.item}>
          <Text style={s.nome}>{n}</Text>
          <Text style={s.desc}>{d}</Text>
        </View>
      ))}
      <Text style={s.h}>Funcionalidade extra</Text>
      <Text style={s.desc}>Descreva aqui a funcionalidade extra que você implementou.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  h: { color: theme.accent, fontSize: 22, fontWeight: '800', marginVertical: 12 },
  item: { backgroundColor: theme.card, padding: 14, borderRadius: 12, marginBottom: 8 },
  nome: { color: theme.text, fontWeight: '700' },
  desc: { color: theme.muted, marginTop: 2 },
});