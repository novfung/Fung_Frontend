import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    account_id: "",
    password: "",
  });

  const handleChange = e =>{
    const {name, value} = e.target
    setForm((prev) => ({
      ...prev,  
      [name] : value,
    }))
  }
  const nav = useNavigate()
  const LoginButton = () =>{
    if (form.account_id !== "" && form.password !== "") {
      axios
        .post(`http://3.36.53.67:8080/users/signin`, form, {
          headers: {
            "Content-Type": "application/json",
          },
        })  
        .then((res) => {
          console.log("성공", res);
          localStorage.setItem("accessToken", res.data.access_token);
          nav("/LM", { state: { form: form } });
        })
        .catch((error) => {
          console.log("실패", error);
        });
    }
}
  return (
    <div>
      <div>
        <input
          placeholder="아이디"
          name="account_id"
          type="text"
          onChange={handleChange}
        />
        <input
          placeholder="비번"
          name="password"
          type="password"
          onChange={handleChange}
        />
      </div>
      <button onClick={LoginButton}>버튼</button>
    </div>
  );
}

export default Login;
