import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <Link to="/Login" style={{ textDecoration: "none" }}>
        <button>회원가입</button>
      </Link>
      <Link to="/JoinPage" style={{ textDecoration: "none" }}>
        <button>로그인</button>
      </Link>
    </div>
  );
}

export default MainPage;
