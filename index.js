const loginForm = document.getElementById("login");
console.log(loginForm);
let loginBtn = document.getElementById("login_button");
console.log(loginBtn);

let userName = document.getElementById("user_name");
console.log(userName);
let password = document.getElementById("password");
console.log(password);

loginBtn.addEventListener("click", click);

function click(event) {
  event.preventDefault();
  let pass = password.value;
  let user = userName.value;
  console.log(typeof user);
  if (user == pass) {
    console.log("same");
    location.href = "./order/order.html";
  }
}
