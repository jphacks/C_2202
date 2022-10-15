import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/startPage.css";

import StartButton from "../components/StartButton";
import MenuBar from "../components/MenuBar";

const StartPage = () => {
  const originText = "くぁwせdrftgyふじこlp";
  const lenText = originText.length;

  const [title, setTitle] = useState(originText);
  const [rightPos, setRightPos] = useState(0);

  // 右側を追加
  const AddRight = () => {
    setTitle(title + originText[rightPos]);
    setRightPos((rightPos + 1) % lenText);
  };

  // 右側を削除
  const RemoveRight = () => {
    if (title.length > 0) {
      setTitle(title.slice(0, -1));
      setRightPos((rightPos - 1 + lenText) % lenText);
    } else {
      window.alert("削除できないよ");
    }
  };

  return (
    <div>
      <MenuBar />
      <div className="title-text">
        <h1>{title}</h1>
      </div>
      <div className="start-button-wrapper">
        <StartButton text={"New Data"} buttonClick={AddRight} />
        <StartButton text={"Open File"} buttonClick={RemoveRight} />
      </div>
    </div>
  );
};

export default StartPage;
