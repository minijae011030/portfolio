import React, { useEffect, useState } from "react";
import getResult from "./service/getResult.service"; // API 요청 함수

const Result = () => {
  const [voteResult, setVoteResult] = useState({
    result1: 0,
    result2: 0,
    total: 0,
  });

  // 서버에서 데이터 가져오기
  const fetchResult = async () => {
    const result = await getResult();

    setVoteResult(result);
  };

  useEffect(() => {
    fetchResult();
  }, []);

  // 투표 비율 계산
  const result1Percentage = voteResult.total
    ? ((voteResult.result1 / voteResult.total) * 100).toFixed(1)
    : 0;
  const result2Percentage = voteResult.total
    ? ((voteResult.result2 / voteResult.total) * 100).toFixed(1)
    : 0;

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <h2>📊 투표 결과</h2>

      <p>
        🐶 1: {voteResult.result1}표 ({result1Percentage}%)
      </p>
      <div
        style={{
          background: "#eee",
          height: "20px",
          width: "100%",
          borderRadius: "5px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "0",
            height: "100%",
            background: "#3498db",
            width: `${result1Percentage}%`,
            transition: "width 0.5s",
          }}
        />
      </div>

      <p>
        🐱 2: {voteResult.result2}표 ({result2Percentage}%)
      </p>
      <div
        style={{
          background: "#eee",
          height: "20px",
          width: "100%",
          borderRadius: "5px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "0",
            height: "100%",
            background: "#e67e22",
            width: `${result2Percentage}%`,
            transition: "width 0.5s",
          }}
        />
      </div>

      {/* 총 투표 수 */}
      <p style={{ marginTop: "15px", fontWeight: "bold" }}>
        총 투표 수: {voteResult.total}표
      </p>
    </div>
  );
};

export default Result;
