import { FlatList, ActivityIndicator, RefreshControl, Text } from 'react-native';
import Card from '../../components/Card';
import { useParse } from '../../hooks/useParse';
import { theme } from '../../constants/theme';

export default function Profissional() {
  const { dados, loading, erro, recarregar } = useParse<any>('ExperienciaProfissional');

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
          {erro ? `Erro: ${erro}` : 'Nenhuma experiência cadastrada.'}
        </Text>
      }
      renderItem={({ item }) => (
        <Card
          titulo={item.cargo}
          subtitulo={item.empresa}
          periodo={item.periodo}
          descricao={item.descricao}
        />
      )}
    />
  );
}