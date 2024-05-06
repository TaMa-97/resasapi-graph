# 都道府県別 総人口推移グラフ

## 環境情報

- **言語** : `TypeScript`
- **UIライブラリ** : `React v18.2.0`
- **スタイリング** : `styled-components`
- **リンター** : `eslint`
- **フォーマッター** : `prettier`
- **グラフライブラリ** : `Rechart.js`

## 内容

1. RESAS(地域経済分析システム) APIの「都道府県一覧」APIから取得する
2. APIレスポンスから都道府県一覧のチェックボックスを動的に生成する
3. 都道府県にチェックを入れると、RESAS APIから選択された都道府県の「人口構成」を取得する
4. 人口構成APIレスポンスから、X軸:年、Y軸:人口数の折れ線グラフを動的に生成して表示する