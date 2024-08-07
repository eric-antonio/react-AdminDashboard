import Card from "antd/es/card/Card";
import React from "react";

const DashBoardLatestActivities = () => {
  return (
    <Card
      headStyle={{ padding: "16px" }}
      bodyStyle={{ padding: "0 1rem" }}
      title={
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        ></div>
      }
    ></Card>
  );
};

export default DashBoardLatestActivities;
