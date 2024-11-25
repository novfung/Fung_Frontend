import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./component/header";

function MainPage() {
  return (
    <Main>
      <Head>
        <Header />
        <LoginJoin>
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <Loginbutton>로그인</Loginbutton>
          </Link>
          <Link to="/JoinPage" style={{ textDecoration: "none" }}>
            <JoinButton>회원가입</JoinButton>
          </Link>
        </LoginJoin>
      </Head>
    </Main>
  );
}

export default MainPage;

const Main = styled.div`
  margin: 0%;
  padding: 0%;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
`;

const LoginJoin = styled.div`
  width: 350px;
  display: flex;
  justify-content: start;
`;

const Loginbutton = styled.button`
  width: 100px;
  height: 50px;
  font-size: 15px;
  font-weight: 700;
  border: none;
  background-color: #fff;
  margin-left: 10px;
  border-radius: 10px;
`;

const JoinButton = styled.button`
  width: 100px;
  height: 50px;
  font-size: 15px;
  font-weight: 700;
  border: none;
  background-color: #71f2cd;
  margin-left: 10px;
  border-radius: 10px;
  color: #fff;
`;