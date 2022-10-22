import { Radar } from "react-chartjs-2";

const Chart = ({ data, options, onUpdate }) => {

  return (
    <div>
        <a onClick={onUpdate}>
            Update plot
        </a>
        <Radar data={data} options={options} />
    </div>
  );
};

export default Chart;