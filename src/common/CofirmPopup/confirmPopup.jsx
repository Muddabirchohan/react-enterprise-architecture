import { Popconfirm } from "antd";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";

export default function ConfirmPopup({
  title,
  description,
  onConfirm,
  onCancel,
  okText,
  cancelText,
}) {
  return (
    <div>
      <Popconfirm
        title={title}
        description={description}
        onConfirm={onConfirm}
        onCancel={onCancel}
        okText={okText}
        cancelText={cancelText}
      >
        <DeleteOutlined style={{ fontSize: "18px", color: "#08c" }} />
      </Popconfirm>
    </div>
  );
}
