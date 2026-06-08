import { useSEO as baseUseSEO } from '../../components/ui/useSEO';
import { COMPANY_INFO } from '../../data/content';

export function useSEO(title: string, description: string) {
  return baseUseSEO(title, description, COMPANY_INFO.name);
}

