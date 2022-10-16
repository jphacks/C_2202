import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/editPage.css";
import StartButton from "../components/StartButton";
import MenuBar from "../components/MenuBar";

const AddButton = ({ onClicked }) => {
  return (
    <button className="btn btn-secondary btn-circle btn-circle-sm m-1">
      ＋
    </button>
  );
};

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

  const [dataList, setDataList] = useState(data);
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
  ]);

  // ソート用
  const [sort, setSort] = useState({});
  const SortButton = ({ button }) => {
    return (
      <div className="sort-buttons">
        <button
          onClick={() => handleSort(button)}
          className={
            sort.key === button
              ? sort.order === 1
                ? "active asc"
                : "active desc"
              : ""
          }
        ></button>
      </div>
    );
  };

  const handleSort = (key) => {
    console.log("click : " + key);
    if (sort.key === key) {
      setSort({ ...sort, order: -sort.order });
    } else {
      setSort({
        key: key,
        order: 1,
      });
    }
  };

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
                        button={column}
                        handleSort={handleSort}
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
                  <AddButton />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="button-for-rader">
        <StartButton text={"Open with Rader"} />
      </div>
    </>
  );
};

export default EditPage;
