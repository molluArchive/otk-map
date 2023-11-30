import { useNavigate } from "react-router-dom";

/** */
const MainHeader = () => {
  const navigate = useNavigate();
  return (
    <header>
      <button
        onClick={() => {
          navigate("/main");
        }}>
        메인화면
      </button>
      <button
        onClick={() => {
          navigate("/kk");
        }}>
        준비중1
      </button>
      <button
        onClick={() => {
          navigate("/aa");
        }}>
        준비중2
      </button>
    </header>
  );
};

export default MainHeader;
