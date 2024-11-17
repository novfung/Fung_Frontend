import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function LoginMain() {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    const JSonData = JSON.parse(localStorage.getItem("feeds")) || [];
    setFeeds(JSonData);
  }, []);

  const onDataDelete = (key) => {
    const notDelete = feeds.filter((item)=> item.key !== key)
    localStorage.setItem('feeds',JSON.stringify(notDelete))
    setFeeds(notDelete)
    alert("필드를 삭제합니다")
  };

  return (
    <div>
      <Link to="/MyPage" style={{ textDecoration: "none" }}>
        <button>마이 페이지</button>
      </Link>
      <Link to="/Add" style={{ textDecoration: "none" }}>
        <button>추가</button>
      </Link>

      {feeds.length === 0 ? (
        <p>등록된 것이 없다</p>
      ) : (
        <ul>
          {feeds.map((feed, index) => {
            return (
              <div key={feed.key}>
                <Link to="/AddMain" style={{ textDecoration: "none" }}>
                  <li>
                    <h3>{feed.title}</h3>
                    <p>{feed.content}</p>
                  </li>
                </Link>
                <div onClick={() => {onDataDelete(feed.key);}}>삭제</div>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default LoginMain;
