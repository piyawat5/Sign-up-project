//array

// for (let i =0 , i > sadfsf.length; i++)
//function()=  () =>
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => {
    //if get rid of classList will remove input instead
    input.classList.remove("inputClass");

    // input.removeAttribute("style");
  });
});
//e.preventDefault = return false
$(".submit-button").on("click", (e) => {
  e.preventDefault();
  var firstName = $("#fname").val();
  var lastName = $("#lname").val();
  var email = $("#email").val();
  var password = $("#pass").val();
  // Check if empty of not

  if (firstName === "") {
    $(`#fname`).addClass(`inputClass`);
    $(`#fname`).attr(`placeholder`, ``);
    $(`.redText1`).text(`First Name connot be empty`).addClass(`addRedText`);
  }
  if (lastName === "") {
    $(`#lname`).addClass(`inputClass`);
    $(`#lname`).attr(`placeholder`, ``);
    $(`.redText2`).text(`Last Name cannot be empty`).addClass(`addRedText`);
  }
  if (email == false) {
    $(`#email`).addClass(`inputClass`);
    $(`#email`).attr(`placeholder`, `email@example/com`);
    $(`#email`).addClass("changePlaceHolder");
    $(`.redText3`)
      .text(`Looks like this is not an email`)
      .addClass(`addRedText`);
  }
  if (password === "") {
    $(`#pass`).addClass(`inputClass`);
    $(`#pass`).attr(`placeholder`, ``);
    $(`.redText4`).text(`Password cannot be empty`).addClass(`addRedText`);
  }
  if (firstName && lastName && email && password) {
    $(`.modal-bg`).addClass(`show`);
    $(`.modal`).addClass(`show`);

    // $(`main`).css(`opacity`, `0.5`);
  }
});
