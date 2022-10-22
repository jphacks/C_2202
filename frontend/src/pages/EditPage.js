import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";
import axios from "axios";
// import Draggable from "react-draggable";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import "../styles/startPage.css";
import "../styles/editPage.css";
import "../styles/inputModal.css";

import StartButton from "../components/StartButton";
import MenuBar from "../components/MenuBar";
import AddButton from "../components/AddButton";
import SortButton from "../components/SortButton";
import Loader from "../components/Loading";
import MyDialog from "../components/MyDialog";
import MyModal from "../components/MyModal";

const backendURL = "http://127.0.0.1:8000";

// 配列をlocalStorageで保管するときはjsonにする必要がある
const SetArray = (arr, key) => {
  if (window.localStorage) {
    let json = JSON.stringify(arr, undefined, 1);
    console.log(json);
    localStorage.setItem(key, json);
  }
};

// 取得するときはjsonを配列に戻す
const GetArray = (key) => {
  if (window.localStorage) {
    let json = localStorage.getItem(key);
    if (json) {
      let array = JSON.parse(json);
      return array;
    }
    return json;
  }
  return null;
};

const EditPage = () => {
  // localStorageからデータを取得
  const storedDataList = GetArray("Data");
  const storedColumnList = GetArray("Column");
  const [dataList, setDataList] = useState(
    storedDataList ? storedDataList : []
  ); // 商品の情報のリスト
  const [columnList, setColumnList] = useState(
    storedColumnList ? storedColumnList : []
  ); // カラムのリスト
  const [showLoader, setShowLoader] = useState(false); // ロードアニメーションの表示の状態を定義する
  const [sort, setSort] = useState({}); // ソートするキーと昇順or降順の状態を保持
  const [dialogConfig, setDialogConfig] = useState(undefined); // ダイアログボックスの要素
  const [modalConfig, setModalConfig] = useState(undefined); // モーダルの要素

  const draggableColumn = useRef(null);
  const inputRef = useRef(null);

  const dragStart = (event) => {
    const { target } = event;
    const id = parseInt(target.id);
    setTimeout(() => {
      draggableColumn.current = target;
    }, 0);
    setColumnList((prevState) => {
      // prevent mutation
      const state = prevState;
      state.dragged = state[id];
      return state;
    });
  };

  const dragEnd = (event) => {
    event.preventDefault();
  };

  const dragOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const dragDrop = async (event) => {
    // event.preventDefault();
    event.stopPropagation();
    const { currentTarget } = event;
    const id = parseInt(currentTarget.id);
    const previousId = draggableColumn.current.id;
    // ドラッグしてきたカラムとホバーしているカラムが異なる場合のみ処理する
    if (id !== previousId) {
      if (event.shiftKey) {
        // シフトが押されている場合→カラムの統合
        var mergeFrom = columnList[previousId];
        var mergeTo = columnList[id];

        // 統合が可能かどうかを判定
        // 両方のカラムにデータが入っているか
        var notBoth = true;
        // 数字のデータが存在するか
        var existNumber = false;
        // 文字列のデータが存在するかどうか
        var existString = false;
        dataList.forEach((data) => {
          notBoth &= !(
            data[mergeFrom] !== undefined && data[mergeTo] !== undefined
          );
          existNumber |=
            typeof data[mergeFrom] === "number" ||
            typeof data[mergeTo] === "number";
          existString |=
            typeof data[mergeFrom] === "string" ||
            typeof data[mergeTo] === "string";
        });

        // 両方のカラムにデータが入っている商品が存在しないかつ､異なる型のデータが存在しないなら統合可能
        if (notBoth && !(existNumber && existString)) {
          const ret = await new Promise((resolve) => {
            setDialogConfig({
              onClose: resolve,
              message: `${mergeFrom}
                 を 
                ${mergeTo}
                 に統合します。よろしいですか？`,
              confirm: true,
            });
          });
          setDialogConfig(undefined);
          if (ret === "ok") {
            // カラムのリストからドラッグしてきたカラムを削除
            setColumnList((prevState) => {
              const dragged = prevState.dragged;
              mergeFrom = dragged;
              mergeTo = prevState[id];
              const state = prevState.slice(0, prevState.length);
              if (previousId !== id) {
                state.splice(previousId, 1);
              }
              SetArray(state, "Column");
              return state;
            });

            // データを統合
            setDataList((prevState) => {
              const state = prevState.slice(0, prevState.length);
              state.forEach((data) => {
                console.log(mergeTo, data[mergeTo]);
                data[mergeTo] =
                  data[mergeTo] !== undefined ? data[mergeTo] : data[mergeFrom];
                data[mergeFrom] = undefined;
              });
              SetArray(state, "Data");
              return state;
            });
          }
          // window.alert(mergeFrom + "を" + mergeTo + "に統合しました");
        } else {
          const _ = await new Promise((resolve) => {
            setDialogConfig({
              onClose: resolve,
              message: !notBoth
                ? "データが競合するので統合できません。"
                : "データの型が異なるので統合できません。",
              confirm: false,
            });
          });
          setDialogConfig(undefined);
        }
        // setDataList((prevState) => {});
      } else {
        // シフトが押されてない場合→カラムの移動
        setColumnList((prevState) => {
          const dragged = prevState.dragged;
          const state = prevState.slice(0, prevState.length);
          if (previousId !== id) {
            // 要素を入れ替える
            state.splice(previousId, 1);
            state.splice(id, 0, dragged);
          }
          SetArray(state, "Column");
          return state;
        });
      }
    }
  };

  // ソートした商品の配列
  const sortedDataList = useMemo(() => {
    let _sortedDataList = dataList;
    if (sort.key) {
      _sortedDataList = _sortedDataList.sort((a, b) => {
        a = a[sort.key];
        b = b[sort.key];

        // undefinedを強制的に下にするようにソート
        if (a === b) {
          return 0;
        }
        if (a === undefined) {
          return 1;
        }
        if (b === undefined) {
          return -1;
        }
        if (a > b) {
          return 1 * sort.order;
        }

        return -1 * sort.order;
      });
    }
    return _sortedDataList;
  }, [sort, dataList]);

  // モーダルの表示
  const closeModal = useCallback(() => {
    setModalConfig(undefined);
    document.removeEventListener("click", closeModal);
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, [closeModal]);

  const openInputModal = (event) => {
    setModalConfig({
      title: "Input URL",
      onSubmit: productSubmit,
      URLinput: true,
    });
    document.addEventListener("click", closeModal);
    event.stopPropagation();
  };

  const Cell = ({ item, index, column }) => {
    const chengeColor = (event) => {
      const color = event.target.className;
      if (color === "normal-cell") {
        event.target.className = "green-cell";
      } else if (color === "green-cell") {
        event.target.className = "red-cell";
      } else if (color === "red-cell") {
        event.target.className = "normal-cell";
      }
    };
    return (
      <td onClick={chengeColor} className="normal-cell">
        {item}
      </td>
    );
  };

  const TableLine = ({ data, index }) => {
    return columnList.map((column) => {
      return (
        <Cell
          index={index}
          column={column}
          item={
            isNaN(data[column]) ? data[column] : data[column].toLocaleString()
          }
          key={column + index.toString()}
        />
      );
    });
  };

  // リンクから商品情報を取得

  const toBlobZip = (base64) => {
    console.log(base64.toString().replace(/^.*,/, ""));
    const bin = decodeURIComponent(atob(base64.toString().replace(/^.*,/, "")));
    const buffer = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }
    const blob = new Blob([buffer.buffer], {
      type: "text/csv",
    });
    return blob;
  };

  // const element = HTMLElement;
  const sendProductData = () => {
    setShowLoader(true);
    console.log(dataList);
    axios
      .post(backendURL + "/newdata/download/", {
        dataList: dataList,
      })
      .then(function (res) {
        console.log(res);
        const blob = toBlobZip(res.data);
        const url = window.URL.createObjectURL(blob);
        console.log(blob);
        console.log(url);
        const link = document.querySelector("#CSV");
        console.log(link);
        link.href = url;
        link.download = "output";
        link.click();
        console.log("送信完了");
        setShowLoader(false);
      });
  };

  const productSubmit = (e) => {
    getProductData(e.target[0].value);
    e.preventDefault();
  };

  const getProductData = (productURL) => {
    setShowLoader(true);
    console.log("enter");
    console.log(productURL);
    axios
      .post(backendURL + "/edit/url/", {
        productURL: productURL,
      })
      .then(async (res) => {
        console.log(res.data);
        if (res.data["ERROR"] !== undefined) {
          setShowLoader(false);
          setModalConfig(undefined);
          const _ = await new Promise((resolve) => {
            setDialogConfig({
              onClose: resolve,
              message: "URLが間違っています。",
              confirm: false,
            });
          });
          setDialogConfig(undefined);
        } else {
          try {
            // 商品リストに追加
            let newDataList = dataList;
            newDataList.push(res.data);
            setDataList(newDataList);
            SetArray(newDataList, "Data");
            // 新しいカラムを追加
            let newColumnList = columnList;
            for (const newcol of Object.keys(res.data)) {
              if (
                newcol !== "id" &&
                newcol !== "商品名" &&
                newcol !== "画像" &&
                newcol !== "URL" &&
                !newColumnList.some((col) => newcol === col)
              ) {
                newColumnList.push(newcol);
              }
            }
            setColumnList(newColumnList);
            SetArray(newColumnList, "Column");
          } catch (e) {
            window.alert(e);
          }
          setShowLoader(false);
          setModalConfig(undefined);
        }
      });
  };

  // CSVからjsonを取得
  const CSVSubmit = (event) => {
    console.log(event);
    // FileReaderを生成
    // var fileReader = new FileReader();

    // ファイルを取得
    let file = event.target.files[0];
    console.log(file);
    const formdata = new FormData();
    formdata.append("upload_file", file);
    getCSVtoJson(formdata);

    event.preventDefault();
  };

  const getCSVtoJson = (CSVfile) => {
    if (!CSVfile) return;
    setShowLoader(true);
    console.log("enter");
    console.log(CSVfile);
    try {
      axios.post(backendURL + "/newdata/upload/", CSVfile).then(async (res) => {
        console.log(res.data);
        if (res.data.length === 0) {
          const _ = await new Promise((resolve) => {
            setDialogConfig({
              onClose: resolve,
              message: "CSVの読み込みに失敗しました。",
              confirm: false,
            });
          });
          setDialogConfig(undefined);
        } else {
          // 商品リストに追加
          let dataList_ = dataList;
          console.log(res.data);
          dataList_.concat(res.data);
          setDataList((prevState) => {
            const state = prevState.slice(0, dataList.length);
            res.data.forEach((value) => state.push(value));
            SetArray(state, "Data");
            return state;
          });

          // 新しいカラムを追加
          let newColumnList = columnList;
          for (const newcol of Object.keys(res.data[0])) {
            if (
              newcol !== "" &&
              newcol !== "URL" &&
              newcol !== "id" &&
              newcol !== "商品名" &&
              newcol !== "画像" &&
              !newColumnList.some((col) => newcol === col)
            ) {
              newColumnList.push(newcol);
            }
          }
          SetArray(newColumnList, "Column");
          setColumnList(newColumnList);
        }
      });
    } catch (e) {
      window.alert(e);
    }
    setShowLoader(false);
  };

  const goRadar = () => {
    console.log(dataList);
  };

  return (
    <>
      <MenuBar />
      <div class="box-wrapper">
        <div className="edit-title">
          <div className="edit-title-text">Edit Page</div>
        </div>
        <div class="edit-box">
          <p className="green-explain">● GOOD</p>
          <p className="red-explain">● BAD</p>
        </div>
      </div>
      <div className="data-table-wrapper">
        <div className="data-table" id="dataTable">
          <table align="center">
            <thead>
              <tr>
                <th className="column-cell item-title-cell data-header"></th>
                {columnList.map((column, index) => {
                  return (
                    <th
                      className="column-cell"
                      id={index}
                      key={index}
                      draggable={true}
                      onDragStart={dragStart}
                      onDragEnd={dragEnd}
                      onDragOver={dragOver}
                      onDropCapture={dragDrop}
                    >
                      {column}
                      <SortButton
                        key={index}
                        column={column}
                        sort={sort}
                        setSort={setSort}
                      />
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {sortedDataList.map((data, index) => {
                return (
                  <tr className="item-line" key={index}>
                    <th className="item-title-cell">
                      <a href={data["URL"]} target="_blank" rel="noreferrer">
                        {data["商品名"]}
                      </a>
                    </th>
                    <TableLine data={data} index={index} />
                  </tr>
                );
              })}
              <tr>
                <th className="item-title-cell add-button-cell">
                  <AddButton
                    onClicked={(event) => {
                      openInputModal(event);
                    }}
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "30px",
        }}
      >
        <div style={{ margin: "10px 20px" }}>
          <Link to={"/radar"} state={{ state: dataList }}>
            <StartButton text={"Open with Rader"} onClick={() => goRadar()} />
          </Link>
        </div>
        <div style={{ margin: "10px 20px" }}>
          <StartButton
            text={"Open CSV"}
            onClick={() => inputRef.current.click()}
          />
          <input
            hidden
            ref={inputRef}
            type="file"
            onChange={CSVSubmit}
            name="datafile"
            accept=".csv"
          />
        </div>
        <div style={{ margin: "10px 20px" }}>
          <StartButton
            text={"Download CSV"}
            onClick={() => sendProductData()}
          />
          <a hidden id="CSV"></a>
        </div>
      </div>
      {modalConfig && <MyModal {...modalConfig} />}
      <Loader loaderFlag={showLoader} />
      {dialogConfig && <MyDialog {...dialogConfig} />}
    </>
  );
};
export default EditPage;
