"use client";

import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

type Props = {};

export default function WeeklyOrders({}: Props) {
  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: labels.map(() =>
              faker.datatype.number({ min: -1000, max: 1000 })
            ),
            borderColor: "rgb(0, 137, 132)",
            backgroundColor: "rgba(0, 137, 132, 0.2)",
          },
        ],
      },
    },
    {
      title: "Orders",
      type: "orders",
      data: {
        labels,
        datasets: [
          {
            label: "Orders",
            data: labels.map(() =>
              faker.datatype.number({ min: -1000, max: 1000 })
            ),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      },
    },
  ];

  const [displayChart, setDisplayChart] = useState(tabs[0].type);

  return (
    <div className="bg-slate-50 dark:bg-slate-800 border border-slate-400 shadow-md shadow-slate-600 damk:shadow-slate-700 dark:border-slate-700 p-3 rounded-lg">
      <h2 className="text-xl font-bold p-4">Weekly Orders</h2>

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab, i) => (
            <li key={i} className="me-2">
              <button
                onClick={() => setDisplayChart(tab.type)}
                className={
                  displayChart === tab.type
                    ? "inline-block p-4 text-orange-600 hover:border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500 focus:border-b-2"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300  dark:hover:text-gray-300 "
                }
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {tabs.map((tab, i) => {
        if (displayChart === tab.type) {
          return <Line options={options} data={tab.data} />;
        }
      })}
    </div>
  );
}
