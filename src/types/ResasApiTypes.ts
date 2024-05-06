// 都道府県
export interface Prefecture {
  prefCode: number;
  prefName: string;
}

// 人口データ
export interface PopulationData {
  year: number;
  value: number;
}

// 人口カテゴリー
export interface PopulationCategory {
  label: string;
  data: PopulationData[];
}

// 人口構成
export interface PopulationComposition {
  message: string | null;
  result: {
    boundaryYear: number;
    data: PopulationCategory[];
  };
}
