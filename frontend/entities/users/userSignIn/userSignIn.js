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

    debugger;
    $.ajax({
      url: "backend/entities/users/usersignin/signinFactory.cfc?method=createUser",
      type: "POST", // GET, POST
      data: args,
      async: true,
      success: function (response) {
        ui.showLoadingMsg(false);
        responseObj = helper.deserlizeJSON(response);
        //check if the developer want a success of error message to show or not:
        //if yes then show the message that returned from backend
        if (
          (doesShowMessage === undefined || doesShowMessage === "") &&
          responseObj.CODE != undefined
        ) {
          //success msg
          if (responseObj.CODE == 0) {
            if (
              storage.getItem("Register") == "Yes" ||
              sessionUser.role_code == "REGISTER"
            ) {
              console.log(
                "returned success message is: " + responseObj.MESSAGE
              );
              ui.showRegisterSuccess(ui.getJSMessage(responseObj.MESSAGE));
            } else {
              if (Fn.toUpperCase() == "create".toUpperCase()) {
                if (
                  typeof entityObj.parentEntity != "undefined" &&
                  typeof entityObj.parentEntity.FROMPARENT != "undefined" &&
                  entityObj.parentEntity.FROMPARENT == true
                ) {
                  entityObj.parentEntity.parentEntityID = responseObj.DATA.ID;
                  ui.showSuccessWithConfirmationParentEntity(
                    ui.getJSMessage(entityObj.parentEntity.CONFIRMMESSAGE),
                    entityObj
                  );
                } else {
                  var newEntityObj = {};
                  newEntityObj.entityName = entityObj.entityName;
                  newEntityObj.filetype = entityObj.filetype;
                  newEntityObj.latestFilter = entityObj.latestFilter;

                  ui.showSuccessWithConfirmation(
                    ui.getJSMessage(responseObj.MESSAGE),
                    newEntityObj
                  );
                }
              } /*else if (Fn.toUpperCase() == 'UPDATE'.toUpperCase()) {
								ui.showSuccess(ui.getJSMessage(responseObj.MESSAGE));
								ui.goBack(entityObj.entityName, 'create');
							} */ else {
                if (storage.getItem("Register") == "Yes") {
                  console.log(
                    "returned success message is: " + responseObj.MESSAGE
                  );
                  ui.showRegisterSuccess(ui.getJSMessage(responseObj.MESSAGE));
                  setTimeout(function () {
                    $("#swal2-title").prop("style", "");
                  }, 300);
                } else {
                  console.log(
                    "returned success message is: " + responseObj.MESSAGE
                  );
                  console.log(strHandlerName);
                  if (
                    Fn.toUpperCase() != "getReport".toUpperCase() &&
                    entityObj.entityName != "ATTACHMENTS"
                  ) {
                    ui.goBack(entityObj.entityName, "grid");
                  }
                  ui.showSuccess(ui.getJSMessage(responseObj.MESSAGE));
                }
              }
            }
          }
          //******* Ramzi **********/
          else if (responseObj.CODE != 0) {
            if (typeof responseObj.DATA != "undefined") {
              if (typeof responseObj.DATA.HTMLID != "undefined") {
                ui.showError(responseObj.MESSAGE, responseObj.DATA.HTMLID);
                return;
              } else {
                ui.showError(responseObj.MESSAGE);
                return;
              }
            } else {
              ui.showError(responseObj.MESSAGE);
            }

            try {
              if (
                storage.getItem("Register") == "Yes" ||
                sessionUser.role_code == "REGISTER"
              ) {
                reloadRecaptcha();
                grecaptcha.reset();
              }
            } catch (e) {
              return;
            }
          }
        }

        if (strHandlerName) {
          var hndl = strHandlerName + "(" + response + ")";
          eval(hndl);

          setTimeout(function () {
            $("#swal2-title").prop("style", "");
          }, 0);
        }
        $("#extraFieldModal").modal("hide");
      },
      error: function (xhr, textStatus, errorThrown) {
        ui.showError(errorThrown);
        if (
          storage.getItem("Register") == "Yes" ||
          sessionUser.role_code == "REGISTER"
        ) {
          reloadRecaptcha();
        }
        //grecaptcha.reset();
        return;
      },
    });
  }
};

$(document).ready(() => {
  $("#signin").click(() => signin());
});
