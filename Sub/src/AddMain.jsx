import { useState, useEffect } from "react";
import axios from "axios";

function AddMain() {
  const [feedid, setFeedId] = useState([]);

  // 로컬스토리지에서 데이터를 가져오고 상태로 설정
  useEffect(() => {
    const JSONData = JSON.parse(localStorage.getItem("feeds")) || [];
    setFeedId(JSONData);
  }, []);

  console.log(typeof feedid); // feedid가 배열인지 확인

  // feedid가 업데이트되면 API 호출
  useEffect(() => {
    if (!feedid || feedid.length === 0) return;

    const AddMainSub = async () => {
      try {
        // feedid 배열의 첫 번째 아이템을 사용하여 API 호출
        const res = await axios.get(
          `http://3.36.53.67:8080/feed/2`
        );
        console.log("성공", res);
      } catch (error) {
        console.log("실패", error);
      }
    };

    AddMainSub();
  }, [feedid]);

  return (
    <div>
      {feedid.length === 0 ? (
        <p>ads</p> // feedid가 비어 있을 경우 "ads" 출력
      ) : (
        <ul>
          {feedid.map((feed, index) => {
            return (
              <div key={feed.key}>  
                {/* key는 feed.key로 설정 */}
                <li>
                  <h3>{feed.title}</h3>
                  <p>{feed.content}</p>
                </li>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default AddMain;
