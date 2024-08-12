import { Text } from "@/Components/text";
import {PlusOutlined } from "@ant-design/icons";
import { useDroppable, UseDroppableArguments } from "@dnd-kit/core";

import { Badge, Button, Space } from "antd";


type Props = {
  id: string;
  title: string;
  description?: React.ReactNode;
  count: number;
  data: UseDroppableArguments["data"];
  onAddClick?: (args: { id: string }) => void;
};

export const KanbanColum = ({
  children,
  id,
  title,
  description,
  count,
  data,
  onAddClick,
}: React.PropsWithChildren<Props>) => {
  const { isOver, setNodeRef, active } = useDroppable({
    id,
    data,
  });

  const onAddClickHandler = () => {
    onAddClick?.({ id });
  };

  return (
    <div
      ref={setNodeRef}
      style={{ display: "flex", flexDirection: "column", padding: "0 16px" }}
    >
      <div style={{ padding: "12px" }}>
        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Space>
            <Text
              ellipsis={{ tooltip: title }}
              strong
              size="xs"
              style={{
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                backgroundColor: "rgba(0,0,0,0.1)",
              }}
            >
              {title}
            </Text>
            {!!count && <Badge count={count} color="pink" />}
          </Space>
          <Button
            shape="circle"
            icon={<PlusOutlined />}
            onClick={onAddClickHandler}
          />
        </Space>
        {description}
      </div>

      <div
        style={{
          flex: "1",
          overflowY: active ? "unset" : "scroll",
          border: "24px dashed transparent",
          borderColor: isOver ? "#000040" : "transparent",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
