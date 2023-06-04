
// CRUD > Create, Read, Update, Delete

const btn = document.getElementById('btn');
var row = null;
function submit() {
    // alert('This is submit function body.')
    var dataEntered = retrieveData();
    var readData = readDataFromLS(dataEntered);

    if(dataEntered == false) {
        msg.innerHTML = `<h3 style="color:red">Please Enter Data!</h3>`;
    } else {

        if (row == null) {
            insert(readData);
            msg.innerHTML = `<h3 style="color:green">Data Inserted!</h3>`;
        } else {
            update();
            msg.innerHTML = `<h3 style="color:orange">Data Updated!</h3>`;
        }
    }
    document.getElementById('form').reset();

}

btn.addEventListener('click', submit)

// CREATE
// Retrieve data from form
function retrieveData() {
    var name1 = document.getElementById('name').value;
    var job = document.getElementById('job').value;
    var exp = document.getElementById('exp').value;

    var dataArr = [name1, job, exp];
    // console.log(dataArr);

    if (dataArr.includes("")) {
        return false;
    } else {
        return dataArr;
    }
    return dataArr;
}

// READ
// Data in localStorage
function readDataFromLS(dataEntered) {

    // save data in local storage
    var userName = localStorage.setItem("name", dataEntered[0]);
    var userJob = localStorage.setItem("Job", dataEntered[1]);
    var userExp = localStorage.setItem("Experience", dataEntered[2]);

    // retrieve data from localStorage
    var userNameLS = localStorage.getItem("name", userName);
    var userJobLS = localStorage.getItem("Job", userJob);
    var userExpLS = localStorage.getItem("Experience", userExp);

    var arr = [userNameLS, userJobLS, userExpLS];
    return arr;
}

// Insert data in table
function insert(readData) {
    // to insert in row
    var row = table.insertRow();
    // insertRow() > creates an empty <tr> element
    // and adds it to a table

    // to insert cell
    // insert new cell with content at the current
    // table row
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];

    row.insertCell(3).innerHTML = `<button style="color:rgb(253, 188, 68)" onclick="edit(this)">Edit</button>
                                    <button style="color:red" onclick="remove(this)">Delete</button>`;
}

// EDIT
function edit(td) {
    row = td.parentElement.parentElement;
    document.getElementById('name').value = row.cells[0].innerHTML;
    document.getElementById('job').value = row.cells[1].innerHTML;
    document.getElementById('exp').value = row.cells[2].innerHTML;
}

// UPDATE
function update() {
    row.cells[0].innerHTML = document.getElementById('name').value;
    row.cells[1].innerHTML = document.getElementById('job').value;
    row.cells[2].innerHTML = document.getElementById('exp').value;

    // row = null;
}

// DELETE (REMOVE)
function remove(td) {
    var ans = confirm("Are you sure you want to delete this record?")
    if (ans == true) {
        row = td.parentElement.parentElement;
        document.getElementById('table').deleteRow(row.rowIndex);
    }
}