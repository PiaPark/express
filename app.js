// node_modules 에 있는 express 관련 파일을 가져온다.
const express = require('express');

// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express();

// 포트 넘버
const port = 3000;

// 경로 정의. HTTP 요청 이있을 때마다 호출 될 콜백 함수를 지정
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 서버를 시작
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})