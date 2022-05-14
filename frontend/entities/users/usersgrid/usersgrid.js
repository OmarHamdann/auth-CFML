$("#table").hide();

const searchUser = () => {
  let nameUser = $("#search").val();
  var args = {
    ARGS: JSON.stringify({
      NAME: nameUser,
    }),
  };

  $.ajax({
    url: "backend/entities/users/usersgrid/userFactory.cfc?method=search",
    type: "POST",
    data: args,
    success: (result) => {
      var newResult = $.parseJSON(result);

      if (newResult.MESSAGE == "success") {
        $("h3").text("");
        $("#table").show();
        $("#id").text(newResult.RESULT.DATA[0][0]);
        $("#firstN").text(newResult.RESULT.DATA[0][1]);
        $("#lastN").text(newResult.RESULT.DATA[0][2]);
        $("#passwordUser").text(newResult.RESULT.DATA[0][3]);
        $("#phone").text(newResult.RESULT.DATA[0][5]);
        $("#dateU").text(newResult.RESULT.DATA[0][4].split(" 00:")[0]);
        $("#age").text(newResult.RESULT.DATA[0][6]);
      } else {
        $("h3").text("No user found");
        $("#table").hide();
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
