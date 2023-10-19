import { Card, Form, Input, Button, Checkbox, message } from "antd";
import { useStore } from "@/store";
import { useNavigate } from "react-router-dom";

import logo from "@/assets/logo.png";
import "./index.scss";

const Login = () => {
  const navigate = useNavigate();
  const { loginStore } = useStore();

  async function onFinish(values) {
    console.log(values);
    // values：放置的是所有表单项中用户输入的内容
    // todo:登录
    const { mobile, code } = values;
    await loginStore.getToken({ mobile, code });
    // 跳转首页
    navigate("/", { replace: true });
    // 提示用户
    message.success("登录成功");
  }

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />

        {/* validateTrigger 指定校验触发时机的集合 */}
        <Form
          validateTrigger={["onBlur", "onChange"]}
          initialValues={{
            remember: true,
            mobile: "13811111111",
            code: "246810",
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="mobile" // 添加 name 属性，这样表单校验才会生效
            rules={[
              {
                required: true,
                message: "请输入手机号",
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "手机号码格式不对",
                validateTrigger: "onBlur",
              },
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
              {
                len: 6,
                message: "请输入6位密码",
                validateTrigger: "onBlur",
              },
            ]}
          >
            <Input size="large" placeholder="请输入密码" maxLength={6} />
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
      </Card>
    </div>
  );
};

export default Login;
