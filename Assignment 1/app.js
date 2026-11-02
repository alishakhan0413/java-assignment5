
function displayData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var city = document.getElementById("city").value;
    var gender = document.getElementsByName("gender");
    var selectedGender = "";
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = gender[i].value;
        }
    }


    console.log("Signup Successful!");
    console.log("Full Name: " + name);
    console.log("Email: " + email);
    console.log("Phone Number: " + phone);
    console.log("Gender: " + selectedGender);
    console.log("Date of Birth: " + dob);
    console.log("City: " + city);
}


// Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 


function readMore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.innerHTML = "Read Less";
    }
    else {
        moreText.style.display = "none"
        btnText.innerHTML = "Read More";
    }
}

// In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.


var currentRow;

function addStudent(event) {

    event.preventDefault();

    var name = document.getElementById("studentName").value;

    var age = document.getElementById("studentAge").value;

    var tableBody = document.getElementById("studentTableBody");

    tableBody.innerHTML +=
        "<tr>" +
        "<td>" + name + "</td>" +
        "<td>" + age + "</td>" +
        "<td>" +
        "<button onclick='editRow(this)'>Edit</button> " +
        "<button onclick='deleteRow(this)'>Delete</button>" +
        "</td>" +
        "</tr>";

    document.getElementById("studentForm").reset();

}


function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editRow(button) {
    currentRow = button.parentNode.parentNode;
    var name = currentRow.cells[0].innerHTML;
    var age = currentRow.cells[1].innerHTML;
    document.getElementById("editName").value = name;
    document.getElementById("editAge").value = age;
    document.getElementById("editFormContainer").style.display = "block";
}

function saveChanges(event) {
    event.preventDefault();
    var name = document.getElementById("editName").value;
    var age = document.getElementById("editAge").value;
    currentRow.cells[0].innerHTML = name;
    currentRow.cells[1].innerHTML = age;
    closeEditForm();
}

function closeEditForm() {
    document.getElementById("editFormContainer").style.display = "none";
}

