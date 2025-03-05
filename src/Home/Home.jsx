import { useState } from "react";
import vote from "./service/vote.service";
import { useNavigate } from "react-router-dom";

function Home() {
  // 투표 수 상태
  const [selected, setSelected] = useState(null);
  const navigation = useNavigate();
  // 라디오 버튼 선택
  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  // 투표 버튼 클릭
  const handleVote = async () => {
    if (!selected) {
      alert("항목을 선택해주세요!");
      return;
    }

    const res = await vote({ selected });

    navigation("/result");
    return;
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <h2>강아지 vs 고양이</h2>
      <p>어떤 동물을 더 좋아하시나요?</p>

      <div>
        <label>
          <input type="radio" name="vote" value={1} onChange={handleSelect} />
          강아지
        </label>
        <label style={{ marginLeft: "15px" }}>
          <input type="radio" name="vote" value={2} onChange={handleSelect} />
          고양이
        </label>
      </div>

      <button
        onClick={handleVote}
        style={{ marginTop: "15px", padding: "10px 20px", cursor: "pointer" }}
      >
        투표하기
      </button>
    </div>
  );
}

export default Home;
