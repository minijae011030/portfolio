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

    // const res = await vote({ selected });

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
        marginTop: "100px",
      }}
    >
      <h2 style={{ fontSize: "30px", fontWeight: "1000" }}>소주🍶 vs 맥주🍺</h2>
      <p style={{ fontSize: "20px", fontWeight: "1000" }}>어떤 주종?</p>

      <div
        style={{
          marginTop: "100px",
        }}
      >
        <label style={{ fontSize: "20px" }}>
          <input type="radio" name="vote" value={1} onChange={handleSelect} />
          소주🍶
        </label>
        <label style={{ marginLeft: "15px", fontSize: "20px" }}>
          <input type="radio" name="vote" value={2} onChange={handleSelect} />
          맥주🍺
        </label>
      </div>

      <button
        onClick={handleVote}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          cursor: "pointer",
          backgroundImage: "linear-gradient(to right, green, brown)",
          color: "white",
          width: "300px",
          height: "70px",
          borderRadius: "5px",
          border: "none",
          fontSize: "30px",
        }}
      >
        투표하기
      </button>
    </div>
  );
}

export default Home;
