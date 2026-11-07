import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Pressable,
  Linking,
  StyleSheet,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useParse } from '../../hooks/useParse';
import { theme } from '../../constants/theme';

export default function Projetos() {
  const { dados, loading, erro, recarregar } = useParse<any>('Projeto');

  if (loading && !dados.length) {
    return (
      <ActivityIndicator
        style={{ flex: 1, backgroundColor: theme.bg }}
        color={theme.accent}
      />
    );
  }

  return (
    <FlatList
      style={{ backgroundColor: theme.bg }}
      contentContainerStyle={{ padding: 20 }}
      data={dados}
      keyExtractor={(i) => i.id}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={recarregar}
          tintColor={theme.accent}
        />
      }
      ListEmptyComponent={
        <Text style={{ color: theme.muted, textAlign: 'center', marginTop: 40 }}>
          {erro ? `Erro: ${erro}` : 'Nenhum projeto cadastrado.'}
        </Text>
      }
      renderItem={({ item }) => (
        <View style={s.card}>
          {item.imagem ? (
            <Image source={{ uri: item.imagem }} style={s.imagem} contentFit="cover" />
          ) : null}

          <View style={s.corpo}>
            <Text style={s.titulo}>{item.titulo}</Text>
            {item.tecnologias ? <Text style={s.tech}>{item.tecnologias}</Text> : null}
            <Text style={s.desc}>{item.descricao}</Text>

            {item.link ? (
              <Pressable style={s.btn} onPress={() => Linking.openURL(item.link)}>
                <Ionicons name="logo-github" size={18} color={theme.bg} />
                <Text style={s.btnTxt}>Ver projeto</Text>
              </Pressable>
            ) : null}
          </View>
        </View>
      )}
    />
  );
}

const s = StyleSheet.create({
  card: {
    backgroundColor: theme.card,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  imagem: { width: '100%', height: 160 },
  corpo: { padding: 16 },
  titulo: { color: theme.text, fontSize: 18, fontWeight: '700' },
  tech: { color: theme.accent, marginTop: 4, fontWeight: '600', fontSize: 13 },
  desc: { color: theme.text, marginTop: 8, lineHeight: 20 },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: theme.accent,
    padding: 12,
    borderRadius: 12,
    marginTop: 14,
  },
  btnTxt: { color: theme.bg, fontWeight: '700' },
});