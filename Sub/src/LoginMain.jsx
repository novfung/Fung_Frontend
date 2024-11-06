import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LoginMain(){
  return(
    <div>
      <div>
        <Link to='/MyPage' style={{textDecoration : 'none'}}>
          <button>마이 페이지</button>
        </Link>
        <Link to='/Add' style={{textDecoration : 'none'}}>
          <button>추가</button>
        </Link>
        <Link to="/AddMain" style={{textDecoration:'none'}}>
          <div>게시물</div>
        </Link>
      </div>
    </div>
  );
}

export default LoginMain;