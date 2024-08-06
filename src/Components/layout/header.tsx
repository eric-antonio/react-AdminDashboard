import { Layout, Space } from "antd";
import LayoutProvider from ".";
import CurrentUser from "./current-user";

const HeaderComponent = () => {
  const headerStyles : React.CSSProperties ={
    background: '#FFF',
    display:'flex',
    justifyContent:'flex-end',
    padding:'0 24px',
    position:'sticky',
    top:'0',
    zIndex:'999'
  }
  return (
    <Layout.Header style={headerStyles}>
      <Space align="center" size={"middle"}>
        <CurrentUser />
      </Space>
    </Layout.Header>
  );
};

export default HeaderComponent;
