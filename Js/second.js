var inputUsername = document.getElementById(`username`);

var inputMail = document.getElementById(`mail`);
var inputPass = document.getElementById(`pass`);
var inputUsername = document.getElementById(`username`);
var inputPush;

if (localStorage.getItem("inputPush") === null) {
  inputPush = [];
} else {
  inputPush = JSON.parse(localStorage.getItem("inputPush"));
}

// function repeatedInputes ( ) {
//   newmail = {
//     mail : inputMail.value,
//     pass : inputPass.value,
//     username : inputUsername.value
//   }

// //   if (username === JSON.parse(localStorage.getItem("inputPush").con) ) {
// //    return alert ("Username already exist")
// //   }
// // }

function addNewEmail() {
  var twooValid = twoValid();
  if (twooValid) {
    newmail = {
      mail: inputMail.value,
      pass: inputPass.value,
      username: inputUsername.value,
    };

    inputPush.push(newmail);
    location.href = "./index.html";
    localStorage.setItem("inputPush", JSON.stringify(inputPush));
    // repeatedInputes ( )

    // displayInputs()
    clearItem();
  }
}
// function displayInputs() {
//   var cartona = "";
//   for (i = 0; i < inputPush.length; i++) {
//     // template Literals
//     cartona += `<tr>
//     <td>${inputPush[i].mail}</td>
//     <td>${inputPush[i].pass}</td>
//     <td>${inputPush[i].username}</td>
//   </tr>`
//   }

// }

document.getElementById("submit-btn").addEventListener(`click`, function () {
  addNewEmail();
});

function clearItem() {
  inputUsername.value = "";
  inputMail.value = "";
  inputPass.value = "";
}

function twoValid() {
  var vaildUserName = /^[A-Z][a-z]{3,8}$/;
  var vaildEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var vaildPass = /^[A-Za-z]\w{7,14}$/;

  if (vaildUserName.test(inputUsername.value) == false) {
    return alert(
      "Username should start with a capital letter and the min char is 3 the max char is 8"
    );
  } else if (vaildEmail.test(inputMail.value) == false) {
    return alert("You have entered an invalid email address ");
  } else if (vaildPass.test(inputPass.value) == false) {
    return alert(
      "To check a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter"
    );
  }
  return true;
}
