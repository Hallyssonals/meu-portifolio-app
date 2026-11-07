import { FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import Card from '../../components/Card';
import { useParse } from '../../hooks/useParse';
import { theme } from '../../constants/theme';

export default function Academica() {
  const { dados, loading, recarregar } = useParse<any>('ExperienciaAcademica');
  if (loading && !dados.length) return <ActivityIndicator style={{ flex: 1, backgroundColor: theme.bg }} color={theme.accent} />;
  return (
    <FlatList
      style={{ backgroundColor: theme.bg }}
      contentContainerStyle={{ padding: 20 }}
      data={dados}
      keyExtractor={(i) => i.id}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={recarregar} tintColor={theme.accent} />}
      renderItem={({ item }) => (
        <Card titulo={item.curso} subtitulo={item.instituicao} periodo={item.periodo} descricao={item.descricao} />
      )}
    />
  );
}