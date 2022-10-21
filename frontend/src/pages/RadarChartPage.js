import {
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from "chart.js";
import { useLocation } from "react-router-dom";
import { Link} from "react-router-dom";
import Chart from "chart.js/auto"
import React, { useEffect,useState, useRef} from "react";
import "../styles/radarChartPage.css"
import MenuBar from "../components/MenuBar"
import StartButton from "../components/StartButton";


const RadarChartComponent = () => {
    const { state } = useLocation();
    console.log("STATE!!!!"+state.state)
    for(let i = 0; i < state.state.length; i++){
        console.log(state.state[i])
        state.state[i].id = i
        state.state[i].title = state.state[i]["商品名"]
    }
    // const testData = [
    //     {
    //         id: 0,
    //         title: "PFUキーボードHHKBProfessionalHYBRID日本語配列/墨",
    //         price: 3100,
    //         star: 117,
    //         hoge: 100,
    //         img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //         Brand: "HHKB",
    //         メーカー: "PFU",
    //         シリーズ: "HYBRID",
    //         梱包サイズ: "32.2x16x5.8cm;820g",
    //         電池: "2単3形電池(付属)",
    //         製造元リファレンス: "PD-KB820B",
    //         カラー: "Black",
    //         同梱バッテリー: "はい",
    //         商品の重量: "820g",
    //     },
    //     {
    //         id: 1,
    //         title: "a",
    //         price: 1900,
    //         star: 7,
    //         hoge: 100,
    //         img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //         Brand: "HHKB",
    //         メーカー: "PFU",
    //         シリーズ: "HYBRID",
    //         梱包サイズ: "32.2x16x5.8cm;820g",
    //         電池: "2単3形電池(付属)",
    //         製造元リファレンス: "PD-KB820B",
    //         カラー: "Black",
    //         同梱バッテリー: "はい",
    //         商品の重量: "820g",
    //     },
    //     {
    //         id: 2,
    //         title: "v",
    //         price: 3100,
    //         star: 47,
    //         hoge: 100,
    //         img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //         Brand: "HHKB",
    //         メーカー: "PFU",
    //         シリーズ: "HYBRID",
    //         梱包サイズ: "32.2x16x5.8cm;820g",
    //         電池: "2単3形電池(付属)",
    //         製造元リファレンス: "PD-KB820B",
    //         カラー: "Black",
    //         同梱バッテリー: "はい",
    //         商品の重量: "820g",
    //     },
    //     {
    //         id: 3,
    //         title: "z",
    //         price: 3190,
    //         star: 7,
    //         hoge: 100,
    //         img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //         Brand: "HHKB",
    //         メーカー: "PFU",
    //         シリーズ: "HYBRID",
    //         梱包サイズ: "32.2x16x5.8cm;820g",
    //         電池: "2単3形電池(付属)",
    //         製造元リファレンス: "PD-KB820B",
    //         カラー: "Black",
    //         同梱バッテリー: "はい",
    //         商品の重量: "820g",
    //     },{
    //         id: 4,
    //         title: "test",
    //         price: 3190,
    //         star: 7,
    //         hoge: 100,
    //         img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //         Brand: "HHKB",
    //         メーカー: "PFU",
    //         シリーズ: "HYBRID",
    //         梱包サイズ: "32.2x16x5.8cm;820g",
    //         電池: "2単3形電池(付属)",
    //         製造元リファレンス: "PD-KB820B",
    //         カラー: "Black",
    //         同梱バッテリー: "はい",
    //         商品の重量: "820g",
    //     },{
    //         id: 4,
    //         title: "test",
    //         price: 3190,
    //         star: 7,
    //         hoge: 100,
    //         img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //         Brand: "HHKB",
    //         メーカー: "PFU",
    //         シリーズ: "HYBRID",
    //         梱包サイズ: "32.2x16x5.8cm;820g",
    //         電池: "2単3形電池(付属)",
    //         製造元リファレンス: "PD-KB820B",
    //         カラー: "Black",
    //         同梱バッテリー: "はい",
    //         商品の重量: "820g",
    //     },{
    //         id: 4,
    //         title: "test",
    //         price: 3190,
    //         star: 7,
    //         hoge: 100,
    //         img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //         Brand: "HHKB",
    //         メーカー: "PFU",
    //         シリーズ: "HYBRID",
    //         梱包サイズ: "32.2x16x5.8cm;820g",
    //         電池: "2単3形電池(付属)",
    //         製造元リファレンス: "PD-KB820B",
    //         カラー: "Black",
    //         同梱バッテリー: "はい",
    //         商品の重量: "820g",
    //     },{
    //         id: 4,
    //         title: "test",
    //         price: 3190,
    //         star: 7,
    //         hoge: 100,
    //         img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //         Brand: "HHKB",
    //         メーカー: "PFU",
    //         シリーズ: "HYBRID",
    //         梱包サイズ: "32.2x16x5.8cm;820g",
    //         電池: "2単3形電池(付属)",
    //         製造元リファレンス: "PD-KB820B",
    //         カラー: "Black",
    //         同梱バッテリー: "はい",
    //         商品の重量: "820g",
    //     },{
    //         id: 4,
    //         title: "test",
    //         price: 3190,
    //         star: 7,
    //         hoge: 100,
    //         img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZtNZ4GYCL._AC_SL1280_.jpg",
    //         Brand: "HHKB",
    //         メーカー: "PFU",
    //         シリーズ: "HYBRID",
    //         梱包サイズ: "32.2x16x5.8cm;820g",
    //         電池: "2単3形電池(付属)",
    //         製造元リファレンス: "PD-KB820B",
    //         カラー: "Black",
    //         同梱バッテリー: "はい",
    //         商品の重量: "820g",
    //     }
    // ];
    const testData = state.state
    let columnList = []
    let valueList = []
    let dataList = []
    let isFirst = true
    const data = {
            labels: columnList,
            datasets: []
    }
    const [showImportCSV, setShowImportCSV] = useState(false); // Modalコンポーネントの表示の状態を定義する
    const [image, setImage] = useState()
    const [errorMessage, setErrorMessage] = useState('')
    const URL = 'http://127.0.0.1:8000/images/' //適宜設定
    let [chart,setChart] = useState({})

    const randomColor = () => {
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);
        return `rgb(${r},${g},${b}`
    }

    for(var i = 0; i < testData.length; i++){
        dataList.push(new Object())
        valueList.push(new Array())
    }

    function addData(key,value,i){
        if(key === "title"){
            dataList[i][key] = value
        }

        if(!isNaN(value) && key !== "id"){
            const uniqueKey = testData.map(function (p) {
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

    for (const i in testData){
        if(isFirst === true){
            for (const key in testData[i]){
                addColumn(key,testData[i][key])
            }
            isFirst = false
        }
        for (const key in testData[i]){
            addData(key,testData[i][key],i)
        }
    }

    for(let i = 0; i < testData.length; i++){
        data.datasets.push(new Object())
        data.datasets[i].hidden = true
        data.datasets[i].label = state.state[i].title
        data.datasets[i].data = []
        for (let j = 0; j < valueList[i].length; j++){
            data.datasets[i].data.push(valueList[i][j])
        }
        const color = `${randomColor()}`
        data.datasets[i].backgroundColor = `${color},0.3)`
        data.datasets[i].borderColor = `${color},1)`
        data.datasets[i].borderWidth = 1
        data.datasets[i].pointBackgroundColor = `${color})`
        data.datasets[i].pointBorderColor = '#fff'
        data.datasets[i].pointHoverBackgroundColor = '#fff'
        data.datasets[i].pointHoverBorderColor = `${color})`
        console.log(data)
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
    const OutputCSV = () => {
        console.log("CSV出力をする")
        setShowImportCSV(true);
    }

    const options = {
        plugins:{
            legend:{
                onClick: function(){ return false; },
                position: 'bottom',
                labels:{
                    color: "#CCFFEE",
                    usePointStyle: true,
                    boxWidth: 20,
                    font:{
                        size: 18,
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

    const Radar = () => {
        const canvasRef = useRef(null);
        useEffect(() => {
            const element = canvasRef.current;
            console.log(element)
            if (!element) return;
            Chart.register(
                RadialLinearScale,
                PointElement,
                LineElement,
                Filler,
                Tooltip,
                Legend
            );
            chart = new Chart(element, {type: 'radar',data,options});
            return () => chart.destroy();
        });
        return <canvas ref={canvasRef} />;
    };

    const hiddenData = (index) => {
        console.log("クリック")
        console.log(chart.data.datasets[index].hidden)
        if(chart.data.datasets[index].hidden === true){
            console.log("true")
            chart.data.datasets[index].hidden = false
        }else if(chart.data.datasets[index].hidden === false){
            console.log("false")
            chart.data.datasets[index].hidden = true    
        }else {}
        chart.update()
    }
    
    return (
        <div>
        <MenuBar />
        <div className='radar-container'>
            <div className="radar-columnContainer">
                <Radar />
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
                            <div className='radar-data'>
                            <button className="radar-janome" onClick={() => hiddenData(index) } />
                                <div className="radar-datatitle-text">
                                    {data["title"]}
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div
                    style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: "30px",
                    }}
                >
                    <div style={{ margin: "10px 20px" }}>
                    <Link to ={"/"}>
                        <StartButton text={"Back"} buttonClick={OutputCSV} />
                    </Link>
                    </div>
                    <div style={{ margin: "10px 20px" }}>
                        <StartButton text={"Output CSV"} buttonClick={OutputCSV} />
                    </div>
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
    );
  }

  export default RadarChartComponent