import { ResponsiveRadar } from '@nivo/radar'
import "../styles/radarChartPage.css"
import MenuBar from "../components/MenuBar"
import React from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

export const MyResponsiveRadar = () => {
      

    const data = [
        {
            id: 0,
            title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
            price: 3100,
            star: 117,
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
            id: 1,
            title: "a",
            price: 1900,
            star: 7,
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
            id: 2,
            title: "v",
            price: 3100,
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
            id: 3,
            title: "z",
            price: 3190,
            star: 7,
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
        }
    ];
var columnList = []
var valueList = []
var dataList = []
var newValueList = []
var isFirst = true

for(var i = 0; i < data.length; i++){
    dataList.push(new Object())
    valueList.push(new Array())
}
function addData(key,value,i){
    if(key === "title"){
        valueList[i].push(value)
        dataList[i][key] = value
    }

    if(!isNaN(value) && key !== "id"){
        const uniqueKey = data.map(function (p) {
            return p[key];
        });
        const maxValue = Math.max.apply(null, uniqueKey)
        valueList[i].push(value)
        dataList[i][key] = value / maxValue * 100
    }
}
function addColumn(key,value){
    if(!isNaN(value) && key !== "id"){
        columnList.push(key)
    }
}

for (const i in data){
    if(isFirst === true){
        for (const key in data[i]){
            addColumn(key,data[i][key])
        }
        isFirst = false
    }
    for (const key in data[i]){
        addData(key,data[i][key],i)
    }
}

console.log(dataList)
var NewDataSet = {
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    datasets: [
      {
        label: '# of Votes',
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
};

    return(
    <div>
        <MenuBar />
        <div className='background'>
        <div className="columnContainer">
        <ResponsiveRadar
            data={dataList}
            theme={{
                fontSize: 20,
                textColor: "#ebebeb", 
                grid:{
                    line:{
                        stroke: "#ccffee",
                        strokeWidth: 2
                    }                       
                }            
            }}
            keys={columnList}
            itemTextColor = "#ebebeb"
            indexBy="title"
            valueFormat=">-0.2f"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            borderColor={{ from: 'color' }}
            gridShape="linear"
            gridLabelOffset={36}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color', modifiers: [] }}
            colors={{ scheme: 'set2' }}
            fillOpacity={0.4}
            blendMode="multiply"
            motionConfig="wobbly"
            gridLevels={5}
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999',
                    fontSize: 15,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}/>
            </div>
            <div className="right">
                <div className='p'>
                    <div className='radar-title'>
                        <div className='radar-title-text'>
                            Import Datas
                        </div>
                    </div>
                    {dataList.map((data, index) => {
                        return(
                            <p className='textcolor'>{data["title"]}</p>
                        )
                    })}
                </div>
            </div>
        </div>
      </div>
    )
}