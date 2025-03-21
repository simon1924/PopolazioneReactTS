import { Bar } from "react-chartjs-2";
import "../App.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type chartComponentProps = {
    datiPerGrafico: string[][];
}


function ChartComponent({ datiPerGrafico }: chartComponentProps) {

    // console.log("dati per grafico");
    // console.log(datiPerGrafico);



    return (
        <>
            <div className="chart">
                <Bar
                    data={{
                        labels: datiPerGrafico[0],
                        datasets: [
                            {
                                label: "population",
                                data: datiPerGrafico[1],
                                backgroundColor: "rgba(75, 192, 192)",
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderWidth: 1,
                            }
                        ]
                    }}>

                </Bar>


            </div>
        </>

    );

}

export default ChartComponent;