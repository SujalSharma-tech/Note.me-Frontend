import logo from "../../../../assets/images/Logo.png";
import "../../../../styles/left.scss";
import google_logo from "../../../../assets/images/Group.png";
import enter_logo from "../../../../assets/images/log-in 1.png";
const LoginForm = () => {
  return (
    <>
      <div className="login-container-buttons">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div className="logo_text">
            NOTE.<span>me</span>
          </div>
        </div>
        <div className="login-buttons">
          <button className="google-btn">
            <img src={google_logo} alt="google" />
            Join with Google
          </button>
          <div className="join_anonymous">
            <div className="line"></div>
            <div className="or">or join anonymously</div>
            <div className="line"></div>
          </div>
          <div className="input_container">
            <input type="text" placeholder="Type your secret codename" />
          </div>
          <button className="enter_anonymous">
            <img src={enter_logo} alt="enter" />
            Join Anonymously
          </button>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
