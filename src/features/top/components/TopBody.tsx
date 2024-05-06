import React from 'react';
import styled from 'styled-components';
import theme from '@/theme';
import TopPrefectureList from './TopPrefectureList';
import TopPopulationChart from './TopPopulationChart';
import colors from '@/theme/setting/colors';
import { useTopBody } from '@/features/top/hooks/useTopBody';

const Container = styled.section`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 20px 100px;
  ${theme.bp.tabletP`
    padding: 40px 20px 200px;
  `}
`;

function TopBody() {
  const { prefectures, selectedPrefectures, handleCheckboxChange, chartData } =
    useTopBody();

  return (
    <Container>
      <TopPrefectureList
        prefectures={prefectures}
        selectedPrefectures={selectedPrefectures}
        handleCheckboxChange={handleCheckboxChange}
      />
      <TopPopulationChart
        chartData={chartData}
        selectedPrefectures={selectedPrefectures}
        prefectures={prefectures}
        colors={colors.chartColors}
      />
    </Container>
  );
}

export default TopBody;
