let a = 10;
let b = "10";
console.log(a == b); // true (because == allows type conversion)
console.log(a === b); // false (strict comparison, different types)

// Correct username and password
const correctUsername = "admin";
const correctPassword = "admin123";

const Login = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  CheckUser(username, password);
};

const CheckUser = (username, password) => {
  if (username === "" || password === "") {
    alert("โปรดกรอกข้อมูลให้ครบถ้วน");
    return;
  }

  if (username === correctUsername && password === correctPassword) {
    alert("เข้าสู่ระบบสำเร็จ!");
  } else {
    alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
  }
};
