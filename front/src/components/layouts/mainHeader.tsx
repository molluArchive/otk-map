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
        main
      </button>
      <button
        onClick={() => {
          navigate("/kk");
        }}>
        kk
      </button>
      <button
        onClick={() => {
          navigate("/aa");
        }}>
        aa
      </button>
    </header>
  );
};

export default MainHeader;
