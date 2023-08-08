var inputMail = document.getElementById(`mail`);
var inputPass = document.getElementById(`pass`);
var inputUsername = document.getElementById(`username`);
var inputPush;

if (localStorage.getItem("inputPush") === null) {
  inputPush = [];
} else {
  inputPush = JSON.parse(localStorage.getItem("inputPush"));
}

function addNewEmail() {
  var mainVaild = validationInputs();
  var checking = checkUser();
  if (mainVaild && checking) {
    newmail = {
      mail: inputMail.value,
      pass: inputPass.value,
    };

    inputPush.push(newmail);

    localStorage.setItem("inputPush", JSON.stringify(inputPush));

    // displayInputs()
    clearItem();
  }
}

document.getElementById("submit-btn").addEventListener(`click`, function () {
  addNewEmail();
});

// function displayInputs() {
//   var cartona = "";
//   for (i = 0; i < inputPush.length; i++) {
//     // template Literals
//     cartona += `<tr>
//     <td>${inputPush[i].mail}</td>
//     <td>${inputPush[i].pass}</td>
//   </tr>`
//   }

// }

function clearItem() {
  inputMail.value = "";
  inputPass.value = "";
}

function validationInputs() {
  var vaildEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var vaildPass = /^[A-Za-z]\w{7,14}$/;

  if (vaildEmail.test(inputMail.value) == false) {
    return alert("You have entered an invalid email address ");
  } else if (vaildPass.test(inputPass.value) == false) {
    return alert(
      "To check a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter"
    );
  }
  return true;
}

function checkUser() {
  for (let i = 0; i < inputPush.length; i++) {
    if (
      inputMail.value == inputPush[i].mail &&
      inputPass.value == inputPush[i].pass
    ) {
      var y = inputPush[i].name;
      localStorage.setItem(`username`, y);
      location.href = `./welcome.html`;
      break;
    } else {
      return alert("account is not exist please sgin up");
    }
  }
}
