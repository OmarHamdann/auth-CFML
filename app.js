const login = () => {
  let userName = $("#username").val();
  let password = $("#password").val();
  $.ajax({
    url: "http://localhost/test/test1/index.cfc?method=test",
    success: (result) => {
      var newResult = $.parseJSON(result);
      console.log(newResult.RESULT.DATA);
      if (newResult.MESSAGE == "success") {
        Swal.fire({
          icon: "success",
          title: "wlecome" + newResult.RESULT.DATA,
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

$(document).ready(() => {
  $("#login").click(() => login());
});
