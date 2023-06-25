import { Button, Popconfirm } from "antd";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";

export interface IConfirmPopup {
  title: string;
  description: string;
  onConfirm: any;
  onCancel: any;
  okText: string;
  cancelText: string;
  deleteType?: string;
}

export default function ConfirmPopup({
  title,
  description,
  onConfirm,
  onCancel,
  okText,
  cancelText,
  deleteType,
}: IConfirmPopup) {
  return (
    <div
      style={
        deleteType === "text"
          ? {
              display: "flex",
              justifyContent: "right",
              margin: "35px",
            }
          : {}
      }
    >
      <Popconfirm
        title={title}
        description={description}
        onConfirm={onConfirm}
        onCancel={onCancel}
        okText={okText}
        cancelText={cancelText}
      >
        {deleteType === "text" ? (
          <Button
            style={{
              backgroundColor: "white",
              color: "black",
              width: "10%",
              float: "right",
              margin: 10,
            }}
          >
            {" "}
            Empty Cart{" "}
          </Button>
        ) : (
          <DeleteOutlined style={{ fontSize: "18px", color: "#08c" }} />
        )}
      </Popconfirm>
    </div>
  );
}
