import React from "react";
import WeeklySales from "./WeeklySales";
import BestSalesProducts from "./BestSalesProducts";

type Props = {};

export default function DashboardCharts({}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-8">
      <WeeklySales />
      <BestSalesProducts />
    </div>
  );
}
