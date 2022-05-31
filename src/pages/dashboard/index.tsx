import React from "react";
import Chart from "../../components/chart/Chart";
import FeauturedInfo from "../../components/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummyData";
import "./style.css";
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="">
      <FeauturedInfo />
      <Chart data={userData} title="Revanue" grid dataKey="Active User" />
    </div>
  );
};

export default Dashboard;
