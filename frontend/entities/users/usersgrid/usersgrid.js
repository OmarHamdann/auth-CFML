$("#table").hide();

const searchUser = () => {
  let nameUser = $("#search").val();
  $.ajax({
    url: "backend/entities/users/usersgrid/userDao.cfc?method=search",
    success: (result) => {
      var newResult = $.parseJSON(result);

      if (newResult.MESSAGE == "failure") {
        $("#table").hide();
        $("h3").text("No user found");
      } else {
        $("h3").hide();
        $("#table").show();
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

const enterKeySearch = (e) => {
  if (e.keyCode == 13) {
    searchUser();
  }
};

$(document).ready(() => {
  $("#search").keypress(enterKeySearch);
  $("#search_user").click(() => searchUser());
});
