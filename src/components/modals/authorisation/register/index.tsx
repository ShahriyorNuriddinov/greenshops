import { Button, Form, Input, Typography, Divider } from "antd";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import { Loader } from "lucide-react";
import { notificationApi } from "../../../../generic/notificationApi";
import {
  useRegisterMutation,
  useRegisterWithGoogleMutation,
} from "../../../../hooks/useQueryAction";

const { Text } = Typography;

const Register = () => {
  const notify = notificationApi();
  const { mutate, isPending } = useRegisterMutation();
  const { mutate: mutateGoogle } = useRegisterWithGoogleMutation();

  const register = (e: {
    email: string;
    password: string;
    name: string;
    surname: string;
    confirm_password: string;
  }) => {
    if (e.password !== e.confirm_password) {
      return notify("wrong_confirm_password");
    }
    mutate(e);
  };

  return (
    <div className="w-4/5 m-auto">
      <div className="mt-5 mb-2">
        <Text className="block text-center mb-6 text-gray-500 text-sm sm:text-base">
          Enter your name, email, and password to register.
        </Text>

        <Form layout="vertical" onFinish={register}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input
              placeholder="Enter your name"
              size="large"
              className="rounded"
              autoComplete="off"
            />
          </Form.Item>

          <Form.Item
            name="surname"
            rules={[{ required: true, message: "Please enter your surname!" }]}
          >
            <Input
              placeholder="Enter your surname"
              size="large"
              className="rounded"
              autoComplete="off"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input
              placeholder="Enter your email address"
              size="large"
              className="rounded"
              autoComplete="off"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              size="large"
              className="rounded"
            />
          </Form.Item>

          <Form.Item
            name="confirm_password"
            rules={[
              { required: true, message: "Please confirm your password!" },
            ]}
          >
            <Input.Password
              placeholder="Confirm your password"
              size="large"
              className="rounded"
            />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              size="large"
              className="w-full rounded flex items-center justify-center gap-2"
              style={{
                backgroundColor: "#46A358",
                borderColor: "#46A358",
                color: "white",
              }}
              disabled={isPending}
            >
              {isPending ? <Loader className="animate-spin" size={20} /> : "Register"}
            </Button>
          </Form.Item>
        </Form>

        <Divider plain className="text-gray-400 text-sm">Or register with</Divider>

        <div className="flex flex-col gap-3">
          <Button
            icon={<GoogleOutlined />}
            block
            size="large"
            className="border border-gray-300 text-black"
            onClick={() => mutateGoogle()}
          >
            Register with Google
          </Button>

          <Button
            icon={<FacebookFilled />}
            block
            size="large"
            className="border border-gray-300 text-black"
          >
            Register with Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
