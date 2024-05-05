import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-gray-200">
        <LoginForm />
      </div>
      <div
        className="hidden lg:flex items-center w-1/2 justify-center h-full bg-gray-200"
        style={{ background: "#6f51bc" }}
      >
        <img src="images/login-img.png" />
      </div>
    </div>
  );
};

export default Login;
