import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('SEU_APPLICATION_ID', 'SUA_JAVASCRIPT_KEY');
Parse.serverURL = 'https://parseapi.back4app.com/';

export async function buscarClasse(nome: string) {
  const query = new Parse.Query(nome);
  const resultados = await query.find();
  return resultados.map((r) => ({ id: r.id, ...r.toJSON() }));
}

export default Parse;