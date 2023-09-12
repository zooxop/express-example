const express = require("express");
const cors    = require("cors");   
const mysql   = require("mysql");  
const app     = express();
const PORT    = 3001; // 포트번호 설정

// MySQL 연결
const db = require("../db/db")

app.use(cors({
    origin: "*",                // 출처 허용 옵션
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))

// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true })) 

// 서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

app.get("/api/list", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  
  const sqlQuery = "SELECT * FROM list";
  
  db.query(sqlQuery, (err, result) => {
      res.send(result);
  });
});