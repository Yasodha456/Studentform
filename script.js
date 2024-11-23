//Selecting Elements

var btn = document.querySelector("button")


btn.addEventListener("click",function(){
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var gender = document.querySelector('input[name="gender"]:checked')?.value
    var course = document.querySelector("#course").value
    var email = document.getElementById("email").value

    if (!name || !age || !gender || !course || !email) {
        alert("Please fill in all fields!");
        return;
    }


    var display = document.getElementById("display")
    var newRow = display.insertRow()
    var nameCell = newRow.insertCell(0)
    var ageCell = newRow.insertCell(1)
    var genderCell = newRow.insertCell(2)
    var courseCell = newRow.insertCell(3)
    var emailCell = newRow.insertCell(4)
    const actionCell = newRow.insertCell(5)

    nameCell.textContent = name
    ageCell.textContent = age
    genderCell.textContent = gender
    courseCell.textContent = course
    emailCell.textContent = email
    actionCell.innerHTML = '<button onclick="deleteItem(event)">Delete</button>'   
    document.getElementById("name").value=""
    document.getElementById("age").value=""
    document.getElementById("male").checked=false
    document.getElementById("female").checked=false
    document.getElementById("course").value=""
    document.getElementById("email").value=""

})

function deleteItem(event){
 var button = event.target
 var row = button.closest("tr")
 if(row){
    row.remove()
 }

}


