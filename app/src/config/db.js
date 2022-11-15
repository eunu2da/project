const mysql = require("mysql"); // mysql 모듈 로드
const dbInfo = {
  // mysql 접속 설정
  host: "localhost",
  user: "TESTUSER",
  password: "1234",
  database: "TESTDB",
};

// var connection = mysql.createConnection(dbInfo); // DB 커넥션 생성
// connection.connect(); // DB 접속

// var testQuery = "SELECT * FROM user";

// connection.query(testQuery, function (err, results, fields) {
//   // testQuery 실행
//   if (err) {
//     console.log(err);
//   }
//   console.log(results);
// });

// connection.end();

module.exports = {
  init: function () {
    return mysql.createConnection(dbInfo);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) console.error("mysql 연결 에러 : " + err);
      else console.log("mysql 연결 성공");
    });
  },
};
