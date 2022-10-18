// めも
// まだ"N_RadarChartPageとどちらを使うか悩み中"
// なので消さないで、ファイル名も後で治すからね

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

const RadarChartComponent = (props) => {
    const data = [
        {
          subject: "CPU SCORE",
          A: 120,
          B: 110,
          fullMark: 150
        },
        {
          subject: "GPU SCORE",
          A: 98,
          B: 130,
          fullMark: 150
        },
        {
          subject: "COST",
          A: 86,
          B: 130,
          fullMark: 150
        },
        {
          subject: "STATUS",
          A: 99,
          B: 100,
          fullMark: 150
        }
      ];
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid/>
      <PolarAngleAxis dataKey="subject"/>
      <PolarRadiusAxis/>
      <Radar
        name="Radar Chart"
        dataKey="B"
        stroke="#ededed"
        fill="#ededed"
        fillOpacity={0.6}
      />
    </RadarChart>
  )
}

export default RadarChartComponent