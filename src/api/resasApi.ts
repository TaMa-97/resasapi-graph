import apiRequest from './apiUtils';
import { Prefecture, PopulationComposition } from '@/types/ResasApiTypes';

interface PrefecturesResponse {
  result: Prefecture[];
}

/**
 * 都道府県リスト取得API
 */
export async function fetchPrefectures(): Promise<Prefecture[]> {
  const endpoint = '/api/v1/prefectures';
  const response = await apiRequest<PrefecturesResponse>(endpoint, {
    method: 'GET',
  });
  return response.result;
}

/**
 * 都道府県人口構成取得API
 * @param {number} prefCode : 都道府県コード
 */
export async function fetchPopulationComposition(
  prefCode: number,
): Promise<PopulationComposition> {
  const endpoint = `/api/v1/population/composition/perYear?prefCode=${prefCode}`;
  return apiRequest<PopulationComposition>(endpoint, { method: 'GET' });
}
