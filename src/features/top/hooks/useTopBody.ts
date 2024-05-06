import { useState } from 'react';
import { usePrefectures } from './usePrefectures';
import { usePopulationData } from './usePopulationData';

interface ChartEntry {
  year: number;
  [prefCode: number]: number; // キー:都道府県コード、値:その年の人口
}

/**
 * トップ画面(都道府県・人口データ）
 */
export function useTopBody() {
  const prefectures = usePrefectures(); // 都道府県データ取得
  const { populationData, fetchPopulationData, removePopulationData } =
    usePopulationData(); // 人口データ等取得
  const [selectedPrefectures, setSelectedPrefectures] = useState<number[]>([]); // チェックボックス状態管理用

  /**
   * 都道府県のチェックボックス変更処理
   * @param {number} prefCode : 都道府県コード
   */
  const handleCheckboxChange = async (prefCode: number) => {
    const isSelected = selectedPrefectures.includes(prefCode);
    // 選択状態更新
    setSelectedPrefectures((prev) =>
      isSelected
        ? prev.filter((code) => code !== prefCode)
        : [...prev, prefCode],
    );
    // 人口データ取得・削除
    if (!isSelected) {
      await fetchPopulationData(prefCode);
    } else {
      removePopulationData(prefCode);
    }
  };

  /**
   * グラフ用のデータ作成
   */
  const chartData: ChartEntry[] = []; // 人口データ格納用
  // 選択されている都道府県に対して処理
  selectedPrefectures.forEach((prefCode) => {
    (populationData[prefCode] || []).forEach((data) => {
      const existingEntry = chartData.find((entry) => entry.year === data.year); // 既に同じ年が存在するかどうか
      if (existingEntry) {
        existingEntry[prefCode] = data.value;
      } else {
        chartData.push({ year: data.year, [prefCode]: data.value });
      }
    });
  });

  // console.log('chartData:', chartData);

  return {
    prefectures,
    selectedPrefectures,
    handleCheckboxChange,
    chartData,
    populationData,
  };
}
