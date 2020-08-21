//queried elements

const fName = document.getElementById("fName").value;
const lName = document.getElementById("lName").value;
const email = document.getElementById("email").value;
const gender = document.getElementById("gender").value;
const table = document.getElementById("table").getElementsByTagName("tbody")[0];
const submit = document.getElementById("submit");
var check = document.getElementById("check");

//onclick event on submit

submit.onclick = function(){
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const email = document.getElementById("email").value;
    
	
    if(fName == "" || lName == "" || email == "" && submit.innerHTML == "submit"){
        alert("pls enter the field");
        return true;
	
    }
        else{
        insertNewRow();
        clearInputs();
        
         return false;
       
    } 
	
    
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
        const table = document.getElementById("table").getElementsByTagName("tbody")[0];
           
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
            cell4.innerHTML = `<button class="edit">Edit</button>`;
            cell5.innerHTML = `<button class="delete" onclick="onDelete(this)">delete</button>`;
    
                if(check.checked){
                    cell3.innerHTML = "yes";
                }else{
                    cell3.innerHTML = "no";
                }
        
}

//clearFieldInputs

function clearInputs(){
    
      const fName = document.getElementById("fName").value = "";
      const lName = document.getElementById("lName").value = "";
      const email = document.getElementById("email").value = "";
      const gender = document.getElementById("gender").value = "male";
      var check = document.getElementById("check").checked = "";
                       
}

var editData = document.getElementsByClassName("edit");
editData.onclick = function(){
	
     const newName = document.getElementById("fName").value + document.getElementById("lname").value;
	 const newEmail = document.getElementById("email").value;
	 const newGender = document.getElementById("gender").value;
	 submit.innerHTML = "Update";
	 updateData(newName, newEmail, newGender);
}

function updateData(nameText, emailText, genderText){
     selectedRow = td.parentElement.parentElement;
	 selectedRow.cells[0].innerHTML = nameText;
	 selectedRow.cells[1].innerHTML = emailText;
	 selectedRow.cells[2].innerHTML = genderText;
	 
	  if(check.checked){
                    selectedRow.cell3.innerHTML = "yes";
                }else{
                    selectedRowcell3.innerHTML = "no";
                }
	 
}


//deleteRow;
function onDelete(td){
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
       
}
















