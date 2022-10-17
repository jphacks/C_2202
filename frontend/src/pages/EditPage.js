import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/startPage.css";
import "../styles/editPage.css";
import "../styles/inputModal.css";

import StartButton from "../components/StartButton";
import MenuBar from "../components/MenuBar";
import AddButton from "../components/AddButton";
import SortButton from "../components/SortButton";
// import InputModal from "../components/InputModal";

const backendURL = "http://127.0.0.1:8000";

const EditPage = () => {
  var data = [
    // {
    //   商品名: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
    //   価格: 31900,
    //   評価: 470,
    //   画像: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //   Brand: "HHKB",
    //   メーカー: "PFU",
    //   シリーズ: "HYBRID",
    //   梱包サイズ: "32.2x16x5.8cm;820g",
    //   電池: "2単3形電池(付属)",
    //   製造元リファレンス: "PD-KB820B",
    //   カラー: "Black",
    //   同梱バッテリー: "はい",
    //   商品の重量: "820g",
    // },
    // {
    //   商品名: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
    //   価格: 31900,
    //   評価: 470,
    //   画像: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //   Brand: "HHKB",
    //   メーカー: "PFU",
    //   シリーズ: "HYBRID",
    //   梱包サイズ: "32.2x16x5.8cm;820g",
    //   電池: "2単3形電池(付属)",
    //   製造元リファレンス: "PD-KB820B",
    //   カラー: "Black",
    //   同梱バッテリー: "はい",
    //   商品の重量: "820g",
    // },
    // {
    //   商品名: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
    //   価格: 31900,
    //   評価: 470,
    //   画像: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //   Brand: "HHKB",
    //   メーカー: "PFU",
    //   シリーズ: "HYBRID",
    //   梱包サイズ: "32.2x16x5.8cm;820g",
    //   電池: "2単3形電池(付属)",
    //   製造元リファレンス: "PD-KB820B",
    //   カラー: "Black",
    //   同梱バッテリー: "はい",
    //   商品の重量: "820g",
    // },
    // {
    //   商品名: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
    //   価格: 31900,
    //   評価: 470,
    //   画像: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //   Brand: "HHKB",
    //   メーカー: "PFU",
    //   シリーズ: "HYBRID",
    //   梱包サイズ: "32.2x16x5.8cm;820g",
    //   電池: "2単3形電池(付属)",
    //   製造元リファレンス: "PD-KB820B",
    //   カラー: "Black",
    //   同梱バッテリー: "はい",
    //   商品の重量: "820g",
    // },
    // {
    //   商品名: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
    //   価格: 31900,
    //   評価: 470,
    //   画像: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //   Brand: "HHKB",
    //   メーカー: "PFU",
    //   シリーズ: "HYBRID",
    //   梱包サイズ: "32.2x16x5.8cm;820g",
    //   電池: "2単3形電池(付属)",
    //   製造元リファレンス: "PD-KB820B",
    //   カラー: "Black",
    //   同梱バッテリー: "はい",
    //   商品の重量: "820g",
    // },
    // {
    //   商品名: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
    //   価格: 31900,
    //   評価: 470,
    //   画像: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //   Brand: "HHKB",
    //   メーカー: "PFU",
    //   シリーズ: "HYBRID",
    //   梱包サイズ: "32.2x16x5.8cm;820g",
    //   電池: "2単3形電池(付属)",
    //   製造元リファレンス: "PD-KB820B",
    //   カラー: "Black",
    //   同梱バッテリー: "はい",
    //   商品の重量: "820g",
    // },
    // {
    //   商品名: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
    //   価格: 31900,
    //   評価: 470,
    //   画像: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //   Brand: "HHKB",
    //   メーカー: "PFU",
    //   シリーズ: "HYBRID",
    //   梱包サイズ: "32.2x16x5.8cm;820g",
    //   電池: "2単3形電池(付属)",
    //   製造元リファレンス: "PD-KB820B",
    //   カラー: "Black",
    //   同梱バッテリー: "はい",
    //   商品の重量: "820g",
    // },
    // {
    //   商品名: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
    //   価格: 31900,
    //   評価: 470,
    //   画像: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //   Brand: "HHKB",
    //   メーカー: "PFU",
    //   シリーズ: "HYBRID",
    //   梱包サイズ: "32.2x16x5.8cm;820g",
    //   電池: "2単3形電池(付属)",
    //   製造元リファレンス: "PD-KB820B",
    //   カラー: "Black",
    //   同梱バッテリー: "はい",
    //   商品の重量: "820g",
    // },
  ];

  const submitRef = useRef(null);

  const [dataList, setDataList] = useState(data); // 商品の情報のリスト
  const [columnList, setColumnList] = useState([]); // カラムのリスト
  const [newProductURL, setNewProductURL] = useState("");
  const [showInputModal, setShowInputModal] = useState(false); // Modalコンポーネントの表示の状態を定義する
  const [sort, setSort] = useState({}); // ソートするキーと昇順or降順の状態を保持

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
        if (a < b) {
          return -1 * sort.order;
        }
      });
    }
    return _sortedDataList;
  }, [sort]);

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
    return <td>{item}</td>;
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
        <div className="data-table">
          <table align="center">
            <thead>
              <tr>
                <th className="column-cell item-title-cell data-header"></th>
                {columnList.map((column, index) => {
                  return (
                    <th className="column-cell">
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
                  <tr className="item-line">
                    <th className="item-title-cell">{data["商品名"]}</th>
                    <TableLine data={data} index={index} key={index} />
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
                    console.log(e.target.value);
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
    </>
  );
};

export default EditPage;
