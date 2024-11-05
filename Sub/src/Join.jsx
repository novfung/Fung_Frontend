import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    userId: "",
    userPass: "",
    userInterest: "",
    userBirth:"",
    userImg: null,
  });

  const handChange = e => {
    const {name, value} = e.target
    setForm((prev) => ({
      ...prev,
      [name] : name === "userImg" ? e.target.files[0] : value,
    }));
  }

  const nav = useNavigate();
  const LoginButton = () => {
    if (
      form.userId !== "" &&
      form.userPass !== "" &&
      form.userInterest !== "" &&
      form.userBirth !== "" &&
      form.userImg !== null
    ){
      const formData = new FormData()

      formData.append("account_id", form.userId)
      formData.append("password", form.userPass)
      formData.append("image_url",form.userImg)
      formData.append("interest",form.userInterest)
      formData.append("birth", form.userBirth)
      
      axios({
        method: "post",
        url: `http://localhost:8080/users/signup`,
        data: {
          account_id: form.userId,
          password: form.userPass,
          // image_url: form.userImg,
          birth : form.userBirth,
          interest: form.userInterest
        },
      })
      .then((result) => {
        alert("성공");
        console.log(result.data);
        nav("/JoinPage", { state: { form:form} });
      })
      .catch((error) =>{
        alert("실패")
        console.log(error)
      })
      } else {
      alert("다 입력 쳐 해라");
      }
    }
  
  
  return (
    <div>
      <div>
        <input type="text" name="userId" placeholder="로그인"  onChange={handChange}/>
        <input type="password" name="userPass" placeholder="비번" onChange={handChange}/>
        <input type="text" name="userInterest" placeholder="관심사" onChange={handChange}/>
        <input type="date" name="userBirth" placeholder="생일" onChange={handChange}/>
        <input name="userImg" type="file" onChange={handChange}/>
      </div>
      <div>
        <button onClick={LoginButton}>버튼</button>
      </div>
    </div>
  );
}
export default Login;
