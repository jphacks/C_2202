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

import "../styles/startPage.css";
import "../styles/editPage.css";
import "../styles/inputModal.css";

import StartButton from "../components/StartButton";
import MenuBar from "../components/MenuBar";
import AddButton from "../components/AddButton";
import SortButton from "../components/SortButton";
import Loader from "../components/Loading";

const backendURL = "http://127.0.0.1:8000";

const data_ = [
  {
    id: 0,
    商品名: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
    価格: 3100,
    評価: 117,
    画像: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    Brand: "HHKB",
    メーカー: "PFU",
    シリーズ: "HYBRID",
    梱包サイズ: "32.2x16x5.8cm;820g",
    電池: "2単3形電池(付属)",
    製造元リファレンス: "PD-KB820B",
    カラー: "Black",
    同梱バッテリー: "はい",
    商品の重量: "820g",
    URL:"https://www.amazon.co.jp/HHKB-Professional-HYBRID-%E6%97%A5%E6%9C%AC%E8%AA%9E%E9%85%8D%E5%88%97%EF%BC%8F%E5%A2%A8/dp/B082TZPCGJ"
  },
];

const columnlist_ = [
  "価格",
  "評価",
  "Brand",
  "メーカー",
  "シリーズ",
  "梱包サイズ",
  "電池",
  "製造元リファレンス",
  "カラー",
  "同梱バッテリー",
  "商品の重量",
];

const EditPage = () => {
  const [dataList, setDataList] = useState(data_); // 商品の情報のリスト
  const [columnList, setColumnList] = useState(columnlist_); // カラムのリスト
  const [newProductURL, setNewProductURL] = useState("");
  const [showInputModal, setShowInputModal] = useState(false); // Modalコンポーネントの表示の状態を定義する
  const [showLoader, setShowLoader] = useState(false); // ロードアニメーションの表示の状態を定義する
  const [sort, setSort] = useState({}); // ソートするキーと昇順or降順の状態を保持

  const draggableColumn = useRef(null);

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

  const dragDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { currentTarget } = event;
    const id = parseInt(currentTarget.id);

    setColumnList((prevState) => {
      // This is to not mutate state object
      const dragged = prevState.dragged;
      const state = prevState.slice(0, prevState.length);

      const previousId = draggableColumn.current.id;
      if (previousId !== id) {
        // 要素を入れ替える
        state.splice(previousId, 1);
        state.splice(id, 0, dragged);
      }
      return state;
    });
  };

  // ソートした商品の配列
  const sortedDataList = useMemo(() => {
    let _sortedDataList = dataList;
    if (sort.key) {
      _sortedDataList = _sortedDataList.sort((a, b) => {
        a = a[sort.key];
        b = b[sort.key];

        if (a === b) {
          return 0;
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
    setShowInputModal(false);
    document.removeEventListener("click", closeModal);
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, [closeModal]);

  function openModal(event) {
    setShowInputModal(true);
    document.addEventListener("click", closeModal);
    event.stopPropagation();
  }

  const Cell = ({ item, index, column }) => {
    const chengeColor = (event) => {
      const color = event.target.className;
      if (color === "normal-cell") {
        event.target.className = "red-cell";
      } else if (color === "red-cell") {
        event.target.className = "green-cell";
      } else if (color === "green-cell") {
        event.target.className = "blue-cell";
      } else if (color === "blue-cell") {
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
      if (isNaN(data[column])) {
        return (
          <Cell
            index={index}
            column={column}
            item={data[column]}
            key={column + index.toString()}
          />
        );
      } else {
        return (
          <Cell
            index={index}
            column={column}
            item={data[column].toLocaleString()}
            key={column + index.toString()}
          />
        );
      }
    });
  };

  // リンクから商品情報を取得
  const productSubmit = (e) => {
    getProductData(newProductURL);
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
      .then(function (res) {
        console.log(res.data);
        try {
          // 商品リストに追加
          let dataList_ = dataList;
          dataList_.push(res.data);
          setDataList(dataList_);
          // 新しいカラムを追加
          let newColumnList = columnList;
          for (const newcol of Object.keys(res.data)) {
            if (
              newcol !== "id" &&
              newcol !== "商品名" &&
              newcol !== "画像" &&
              !newColumnList.some((col) => newcol === col)
            ) {
              newColumnList.push(newcol);
            }
          }
          setColumnList(newColumnList);
        } catch (e) {
          window.alert(e);
        }
        setShowLoader(false);
        setShowInputModal(false);
      });
  };

  return (
    <>
      <MenuBar />
      <div className="edit-title">
        <div className="edit-title-text">Edit Page</div>
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
                    <th className="item-title-cell" ><a href={data["URL"]} target="_blank">{data["商品名"]}</a></th>
                    <TableLine data={data} index={index} />
                  </tr>
                );
              })}
              <tr>
                <th className="item-title-cell add-button-cell">
                  <AddButton
                    onClicked={(event) => {
                      openModal(event);
                    }}
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="button-for-rader">
        <StartButton text={"Open with Rader"} />
      </div>
      {/* Appコンポーネントから子であるModalコンポーネントにpropsを渡す */}
      {/* <InputModal
        showFlag={showInputModal}
        setShowModal={setShowInputModal}
        onClicked={getProductData}
        content="Input URL"
      /> */}
      {showInputModal ? ( // showFlagがtrueだったらModalを表示する
        <div className="overlay">
          <div
            className="modal-content"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <div className="modal-tytle">
              <div>Input URL</div>
            </div>

            <form onSubmit={productSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control url-input-form"
                  placeholder="amazonの商品ページのURLを入力してください"
                  onChange={(e) => {
                    setNewProductURL(e.target.value);
                  }}
                />
              </div>
              <div className="enter-button">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#4d638c",
                    color: "#d2d2d2",
                    width: "8rem",
                  }}
                  // onClick={submitClicked}
                >
                  Enter
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <></> // showFlagがfalseの場合はModalは表示しない
      )}
      <Loader loaderFlag={showLoader} />
    </>
  );
};
export default EditPage;
