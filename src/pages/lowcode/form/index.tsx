import { asyncScript } from "./script";
import { useState, useEffect } from "react";
import { UAButton } from "pages/lowcode/widgets/UAButton";
import { Input, Form } from "antd";
import FormGenerator from "./gen";
const CLIENT_SCRIPT = [clientScript1, clientScript2, clientScript3];
import { clientScript1, clientScript2, clientScript3 } from "./script";
import exec from "../excutor/exec";

export const LowCodeForm = () => {
  const [form] = Form.useForm();
  useEffect(() => {
    console.log("useEffect");
  }, []);

  const onValuesChange = (changedValues: any, value: any) => {
    CLIENT_SCRIPT.forEach((item) => {
      exec(item);
    });
  };

  return (
    <div>
      <UAButton script={asyncScript}>点击执行异步脚本</UAButton>
      <div>
        <Form
          form={form}
          scrollToFirstError={true}
          labelCol={{
            style: {
              width: "150px",
              paddingLeft: "10px",
            },
          }}
          labelWrap={true}
          onValuesChange={onValuesChange}
        >
          <FormGenerator form={form} />
        </Form>
      </div>
    </div>
  );
};
