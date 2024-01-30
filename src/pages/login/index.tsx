import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import useStore from "store";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { loginStore } = useStore();

  const onFinish = async (values: any) => {
    const { mobile, code } = values;
    try {
      await loginStore.login({ mobile, code });
      navigate("/");
    } catch (e) {
      // message.error(e.response?.data?.message || '登录失败')
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex justify-center items-center h-full">
      <Form validateTrigger={["onBlur", "onChange"]} onFinish={onFinish}>
        <h1>登录</h1>
        <Form.Item
          name="mobile"
          rules={[
            {
              pattern: /^1[3-9]\d{9}$/,
              message: "手机号码格式不对",
              validateTrigger: "onBlur",
            },
            { required: true, message: "请输入手机号" },
          ]}
        >
          <Input size="large" placeholder="请输入手机号" />
        </Form.Item>
        <Form.Item
          name="code"
          rules={[
            { len: 6, message: "验证码6个字符", validateTrigger: "onBlur" },
            { required: true, message: "请输入验证码" },
          ]}
        >
          <Input size="large" placeholder="请输入验证码" maxLength={6} />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox className="login-checkbox-label">
            我已阅读并同意「用户协议」和「隐私条款」
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
