import React, { useState } from "react";
import Values from "values.js";

import SingleColor from "./SingleColor";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(5));

  // フォームのsubmitイベントを処理する関数
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // 入力された色の値を解析して、配列に格納する
      let colors = new Values(color).all(10);
      // 配列をstate変数にセットする
      setList(colors);
    } catch (error) {
      // エラーが発生した場合、state変数を変更する
      setError(true);
      console.log(error);
    }
  };

  // JSXを返す
  return (
    <>
      {/* 色を生成するためのフォーム */}
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      {/* 生成された色を表示するセクション */}
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
};

// Appコンポーネントをエクスポートする
export default App;
