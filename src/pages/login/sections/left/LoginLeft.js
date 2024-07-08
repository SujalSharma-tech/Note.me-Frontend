import workingman from "../../../../assets/images/manworking.png";

const LoginLeft = () => {
  return (
    <div className="left_container ">
      <img src={workingman} alt="something" />
      <div className="textbox">
        <h1 className="text-center">Keep life simple</h1>
        <div className="para">
          Store all your notes in a simple and intuitive app that helps you
          enjoy what is most important in life.
        </div>
      </div>
    </div>
  );
};
export default LoginLeft;
