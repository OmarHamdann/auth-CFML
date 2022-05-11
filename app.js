$("#table").hide();

const login = () => {
  let userName = $("#username").val();
  let password = $("#password").val();
  $.ajax({
    url: "http://localhost/test/auth.cfc?method=auth",
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
    data: {
      NAME: userName,
      PASSWORD: password,
    },
  });
};

const searchUser = () => {
  let nameUser = $("#search").val();
  $.ajax({
    url: "http://localhost/test/auth.cfc?method=search",
    success: (result) => {
      var newResult = $.parseJSON(result);

      if (newResult.MESSAGE == "failure") {
        $("#table").hide();
      } else {
        $("h3").hide();
        $("#table").show();
        console.log(newResult.RESULT.DATA[0][3]);
        $("#id").text(newResult.RESULT.DATA[0][0]);
        $("#firstName").text(newResult.RESULT.DATA[0][1]);
        $("#lastName").text(newResult.RESULT.DATA[0][2]);
        $("#passwordUser").text(newResult.RESULT.DATA[0][3]);
        $("#phone").text(newResult.RESULT.DATA[0][4]);
        $("#date").text(newResult.RESULT.DATA[0][5]);
        $("#age").text(newResult.RESULT.DATA[0][6]);

        console.log("done : " + result);
      }
    },
    error: (err) => {
      $("h2").text("Ajax error");
      console.log(err.statusText);
    },
    data: {
      NAME: nameUser,
    },
  });
};

const enterKeyLogin = (e) => {
  if (e.keyCode == 13) {
    login();
  }
};
const enterKeySearch = (e) => {
  if (e.keyCode == 13) {
    searchUser();
  }
};

$(document).ready(() => {
  $("#login").click(() => login());
  $("#username").keypress(enterKeyLogin);

  $("#password").keypress(enterKeyLogin);
  $("#search").keypress(enterKeySearch);
  $("#search_user").click(() => searchUser());
});
