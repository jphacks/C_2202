import { ResponsiveRadar } from '@nivo/radar'
import "../styles/radarChartPage.css"
import MenuBar from "../components/MenuBar"


export const MyResponsiveRadar = () => {
    const data = [
        {
          "taste": "fruity",
          "chardonay": 51,
          "carmenere": 22,
          "syrah": 24
        },
        {
          "taste": "bitter",
          "chardonay": 115,
          "carmenere": 118,
          "syrah": 98
        },
        {
          "taste": "heavy",
          "chardonay": 106,
          "carmenere": 96,
          "syrah": 85
        },
        {
          "taste": "strong",
          "chardonay": 78,
          "carmenere": 103,
          "syrah": 45
        },
        {
          "taste": "sunny",
          "chardonay": 118,
          "carmenere": 54,
          "syrah": 47
        }
    ]
    return(
    <div>
        <MenuBar />
        <div className='body'>
            <div className="right">
                <div className='p'>
                    <h2>Import Datas</h2>
                    <br/>
                </div>
            </div>
        <div className="columnContainer">
        <ResponsiveRadar
            data={data}
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
            keys={[ 'chardonay', 'carmenere', 'syrah' ]}
            itemTextColor = "#ebebeb"
            indexBy="taste"
            valueFormat=">-.2f"
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
        </div>
      </div>
    )
}