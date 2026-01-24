import { Form, Input } from "antd";

const Login = () => {
  const input_style: string = "h-[40px] mt-2 border-[#46A358]";
  const input_input: string =
    "h-[40px] border rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer";

  return (
    <div className="w-4/5 m-auto">
      <div className="mt-5 mb-2">
        <p>Enter your email and password to login.</p>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "please input your email",
            },
          ]}
        >
          <Input
            type="email"
            placeholder="almananun_uxui@gmail.com"
            className={input_style}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "please input your password",
            },
          ]}
        >
          <Input.Password
            placeholder="*********"
            className={input_style}
          />
        </Form.Item>
        <p className="text-end mt-2 text-[#46A358] text-sm cursor-pointer">
          forgot password?
        </p>
        <button className="bg-[#46A358] w-full mt-4 text-white h-10 rounded-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
