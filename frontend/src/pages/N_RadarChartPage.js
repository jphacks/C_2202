import "../styles/radarChartPage.css"
import MenuBar from "../components/MenuBar"
import React, { useState }  from "react";
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
// import { AiOutlineCaretDow } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'

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
            hoge: 100,
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
            hoge: 100,
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
            hoge: 100,
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
            hoge: 100,
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
        valueList[i].push(value / maxValue * 100)
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

const NewDataSet = {
    labels: columnList,
    datasets: [],
}

for(let i = 0; i < data.length; i++){
    NewDataSet.datasets.push(new Object())
    NewDataSet.datasets[i].hidden = true
    NewDataSet.datasets[i].label = valueList[i][0]
    NewDataSet.datasets[i].data = []
    for (let j = 0; j < valueList[i].length - 1; j++){
        NewDataSet.datasets[i].data.push(valueList[i][j+1])
    }
    NewDataSet.datasets[i].backgroundColor = 'rgba(255, 99, 132, 0.2)'
    NewDataSet.datasets[i].borderColor = 'rgba(255, 99, 132, 1)'
    NewDataSet.datasets[i].borderWidth = 1
    NewDataSet.datasets[i].pointBackgroundColor = 'rgb(255, 99, 132)'
    NewDataSet.datasets[i].pointBorderColor = '#fff'
    NewDataSet.datasets[i].pointHoverBackgroundColor = '#fff'
    NewDataSet.datasets[i].pointHoverBorderColor = 'rgb(255, 99, 132)'
}

const options = {
    plugins:{
        legend:{
            position: 'right',
            labels:{
                color: "#CCFFEE",
                font:{
                    size: 15,
                }
            }
        },
    },
    scales: {
        r: {
            angleLines: {
                color: "#CCFFEE",
                display: true,
                lineWidth: 1
            },
            pointLabels: {
                color: "#ededed",
                font:{
                    size: 11.5
                }
            },
            max: 120,
            min: 0,
            ticks: {
                display: false,
                stepSize: 20
            }
        }
      }
};
const [visible, setVisible] = useState(false);
const [visibleIndex, setVisibleIndex] = useState(-1);
const isVisible = (index) => {
    if(visibleIndex === -1){
        setVisible(!visible)
        setVisibleIndex(index)
    }else if(index === visibleIndex){
        setVisible(!visible)
    }else if(visible){
        setVisibleIndex(index)
    }else{
        setVisibleIndex(index)
        setVisible(!visible)
    }
}
const msg = (index) => {
    let item = []
    if(visible){
        if(visibleIndex === index){
            const property = Object.entries(data[index]);
            property.forEach(function(v){
                item += v.join(':');
                item += ' ';
            });
            return <ul className="item">{item}</ul>;
        }
    }
    return <p className="showDetail">Show Detail</p>
}

return(
    <div>
        <MenuBar />
        <div className='background'>
        <div className="columnContainer">
            <Radar data={NewDataSet} options={options}/>
        </div>
            <div className="right">
                <div className='p'>
                    <div className='radar-title'>
                        <div className='radar-title-text'>
                            Import Datas
                        </div>
                    </div>
                    <div className="box">
                    {dataList.map((data, index) => {
                        return(
                            <div>
                                <p className='datatitle'>{data["title"]}</p>
                                <button className="button" onClick={() => isVisible(index)}>
                                    <FaGithub />
                                </button>
                                {msg(index)}
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}