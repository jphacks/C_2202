import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

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
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 31900,
      star: 470,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
      Brand: "HHKB",
      メーカー: "PFU",
      シリーズ: "HYBRID",
      梱包サイズ: "32.2x16x5.8cm;820g",
      電池: "2単3形電池(付属)",
      製造元リファレンス: "PD-KB820B",
      カラー: "Black",
      同梱バッテリー: "はい",
      商品の重量: "820g",
    },
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 3190,
      star: 4,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
      Brand: "HHKB",
      メーカー: "PFU",
      シリーズ: "HYBRID",
      梱包サイズ: "32.2x16x5.8cm;820g",
      電池: "2単3形電池(付属)",
      製造元リファレンス: "PD-KB820B",
      カラー: "Black",
      同梱バッテリー: "はい",
      商品の重量: "820g",
    },
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 319,
      star: 47000,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
      Brand: "HHKB",
      メーカー: "PFU",
      シリーズ: "HYBRID",
      梱包サイズ: "32.2x16x5.8cm;820g",
      電池: "2単3形電池(付属)",
      製造元リファレンス: "PD-KB820B",
      カラー: "Black",
      同梱バッテリー: "はい",
      商品の重量: "820g",
    },
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 319000,
      star: 470000,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
      Brand: "HHKB",
      メーカー: "PFU",
      シリーズ: "HYBRID",
      梱包サイズ: "32.2x16x5.8cm;820g",
      電池: "2単3形電池(付属)",
      製造元リファレンス: "PD-KB820B",
      カラー: "Black",
      同梱バッテリー: "はい",
      商品の重量: "820g",
    },

    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 319000,
      star: 0,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
      Brand: "HHKB",
      メーカー: "PFU",
      シリーズ: "HYBRID",
      梱包サイズ: "32.2x16x5.8cm;820g",
      電池: "2単3形電池(付属)",
      製造元リファレンス: "PD-KB820B",
      カラー: "Black",
      同梱バッテリー: "はい",
      商品の重量: "820g",
    },
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 31900000,
      star: 99999999,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
      Brand: "HHKB",
      メーカー: "PFU",
      シリーズ: "HYBRID",
      梱包サイズ: "32.2x16x5.8cm;820g",
      電池: "2単3形電池(付属)",
      製造元リファレンス: "PD-KB820B",
      カラー: "Black",
      同梱バッテリー: "はい",
      商品の重量: "820g",
    },
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 3,
      star: 222222,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
      Brand: "HHKB",
      メーカー: "PFU",
      シリーズ: "HYBRID",
      梱包サイズ: "32.2x16x5.8cm;820g",
      電池: "2単3形電池(付属)",
      製造元リファレンス: "PD-KB820B",
      カラー: "Black",
      同梱バッテリー: "はい",
      商品の重量: "820g",
    },
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 31,
      star: 47,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
      Brand: "HHKB",
      メーカー: "PFU",
      シリーズ: "HYBRID",
      梱包サイズ: "32.2x16x5.8cm;820g",
      電池: "2単3形電池(付属)",
      製造元リファレンス: "PD-KB820B",
      カラー: "Black",
      同梱バッテリー: "はい",
      商品の重量: "820g",
    },
  ];

  const submitRef = useRef(null);

  const [dataList, setDataList] = useState(data); // 商品の情報のリスト
  const [columnList, setColumnList] = useState([
    "price",
    "star",
    "Brand",
    "メーカー",
    "シリーズ",
    "梱包サイズ",
    "電池",
    "製造元リファレンス",
    "カラー",
    "同梱バッテリー",
    "商品の重量",
  ]); // カラムのリスト
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
    axios
      .post(backendURL + "/edit/url", {
        productURL: productURL,
      })
      .then(function (res) {
        try {
          setDataList([...dataList, res]);
        } catch (e) {
          window.alert(e);
        }
        setShowInputModal(false);
      });
  };
  const submitClicked = () => {
    submitRef.current.click();
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
                    <th className="item-title-cell">{data["title"]}</th>
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
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#4d638c",
                    color: "#d2d2d2",
                    width: "8rem",
                  }}
                  onClick={submitClicked}
                >
                  Enter
                </button>
              </div>

              <input hidden ref={submitRef} type="submit" value="PDFchange" />
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
