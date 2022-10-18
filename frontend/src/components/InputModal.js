// MyComponents.js
import React, { useEffect, useCallback, useState } from "react";
import "../styles/inputModal.css";

import StartButton from "./StartButton";

const InputModal = (props) => {
  return (
    <>
      {props.showFlag ? ( // showFlagがtrueだったらModalを表示する
        <div className="overlay">
          <div
            className="modal-content"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <div className="modal-tytle">
              <div>{props.content}</div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control url-input-form"
                placeholder="amazonの商品ページのURLを入力してください"
              />
            </div>
            <div className="enter-button">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#4d638c",
                  color: "#d2d2d2",
                  width: "8rem",
                }}
                onClick={props.onClicked}
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></> // showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
};

export default InputModal;
