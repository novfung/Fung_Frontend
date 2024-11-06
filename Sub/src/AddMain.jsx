import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

function AddMain() {
  const [form, setForm] = useState({
    userId:"",
    data:"",
    title:"",
    content:"",
  })

  const feed_id = "fedd-id"

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await axios.get(`http://localhost:8080/feed/${feed_id}`)
        alert("성공")
        console.log(response.data);

        setForm({
          userId:response.data.userId,
          data:response.data.data,
          title:response.data.title,
          content:response.data.content
        })
      } catch (error){
        alert('실패')
        console.log(error)
      }
    };

    getData();
  }, [feed_id])
  return (
    <div>
      <div>{form.userId}</div>
      <div>{form.data}</div>
      <div>{form.title}</div>
      <div>{form.content}</div>
    </div>
  );
}

export default AddMain;
