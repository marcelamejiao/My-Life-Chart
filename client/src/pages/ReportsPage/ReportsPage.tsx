import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, ChartOptions } from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import CategoryWeeklyReport from "../../models/categoryWeeklyReports";
import { getAllCategoryWeeklyReports } from "../../services/categoryWeeklyReports";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: ChartOptions = {
  responsive: true,
  scales: {
    x: {
      title: {
        color: 'rgb(3 105 161)',
        display: true,
        text: 'Week'
      }
    },
    y: {
      title: {
        color: 'rgb(3 105 161)',
        display: true,
        text: 'Kilometers'
      }
    }
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Kilometers ran per week in a Semester',
      color: 'rgb(3 105 161)'
    },
  },
};

const ReportsPage = () => {
  const [reports, setReports] = useState<CategoryWeeklyReport[]>([]);

  useEffect(() => {
    getAllCategoryWeeklyReports().then((reportData: CategoryWeeklyReport[]) => {
      setReports(reportData);
    })
  }, []);

  return (
    <>
      <Bar
        options={options}
        data={
          {
            labels: reports.map((report: CategoryWeeklyReport) => {
              return report.week;
            }),
            datasets: [
              {
                label: 'Km',
                data: reports.map((report: CategoryWeeklyReport) => {
                  return report.km;
                }),
                backgroundColor: 'rgba(231, 210, 251)'
              }
            ]
          }
        }
      />
    </>
  )
}

export default ReportsPage;