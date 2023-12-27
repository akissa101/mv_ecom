import CustomDataTable from "@/components/CustomDataTable";
import Heading from "@/components/backend/Heading";
import LargeCards from "@/components/backend/cards/LargeCards";
import SmallCards from "@/components/backend/cards/SmallCards";
import DashboardCharts from "@/components/backend/charts/DashboardCharts";
import React from "react";

type Props = {};

function Dashboard({}: Props) {
  return (
    <div>
      <Heading title="Dashboard Overviow" />
      {/* Large cards */}
      <LargeCards />
      {/* small card */}
      <SmallCards />
      {/* charts */}
      {/* <DashboardCharts /> */}
      {/* recent orders table */}
      {/* <CustomDataTable /> */}
    </div>
  );
}

export default Dashboard;
