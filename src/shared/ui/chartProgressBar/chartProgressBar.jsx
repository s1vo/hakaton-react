import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from "chart.js";
import { Pie, PolarArea } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

export const ChartProgressBar = ({ type, props }) => {
    const config = {
        labels: props.map((data) => data.label),
        datasets: [
            {
                label: "% владения",
                data: props.map((data) => data.value),
                backgroundColor: props.map((data) => data.color),
                borderColor: props.map(() => "black"),
                borderWidth: 1,
            },
        ],
    };
    switch (type) {
        case "pie":
            return <Pie data={config} />;
        case "polar":
            return <PolarArea data={config} />;
        default:
    }
};