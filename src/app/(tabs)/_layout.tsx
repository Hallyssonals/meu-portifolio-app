import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import type { ColorValue } from 'react-native';
import { theme } from '../../constants/theme';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

const icone =
  (nome: IconName) =>
  ({ color, size }: { color: ColorValue; size: number }) => (
    <Ionicons name={nome} color={color as string} size={size} />
  );

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: theme.bg },
        headerTintColor: theme.text,
        tabBarStyle: { backgroundColor: theme.card, borderTopColor: theme.card },
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.muted,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: icone('home') }} />
      <Tabs.Screen name="sobre" options={{ title: 'Sobre', tabBarIcon: icone('information-circle') }} />
      <Tabs.Screen name="academica" options={{ title: 'Acadêmica', tabBarIcon: icone('school') }} />
      <Tabs.Screen name="profissional" options={{ title: 'Profissional', tabBarIcon: icone('briefcase') }} />
      <Tabs.Screen name="projetos" options={{ title: 'Projetos', tabBarIcon: icone('code-slash') }} />
    </Tabs>
  );
}