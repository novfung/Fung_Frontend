  import axios from "axios";
  import { useRef,useState } from "react";
  import { Link, useNavigate, useLocation } from "react-router-dom";

  function Add() {
    const [form, setForm] = useState({
      title: "",
      content: "",
      key:1
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const nav = useNavigate();
    
    const AddButton = () => {
      if (form.title !== "" && form.content !== "") {
        const accessToken = localStorage.getItem("accessToken");
        const feeds = JSON.parse(localStorage.getItem("feeds")) || []
        const newKey = feeds.length > 0 ? Math.max(...feeds.map(feed => feed.key))+1:1
        const newFeed = {...form, key: newKey}
        axios
          .post(`http://3.36.53.67:8080/feed`, JSON.stringify(newFeed), {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((res) => {
            console.log("성공", res);
            feeds.push(newFeed)
            nav("/LM");
            localStorage.setItem("feeds",JSON.stringify(feeds))
          })
          .catch((error) => {
            console.log("실패", error);
          });
        }else{
          console.log('모든 필드를 입력하세요')
        }
    };
    return (
      <div>
        <input
          placeholder="제목"
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          placeholder="내용"
          type="text"
          name="content"
          value={form.content}
          onChange={handleChange}
        />
        <Link to="/LM" style={{ textDecoration: "none" }}>
          <button>취소</button>
        </Link>
        <button onClick={AddButton}>추가</button>
      </div>
    );
  }

  export default Add;
