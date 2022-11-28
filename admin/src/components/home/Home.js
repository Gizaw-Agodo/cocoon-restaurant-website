import Topbar from "../appbar/Appbar";
import Sidebar from "../sidebar/Sidebar";
import WidgetSm from "../widjegSm/widjetSm";
import "./home.css";
// import WidgetLg from "../../components/widgetLg/WidgetLg";
// import { useEffect, useMemo, useState } from "react";

export default function Home() {
  return (
    <div style={{ display: "flex", marginTop: 30 }}>
      <Sidebar />
      <div className="home">
        <div className="homeWidgets">
          <WidgetSm />
          {/* <WidgetLg /> */}
        </div>
      </div>
    </div>
  );
}
