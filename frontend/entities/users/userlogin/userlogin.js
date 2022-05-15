const login = () => {
  let userName = $("#username").val();
  let password = $("#password").val();

  var args = {
    ARGS: JSON.stringify({
      NAMEUSER: userName,
      PASSWORD: password,
    }),
  };
  $.ajax({
    url: "backend/entities/users/userlogin/loginFactory.cfc?method=auth",
    data: args,
    async: true,
    success: (result) => {
      var newResult = $.parseJSON(result);

      if (newResult.MESSAGE == "success") {
        Swal.fire({
          icon: "success",
          title: "welcome " + newResult.RESULT.DATA[0][1],
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "username or password is incorrect",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    error: (err) => {
      $("h2").text("Ajax error");
      console.log(err.statusText);
    },
  });
};

const enterKeyLogin = (e) => {
  if (e.keyCode == 13) {
    login();
  }
};

$(document).ready(() => {
  $("#login").click(() => login());
  $("#username").keypress(enterKeyLogin);

  $("#password").keypress(enterKeyLogin);
});
