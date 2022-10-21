// MyComponents.js
import React, { useEffect, useCallback, useState } from "react";
import "../styles/inputModal.css";
import ReactFileReader from 'react-file-reader';
import StartButton from "./StartButton";

const ImportCSV = (props) => {
    const [image, setImage] = useState()
    const [errorMessage, setErrorMessage] = useState('')
    const URL = 'http://127.0.0.1:8000/images/' //適宜設定

    const getImage = (e) => {
        if(!e.target.files) return
        const img= e.target.files[0]
        setImage(img)
    }
    const Submit=async()=>{
        const formdata = new FormData()
        formdata.append('upload_file', image)
        const requestOptions={
            method:"POST",
            body:formdata,
        }
        const response =await fetch(URL,requestOptions)
        const data=await response.json()
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        Submit()
    }
    
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
            <div>
                <input id="img" type="file" accept="image/*,.png,.jpg,.jpeg,.gif" onChange={getImage}/>
            </div>
            <br/>
            <button className="button is-primary" type="submit">Submit</button> 
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

export default ImportCSV;
