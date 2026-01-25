import { Button, Form, Input, Typography, Divider } from "antd";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import { Loader } from "lucide-react";
import {
  useLoginMutation,
  useLoginWithGoogleMutation,
} from "../../../../hooks/useQueryAction";

const { Text } = Typography;

const Login = () => {
  const { mutate, isPending } = useLoginMutation();
  const { mutate: mutateGoogle } = useLoginWithGoogleMutation();

  const login = (e: { email: string; password: string }) => {
    mutate(e);
  };

  return (
    <div className="w-4/5 m-auto">
      <div className="mt-5 mb-2">
        <Text className="block text-center mb-6 text-gray-500 text-sm sm:text-base">
          Enter your email and password to login.
        </Text>

        <Form layout="vertical" onFinish={login}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input
              placeholder="yourname@email.com"
              size="large"
              className="rounded"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              placeholder="************"
              size="large"
              className="rounded"
            />
          </Form.Item>

          <div className="flex justify-end mb-4">
            <a href="#" className="text-[#46a358] hover:underline text-sm">
              Forgot Password?
            </a>
          </div>

          <Form.Item>
            <Button
              htmlType="submit"
              size="large"
              className="w-full rounded flex items-center justify-center"
              style={{
                backgroundColor: "#46A358",
                borderColor: "#46A358",
                color: "white",
              }}
            >
              {isPending ? <Loader className="animate-spin" /> : "Login"}
            </Button>
          </Form.Item>
        </Form>

        <Divider plain className="text-gray-400 text-sm">
          Or login with
        </Divider>

        <div className="flex flex-col gap-3">
          <Button
            icon={<GoogleOutlined />}
            block
            size="large"
            className="border border-gray-300 text-black"
            onClick={() => mutateGoogle()}
          >
            Login with Google
          </Button>
          <Button
            icon={<FacebookFilled />}
            block
            size="large"
            className="border border-gray-300 text-black"
          >
            Login with Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
