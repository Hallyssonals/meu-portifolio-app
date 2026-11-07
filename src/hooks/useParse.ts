import { useEffect, useState } from 'react';
import { buscarClasse } from '../services/parse';

export function useParse<T = any>(classe: string) {
  const [dados, setDados] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const carregar = async () => {
    try {
      setLoading(true);
      setDados((await buscarClasse(classe)) as T[]);
      setErro(null);
    } catch (e: any) {
      setErro(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { carregar(); }, []);
  return { dados, loading, erro, recarregar: carregar };
}