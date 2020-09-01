//queried elements

const fName = document.getElementById("fName").value;
const lName = document.getElementById("lName").value;
const email = document.getElementById("email").value;
const gender = document.getElementById("gender").value;
const table = document.getElementById("table").getElementsByTagName("tbody")[0];
const submit = document.getElementById("submit");
const message = document.getElementById("message");
var check = document.getElementById("check");
//email validation function
 function eValidate() {
   const form = document.getElementById("form");
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email.match(pattern))
  {
    form.classList.add("valid");
    form.classList.remove("invalid");
    message.innerHTML = "Your email address is valid";
    message.style.color = "green";
  }
  else{
    form.classList.add("invalid");
    form.classList.remove("valid");
    message.innerHTML = "Pls enter a valid email address";
    message.style.color = "red";
  }
  }
 
// onSubmit func
function submitData() {
   
    if (submit.innerHTML == "submit") {
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const email = document.getElementById("email").value;
	  
      if (
        fName == "" ||
        lName == "" ||
        email == "" ||
        (message.innerHTML == "Pls enter a valid email address" && submit.innerHTML == "submit")
		
    ) {
      return true;
    } else {
      insertNewRow();
      clearInputs();

      return false;
   
  }   
} 
}
//onclick event on submit
submit.onclick = function (e) {
  e.preventDefault();
  submitData();
};

// insertNewHTMLRow

function insertNewRow() {
  const submit = document.getElementById("submit");
  submit.innerHTML = "submit";
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  var check = document.getElementById("check");

  const Name = fName + " " + lName;
  const table = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];

  newRow = table.insertRow(table.lenght);
  cell0 = newRow.insertCell(0);
  cell1 = newRow.insertCell(1);
  cell2 = newRow.insertCell(2);
  cell3 = newRow.insertCell(3);
  cell4 = newRow.insertCell(4);
  cell5 = newRow.insertCell(5);

  cell0.innerHTML = Name;
  cell1.innerHTML = email;
  cell2.innerHTML = gender;
  //cell3.innerHTML = null;
  cell4.innerHTML = `<button class="edit" onclick="editData(this)">Edit</button>`;
  cell5.innerHTML = `<button class="delete" onclick="onDelete(this)">delete</button>`;
	
	//check if he/she just came to the country within the last 14days
  if (check.checked) {
    cell3.innerHTML = "yes";
  } else {
    cell3.innerHTML = "no";
  }
	
}


//clearFieldInputs

function clearInputs() {
  const fName = (document.getElementById("fName").value = "");
  const lName = (document.getElementById("lName").value = "");
  const email = (document.getElementById("email").value = "");
  const gender = (document.getElementById("gender").value = "male");
  var check = (document.getElementById("check").checked = "");
  const message = (document.getElementById("message").innerHTML = "");
}

//var editData = document.getElementsByClassName("edit");
function editData(td) {
  const selectedRow = td.parentElement.parentElement;
  let name = selectedRow.cells[0].innerHTML;
  name = name.toString().split(" ");

  console.log(selectedRow.cells[3].innerText);

  document.getElementById("fName").value = name[0];
  document.getElementById("lName").value = name[1];
  document.getElementById("email").value = selectedRow.cells[1].innerText;
  document.getElementById("gender").value = selectedRow.cells[2].innerText;
  if (selectedRow.cells[3].innerText == "yes") {
    document.getElementById("check").checked = true;
  } else {
    document.getElementById("check").checked = false;
  }

  submit.innerHTML = "Update";
  submit.onclick = function (e) {
    e.preventDefault();

    submitData();

    if (submit.innerHTML == "Update") {
      const nameText =
        document.getElementById("fName").value +
        " " +
        document.getElementById("lName").value;
     document.getElementById("email").value;
	  const emailText = document.getElementById("email").value;
      const genderText = document.getElementById("gender").value;

      let checkedText = "";
      if (document.getElementById("check").checked) {
        checkedText = "yes";
      } else {
        checkedText = "no";
      }

      updateData(selectedRow, nameText, emailText, genderText, checkedText);
      clearInputs();
      submit.innerHTML = "submit";

      return true;
    }
  };
}

function updateData(selectedRow, nameText, emailText, genderText, checkedText) {
  selectedRow.cells[0].innerHTML = nameText;
  selectedRow.cells[1].innerHTML = emailText;
  selectedRow.cells[2].innerHTML = genderText;
  selectedRow.cells[3].innerHTML = checkedText;
}

//deleteRow;
function onDelete(td) {
  row = td.parentElement.parentElement;
  document.getElementById("table").deleteRow(row.rowIndex);
}
