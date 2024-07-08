import LoginForm from "./sections/form/LoginForm";
import LoginLeft from "./sections/left/LoginLeft";

const Login = () => {
  return (
    <div className="login-container">
      <LoginLeft />
      <LoginForm />
    </div>
  );
};

export default Login;
