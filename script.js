

function calculateAge() {
    var birthday = document.getElementById("dob").value
var years = document.getElementById("years")
var months = document.getElementById("months")
var days = document.getElementById("Days")

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
