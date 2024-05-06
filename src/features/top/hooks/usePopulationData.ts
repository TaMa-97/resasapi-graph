import { useState } from 'react';
import { fetchPopulationComposition } from '@/api/resasApi';
import { PopulationData, PopulationCategory } from '@/types/ResasApiTypes';

/**
 * usePopulationData : 人口構成データ
 */
export function usePopulationData() {
  const [populationData, setPopulationData] = useState<{
    [key: number]: PopulationData[];
  }>({});

  /**
   * fetchPopulationData : 指定した都道府県の人口データを取得
   * @param {number} prefCode : 都道府県コード
   */
  const fetchPopulationData = async (prefCode: number) => {
    try {
      const composition = await fetchPopulationComposition(prefCode);
      // console.log(`人口構成 ${prefCode}:`, composition);
      const totalPopulation = composition.result.data.find(
        (category: PopulationCategory) => category.label === '総人口',
      );

      if (totalPopulation) {
        // console.log('総人口データ:', totalPopulation);
        setPopulationData((prevData) => ({
          ...prevData,
          [prefCode]: totalPopulation.data,
        }));
      }
    } catch (error) {
      console.error(`Error fetching ${prefCode}:`, error);
    }
  };

  /**
   * removePopulationData : 指定した都道府県の人口データを削除
   * @param {number} prefCode : 都道府県コード
   */
  const removePopulationData = (prefCode: number) => {
    setPopulationData((prevData) => {
      const newData = { ...prevData };
      delete newData[prefCode];
      return newData;
    });
  };

  return {
    populationData,
    fetchPopulationData,
    removePopulationData,
  };
}
