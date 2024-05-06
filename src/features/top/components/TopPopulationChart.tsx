import React from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';
import theme from '@/theme';

const Wrapper = styled.div`
  padding: 30px;
  ${theme.bp.tabletP`
    padding: 20px 0;
  `}
`;

interface ChartEntry {
  year: number;
  [prefCode: number]: number;
}

interface TopPopulationChartProps {
  chartData: ChartEntry[];
  selectedPrefectures: number[];
  prefectures: { prefCode: number; prefName: string }[];
  colors: string[];
}

function TopPopulationChart({
  chartData,
  selectedPrefectures,
  prefectures,
  colors,
}: TopPopulationChartProps) {
  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 50, bottom: 40 }}
          key={JSON.stringify(chartData)} // アニメーションリセット
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year">
            <Label value="年度" offset={-20} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: '人口数',
              angle: -90,
              position: 'insideLeft',
              offset: -30,
            }}
          />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="left"
            height={50}
            wrapperStyle={{ paddingTop: '50px' }}
          />
          {selectedPrefectures.map((prefCode, index) => (
            <Line
              key={prefCode}
              type="monotone"
              dataKey={prefCode}
              name={
                prefectures.find((p) => p.prefCode === prefCode)?.prefName ||
                `Prefecture ${prefCode}`
              }
              stroke={colors[index % colors.length]}
              activeDot={{ r: 8, fill: colors[index % colors.length] }}
              isAnimationActive
              animationDuration={1000}
              animationEasing="ease-in-out"
              unit="人"
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

export default TopPopulationChart;
