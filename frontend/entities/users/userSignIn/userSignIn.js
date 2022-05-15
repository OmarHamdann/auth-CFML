const signin = () => {
  let firstName = $("#firstName").val();
  let lastName = $("#lastName").val();
  let password = $("#passwordSignIn").val();
  let mobile = $("#mobile").val();
  let date = $("#date").val();
  if (
    firstName == "" ||
    lastName == "" ||
    password == "" ||
    mobile == "" ||
    date == ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Please fill all the fields",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    var args = {
      ARGS: JSON.stringify({
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        PASSWORD: password,
        MOBILE: mobile,
        DATE: date,
      }),
    };

    $.ajax({
      url: "backend/entities/users/usersignin/signinFactory.cfc?method=createUser",
      type: "POST", // GET, POST
      data: args,
      async: true,

      success: (result) => {
        var newResult = $.parseJSON(result);
        console.log(newResult);
        if (newResult.MESSAGE == "success") {
          Swal.fire({
            icon: "success",
            title: "welcome " + newResult.RESULT.DATA[0][1],
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          console.log(newResult);
          Swal.fire({
            icon: "error",
            title: "Error creating user",
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
  }
};

$(document).ready(() => {
  $("#signin").click(() => signin());
});
