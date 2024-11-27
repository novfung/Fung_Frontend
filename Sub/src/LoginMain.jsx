import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./component/header";
import styled from "styled-components";

function LoginMain() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const JSonData = JSON.parse(localStorage.getItem("feeds")) || [];
    setFeeds(JSonData);
  }, []);

  const onDataDelete = (key) => {
    // 선택한 항목을 제외한 배열 생성
    const notDeleted = feeds.filter((item) => item.key !== key);

    // key를 1부터 다시 할당
    const reordered = notDeleted.map((item, index) => ({
      ...item,
      key: index + 1, // 새로운 순서로 key 업데이트 (1부터 시작)
    }));

    // localStorage와 state 업데이트
    localStorage.setItem("feeds", JSON.stringify(reordered));
    setFeeds(reordered);

    alert("필드를 삭제합니다");
  };

  return (
    <div>
      <MainBody>
        <Header />
        <Add>
          <Link to="/Add" style={{ textDecoration: "none" }}>
            <Addbutton>추가</Addbutton>
          </Link>
        </Add>
      </MainBody>

      {feeds.length === 0 ? (
        <p>등록된 것이 없습니다</p>
      ) : (
        <FeedList>
          {feeds.map((feed) => (
            <FeedItem key={feed.key}>
              <h3>
                {feed.key}, {feed.title}
              </h3>
              <p>{feed.content}</p>
              <DeleteButton
                onClick={() => {
                  onDataDelete(feed.key);
                }}
              >
                삭제
              </DeleteButton>
            </FeedItem>
          ))}
        </FeedList>
      )}
    </div>
  );
}

export default LoginMain;

const MainBody = styled.div`
  display: flex;
`;

const Add = styled.div`
  width: 150px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Addbutton = styled.button`
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

const FeedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const FeedItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const DeleteButton = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  color: white;
  background-color: red;
  border-radius: 4px;
  text-align: center;
  margin-top: 10px;
`;
