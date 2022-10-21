import "../styles/radarChartPage.css"
import MenuBar from "../components/MenuBar"
import React, { useDebugValue, useState }  from "react";
import { useRef } from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar, getDatasetAtEvent } from 'react-chartjs-2';
import StartButton from "../components/StartButton";


ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

export const RadarComponent = () => {
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
            },{
                id: 4,
                title: "test",
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
            },{
                id: 4,
                title: "test",
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
            },{
                id: 4,
                title: "test",
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
            },{
                id: 4,
                title: "test",
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
            },{
                id: 4,
                title: "test",
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
    let columnList = []
    let valueList = []
    let dataList = []
    let isFirst = true
    const [dataSet,setDataSet] = useState({
        labels: columnList,
        datasets: [],
    })
    const [showImportCSV, setShowImportCSV] = useState(false); // Modalコンポーネントの表示の状態を定義する
    const [image, setImage] = useState()
    const [errorMessage, setErrorMessage] = useState('')
    const URL = 'http://127.0.0.1:8000/images/' //適宜設定

    const randomColor = () => {
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);
        return `rgb(${r},${g},${b}`
    }

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

    for(let i = 0; i < data.length; i++){
        dataSet.datasets.push(new Object())
        dataSet.datasets[i].hidden = true
        dataSet.datasets[i].label = valueList[i][0]
        dataSet.datasets[i].data = []
        for (let j = 0; j < valueList[i].length - 1; j++){
            dataSet.datasets[i].data.push(valueList[i][j+1])
        }
        const color = `${randomColor()}`
        dataSet.datasets[i].backgroundColor = `${color},0.3)`
        dataSet.datasets[i].borderColor = `${color},1)`
        dataSet.datasets[i].borderWidth = 1
        dataSet.datasets[i].pointBackgroundColor = `${color})`
        dataSet.datasets[i].pointBorderColor = '#fff'
        dataSet.datasets[i].pointHoverBackgroundColor = '#fff'
        dataSet.datasets[i].pointHoverBorderColor = `${color})`
    }

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

    
    const options = {
        plugins:{
            legend:{
                position: 'bottom',
                labels:{
                    color: "#CCFFEE",
                    usePointStyle: true,
                    boxWidth: 20,
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

    //const myChart = new ChartJS(dataSet,options)

    const OutputCSV = () => {
        console.log("CSV出力をする")
        setShowImportCSV(true);
    }
    const chartRef = useRef();
    const hiddenData = () => {
        console.log(getDatasetAtEvent(chartRef.current));
        const chart = Radar.getChart()
        console.log(chart)
        let prevData = dataSet
        console.log(prevData)
        prevData.datasets[0].hidden = true
        setDataSet(prevData)
        //myChart.update()
        console.log(dataSet)
    }

    return(
        <div>
            <MenuBar />
            <div className='radar-container'>
                <div className="radar-columnContainer">
                    <Radar 
                        data={dataSet} 
                        options={options}
                    />
                </div>
                <div className='radar-p'>
                    <div className='radar-title'>
                        <div className='radar-title-text'>
                            Import Datas
                        </div>
                    </div>
                    <div className="radar-box">
                    {dataList.map((data, index) => {
                        return(
                            <div>
                                <div className='radar-datatitle'>
                                    <div className="radar-datatitle-text">
                                        {data["title"]}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                    <StartButton text={"hidden"} buttonClick={hiddenData} />
                    <div className="radar-start-button">
                        <StartButton text={"Output CSV"} buttonClick={OutputCSV} />
                    </div>
                </div>
            </div>
            {showImportCSV ? ( // showFlagがtrueだったらModalを表示する
            <div className="overlay">
            <div
                className="modal-content"
                onClick={(event) => {
                event.stopPropagation();
                }}
            >
                <div className="mb-3">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input id="img" type="file" accept="image/*,.png,.jpg,.jpeg,.gif" onChange={getImage}/>
                    </div>
                </form>
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
                    // onClick={props.onClicked}
                >
                    Enter
                </button>
                </div>
            </div>
            </div>
        ) : (
            <></> // showFlagがfalseの場合はModalは表示しない
        )}
        </div>    
    )
}