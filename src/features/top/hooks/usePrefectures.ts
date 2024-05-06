import { useEffect, useState } from 'react';
import { fetchPrefectures } from '@/api/resasApi';
import { Prefecture } from '@/types/ResasApiTypes';

/**
 * usePrefectures : 都道府県データ取得
 */
export function usePrefectures() {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    async function getPrefectures() {
      try {
        const data = await fetchPrefectures();
        // console.log('Prefectures:', data);
        setPrefectures(Array.isArray(data) ? data : []);
      } catch (error) {
        // console.error('Error fetching prefectures:', error);
        setPrefectures([]);
      }
    }

    getPrefectures();
  }, []); // 一度

  return prefectures;
}
