import { DollarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { Text } from "../text";
import { config } from "process";
import { Area, AreaConfig } from "@ant-design/plots";

const DealsChart = () => {

  // const {data } = uselistDealsQuery({})
  const config: AreaConfig ={
    data:[]
  }
  return (
    <Card
    headStyle={{padding:'8px 16px'}}
    bodyStyle={{padding:'24px 24px 0 24px'}}
      style={{
        height: "100%",
        alignItems:'center',
        gap:"8px"
      }}
      title={
        <div>
          <DollarOutlined/>
          <Text size="sm"style={{marginLeft:'0.5rem'}}>Deals Chart</Text>
        </div>
      }
    >
      <Area {...config} height={325} />
    </Card>
  );
};

export default DealsChart;
