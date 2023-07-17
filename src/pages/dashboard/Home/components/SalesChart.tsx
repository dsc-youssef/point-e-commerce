// Dependencies
import { FC, useMemo } from "react";

// Hooks
import useChart from "@/hooks/useChart";
import useNumbers from "@/hooks/useNumbers";

// Chart
import { Line } from "react-chartjs-2";

// Utils
import { themeColors } from "@/utils/colors";

// Custom Components
import Progress from "@/components/global/Progress";

const SalesChart: FC = () => {
  const { createDataObject, createDatasetObject, createOptionsObject, createDatasetsArray, createLinearGradient } = useChart();
  const { randNumbers } = useNumbers();

  const chartProductsSalesDataset = useMemo(() => createDatasetObject({
    ...createDatasetObject(),
    data: randNumbers(1000, 20421, true, 7),
    label: "Products",
    backgroundColor: createLinearGradient(`${themeColors.warning}10`, 'transparent'),
    borderWidth: 3,
    borderColor: themeColors.warning,
    pointBorderWidth: 3,
    pointStyle: "line",
    fill: true
  }), []);

  const chartOrdersSalesDataset = useMemo(() => createDatasetObject({
    ...createDatasetObject(),
    data: randNumbers(1000, 20421, true, 7),
    label: "Orders",
    backgroundColor: createLinearGradient(`${themeColors.danger}10`, "transparent"),
    borderWidth: 3,
    borderColor: themeColors.danger,
    pointBorderWidth: 3,
    pointStyle: "line",
    fill: true
  }), []);

  const chartData = useMemo(() => createDataObject({
    ...createDataObject(),
    datasets: createDatasetsArray([chartProductsSalesDataset, chartOrdersSalesDataset]),
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  }), []);


  const chartOptions = createOptionsObject({
    ...createOptionsObject(),
    animations: {
      tension: {
        duration: 2000,
        easing: 'easeInQuad',
        from: .5,
        to: 1,
        loop: true
      }
    },
    maintainAspectRatio: false,

    scales: {
      y: {
        ...createOptionsObject().scales.y,
        grid: { display: false, drawOnChartArea: false, drawTicks: true },
      },
      x: {
        ...createOptionsObject().scales.x,
        grid: { display: false, drawOnChartArea: true, drawTicks: true }
      }
    },
    plugins: { legend: { display: true, position: "bottom", labels: { ...createOptionsObject().plugins.legend.labels, padding: 10, usePointStyle: false } } }
  });

  return (
    <div className="card card-container">
      <div className="card-header">
        <h3 className="card-title text-lg">Weekly Sales</h3>
        <p className="card-paragraph mt-1">Weekly Sales ( Orders & Products ).</p>
      </div>
      <div className="card-body max-h-[400px] flex items-center">
        <Line height={375} data={chartData} options={chartOptions} />
      </div>
      <div className="card-footer grid grid-cols-1 md:grid-cols-2 gap-7">
        <article className="details-block">
          <i className="fal fa-ticket icon bg-dash-danger text-white" />
          <div className="state">
            <h4 className="title">Orders</h4>
            <p className="font-medium">$ {randNumbers(0, 123124, true, 1)}</p>
            <Progress fill={randNumbers(0, 100, true, 1)[0]} size="sm" className="" />
          </div>
        </article>
        <article className="details-block">
          <i className="fal fa-gift icon bg-dash-warning text-white" />
          <div className="state">
            <h4 className="title">Products</h4>
            <p className="font-medium">$ {randNumbers(0, 123124, true, 1)}</p>
            <Progress fill={randNumbers(0, 100, true, 1)[0]} size="sm" className="" />
          </div>
        </article>
      </div>
    </div>
  )
}

export default SalesChart;
