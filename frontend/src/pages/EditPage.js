import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/editPage.css";
import StartButton from "../components/StartButton";
import MenuBar from "../components/MenuBar";

const Item = ({ item }) => {
  return <td>{item}</td>;
};

const TableLine = ({ data, index, columnList }) => {
  return columnList.map((column) => {
    if (isNaN(data[column])) {
      return <Item item={data[column]} key={column + index.toString()} />;
    } else {
      return (
        <Item
          item={data[column].toLocaleString()}
          key={column + index.toString()}
        />
      );
    }
  });
};

const AddButton = ({ onClicked }) => {
  return (
    <button className="btn btn-secondary btn-circle btn-circle-sm m-1">
      ＋
    </button>
  );
};

const EditPage = () => {
  const data = [
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 31900,
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
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 31900,
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
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 31900,
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
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 31900,
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

    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 31900,
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
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 31900,
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
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 31900,
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
    {
      title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
      price: 31900,
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

  return (
    <>
      <MenuBar />
      <div className="edit-title">
        <div className="edit-title-text">Edit Page</div>
      </div>

      <div className="data-table-wrapper">
        <div className="data-table">
          <table align="center">
            <tbody>
              <tr>
                <th className="column-cell product-title-cell"></th>
                {columnList.map((column, index) => {
                  return (
                    <th key={column} className="column-cell">
                      {column}
                    </th>
                  );
                })}
                <th className="add-button-cell">
                  <AddButton />
                </th>
              </tr>
              {dataList.map((data, index) => {
                return (
                  <tr className="product-line">
                    <th className="product-title-cell">{data["title"]}</th>
                    <TableLine
                      data={data}
                      index={index}
                      columnList={columnList}
                      key={index}
                    />
                  </tr>
                );
              })}
              <tr>
                <th className="add-button-cell">
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
