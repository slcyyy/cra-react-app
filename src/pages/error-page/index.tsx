import { Result, Button, Space } from "antd";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error)
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在"
      extra={
        <Space>
          <Button onClick={() => window.location.reload()}>刷新页面</Button>
          <Button
            onClick={() => {
              window.location.href = "/";
            }}
            type="primary"
          >
            返回首页
          </Button>
        </Space>
      }
    />
  );
}
