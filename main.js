document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let user1 = document.getElementById("user").value.toLowerCase();
  let pass1 = document.getElementById("pass").value.toLowerCase();
  console.log(user1);
  if (user1 === "admin") {
    if (pass1 === "1234") {
      alert("Login Successful");
    } else {
      alert("Invalid Password");
    }
  } else {
    alert("Invalid Username");
  }
}
