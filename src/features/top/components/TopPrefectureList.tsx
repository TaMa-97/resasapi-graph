import React from 'react';
import styled from 'styled-components';
import theme from '@/theme';

const StyledTitle = styled.h2`
  display: inline-block;
  ${theme.fonts.fz(18)};
  font-weight: 700;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-left: 5px solid #c9c9c9;
  padding: 10px 20px;
  margin-bottom: 20px;
`;
const StyledCheckList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 20px;
  ${theme.bp.tabletP`
    gap: 20px 10px;
  `}
`;
const StyledCheckItem = styled.li`
  width: calc((100% - 20px * 9) / 10);
  min-width: 90px;
  ${theme.bp.tabletP`
    width: calc((100% - 10px * 3) / 4);
    min-width: 77px;
  `}
`;
const StyledCheckInput = styled.input`
  display: none;
`;

const StyledCheckLabel = styled.label`
  position: relative;
  cursor: pointer;
  padding-left: 25px;
  transition: opacity 0.3s;

  &::before {
    content: '';
    display: block;
    width: 17px;
    height: 17px;
    border: 2px solid #8d8d8d;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    opacity: 0.7;
    transition:
      all 0.2s,
      border-color 0.2s;

    ${theme.bp.tabletP`
      width: 14px;
      height: 14px;
    `}
  }

  ${StyledCheckInput}:checked + & {
    font-weight: 700;
  }

  ${StyledCheckInput}:checked + &::before {
    width: 10px;
    top: -5px;
    left: 5px;
    border-radius: 0;
    opacity: 1;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotate(45deg);
    ${theme.bp.tabletP`
      width: 8px;
      top: -4px;
      left: 3px;
    `}
  }

  &:hover {
    opacity: 0.8;
  }

  ${theme.bp.tabletP`
    ${theme.fonts.fz(14)};
    padding-left: 20px;
  `}
`;

interface TopPrefectureListProps {
  prefectures: { prefCode: number; prefName: string }[];
  selectedPrefectures: number[];
  handleCheckboxChange: (prefCode: number) => void;
}

function TopPrefectureList({
  prefectures,
  selectedPrefectures,
  handleCheckboxChange,
}: TopPrefectureListProps) {
  return (
    <>
      <StyledTitle>総人口推移グラフ</StyledTitle>
      <StyledCheckList>
        {prefectures.map((prefecture) => (
          <StyledCheckItem key={prefecture.prefCode}>
            <StyledCheckInput
              id={`checkbox-${prefecture.prefCode}`}
              type="checkbox"
              checked={selectedPrefectures.includes(prefecture.prefCode)}
              onChange={() => handleCheckboxChange(prefecture.prefCode)}
            />
            <StyledCheckLabel htmlFor={`checkbox-${prefecture.prefCode}`}>
              {prefecture.prefName}
            </StyledCheckLabel>
          </StyledCheckItem>
        ))}
      </StyledCheckList>
    </>
  );
}

export default TopPrefectureList;
