import { Button } from "antd";
import { AuthWrapper } from "components";
const Photo = () => {
  return (
    <div>
      <AuthWrapper authCode="40101">
        <Button type="primary">人脸照导入</Button>
      </AuthWrapper>
    </div>
  );
};

export default Photo;
