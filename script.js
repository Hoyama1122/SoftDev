const popup = document.getElementById("pop-up");
const popupTitle = document.getElementById("popup-title");
const popupDetail = document.getElementById("popup-detail");
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
    popupTitle.innerHTML = "Error";
    popupTitle.style.color = "red";
    popupDetail.innerHTML = "กรอกข้อมูลให้ครบถ้วน";
    popup.style.display = "block";
  } else if (username !== correctUsername && password !== correctPassword) {
      popupTitle.innerHTML = "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ";
      popupTitle.style.color = "red";
      popupDetail.innerHTML = "กรอกข้อมูลให้ถูกต้อง";
      popup.style.display = "block";
  } else {
      popupTitle.innerHTML = "Success";
      popupTitle.style.color = "green";
      popupDetail.innerHTML = "เข้าสู่ระบบสำเร็จ";
      popup.style.display = "block";
  }
};
const ClosePopup = () => {
  popup.style.display = "none";
};
