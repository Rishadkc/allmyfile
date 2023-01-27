function signUp() {
  var username = document.getElementById("user-name").value;
//   console.log("user name:" + username);
  var email = document.getElementById("email").value;
//   console.log("email:" + email);
  var password = document.getElementById("password").value;
//   console.log("password:" + password);
  var confirmpassword = document.getElementById("confirm-password").value;
//   console.log("confirm password:" + confirmpassword);

  // let password = password
  // let confirmpassword= confirm-password;
  // console.log(password=confirm-password)

  // let user ={username:"value",email:"value",password:"value",confirmpassword:"value"}

  let user = {
    userName: username,
    email: email,
    password: password,
    confirmpassword: confirmpassword,
  };

  console.log(user);
}
