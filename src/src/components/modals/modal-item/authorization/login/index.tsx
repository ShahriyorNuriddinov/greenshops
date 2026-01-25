
import { Form, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { useLoginMutation } from "../../../../../hooks/useQuary/useQuaryAction";

const Login = () => {
  const input_style: string = "h-[40px] mt-2 border-[#46A358]";
  const icon_style: string =
    "h-[40px] border rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer";
  const {mutate , isPending} = useLoginMutation()
  const login = (e: { email: string; password: string }) => {
    mutate(e)
  };
  return (
    <div className="w-4/5 m-auto">
      <div className="mt-5 mb-2">
        <p>Enter your email and password to login.</p>
        <Form onFinish={login}>
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
            <Input.Password placeholder="*********" className={input_style} />
          </Form.Item>
          <p className="text-end mt-2 text-[#46A358] text-sm cursor-pointer">
            forgot password?
          </p>
          <button className="bg-[#46A358] w-full mt-4 text-white h-10 rounded-md">
          {isPending ? "Loading..." : "Login"}
          </button>
          <div className="flex items-center justify-center mt-5 mb-5 gap-4">
            <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
            <p className="w-[40%] text-[#3D3D3D] text-[13px]">
              or login with facebook
            </p>
            <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
          </div>
          <div className={`${icon_style} `}>
            <FcGoogle />
            <p>Login with Google</p>
          </div>{" "}
          <div className={`${icon_style} `}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9_1018)">
                <path
                  d="M13.3308 3.32083H15.1566V0.140826C14.8416 0.0974924 13.7583 -7.62939e-06 12.4966 -7.62939e-06C6.71993 -7.62939e-06 8.2916 6.54166 8.0616 7.49999H5.15576V11.055H8.06076V20H11.6224V11.0558H14.4099L14.8524 7.50083H11.6216C11.7783 5.14749 10.9874 3.32083 13.3308 3.32083Z"
                  fill="#3B5999"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_1018">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>Login with Facebook</p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
