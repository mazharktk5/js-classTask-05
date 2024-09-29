

function calculateAge() {
    var birthday = document.getElementById("dob").value
var result = document.getElementById("ageResult")

if(birthday){
    var today = new Date();
    var birthDate = new Date(birthday);
    var year = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    var day = today.getDay() - birthDate.getDay();
}else{
    alert("Enter your birth date")
}

}
