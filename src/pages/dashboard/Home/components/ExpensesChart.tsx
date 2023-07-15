// Dependencies
import { FC, useMemo } from "react";

// Chart
import { Bar } from "react-chartjs-2";

// Hooks
import useChart from "@/hooks/useChart";
import useNumbers from "@/hooks/useNumbers";

// Utils
import { themeColors } from "@/utils/colors";

const SalesChart: FC = () => {
  const { createDataObject, createDatasetObject, createDatasetsArray, createOptionsObject } = useChart();
  const { randNumbers } = useNumbers();
  const expensesData = randNumbers(1000, 23420, false, 7);

  const chartOrdersDataset = useMemo(() => createDatasetObject({
    ...createDatasetObject(),
    label: "Expenses",
    data: expensesData,
    backgroundColor: [`${themeColors.success}`],
    borderWidth: 0
  }), []);

  const chartData = useMemo(() => createDataObject({
    ...createDataObject(),
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: createDatasetsArray([chartOrdersDataset])
  }), [])

  const chartOptions = createOptionsObject({
    ...createOptionsObject(),
    scales: {
      y: {
        ...createOptionsObject().scales.y,
        grid: { display: false, drawOnChartArea: false, drawTicks: false },
      },
      x: {
        ...createOptionsObject().scales.x,
        grid: { display: false, drawOnChartArea: true, drawTicks: false }
      }
    },
    plugins: { legend: { display: false, position: "bottom", labels: { padding: 10, usePointStyle: true } } }
  });

  return (
    <div className="card h-full">
      <div className="card-header">
        <h3 className="card-title text-lg mb-1">Weekly Expenses</h3>
      </div>
      <div className="card-body flex items-center">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  )
}

export default SalesChart;