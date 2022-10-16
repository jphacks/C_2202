import React from "react";
import { Radar } from "react-chartjs-2";
// const randomColor = require('../lib/randomColor')
// const randomScalingFactor = require('../lib/randomScalingFactor')


    const data = {
        labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running"
        ],
        datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(220,220,220,0.2)",
            pointBackgroundColor: "rgba(220,220,220,1)",
            data: [
            28, 48, 40, 19, 96, 27, 100
            ]
        }, {
            label: 'Hidden dataset',
            hidden: true,
            data: [
            28, 48, 40, 19, 96, 27, 100
            ]
        }, {
            label: "My Second dataset",
            backgroundColor: "rgba(151,187,205,0.2)",
            pointBackgroundColor: "rgba(151,187,205,1)",
            hoverPointBackgroundColor: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [
            28, 48, 40, 19, 96, 27, 100
            ]
        }
        ]
    }
    
const options = {
        legend: {
        position: 'top'
        },
        title: {
        display: true,
        text: 'Chart.js Radar Chart'
        },
        scale: {
        reverse: false,
        gridLines: {
            color: [
            'black',
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'indigo',
            'violet'
            ]
        },
        ticks: {
            beginAtZero: true
        }
        }
}

export default function RadarChart() {
    return(
        <div>
            <Radar data={data} options={options}/>
        </div>
    )
}