import { Popover, Button } from "antd";
import React from "react";
import CustomAvatar from "../custom-avatar";
import { useGetIdentity } from "@refinedev/core";
import { Text } from "../text";
import { useState } from "react";

import type { User } from "@/graphql/schema.types";
import { SettingOutlined } from "@ant-design/icons";

const CurrentUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: user } = useGetIdentity<User>();

  const content = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Text strong style={{ padding: "12px 20px" }}>
        {user?.name}
      </Text>
      <div >
        <Button
        style={{textAlign:'left'}}
        icon={<SettingOutlined />}
        type="text"
        block
        onClick={()=> setIsOpen(true)}
        >
          Account Settings
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Popover
        placement="bottomRight"
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
      >
        <CustomAvatar
          name={user?.name || ""}
          src={user?.avatarUrl || ""}
          size={32}
          style={{ cursor: "pointer" }}
        />
      </Popover>
    </>
  );
};

export default CurrentUser;
