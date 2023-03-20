import React, { useEffect, useState } from "react";
// rgbToHex関数をインポートする
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  console.log(hexColor);
  // alertステートとsetAlert関数を定義する
  const [alert, setAlert] = useState(false);
  // rgbを文字列に変換する
  const bcg = rgb.join(",");
  // rgbを16進数のカラーコードに変換する
  const hex = rgbToHex(...rgb);
  // 16進数のカラーコードを定義する
  const hexValue = `#${hexColor}`;
  // alertステートが更新されたときに3秒後にalertを非表示にする
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  // SingleColorコンポーネントのHTMLを返す
  return (
    <article
      // indexが10より大きい場合にクラス名にcolor-lightを追加する
      className={`color ${index > 10 && "color-light"}`}
      // 背景色を設定する
      style={{ backgroundColor: `rgb(${bcg})` }}
      // クリック時にalertを表示し、hexValueをクリップボードにコピーする
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      {/* colorの重みを表示 */}
      <p className="percent-value">{weight}%</p>
      {/* colorcodeを表示 */}
      <p className="color-value">{hexValue}</p>
      {/* alertがtrueの時”copied to clipboard” */}
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
