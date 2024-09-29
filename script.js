

function calculateAge() {
    var birthday = document.getElementById("dob").value
var years = document.getElementById("years")
var months = document.getElementById("months")
var days = document.getElementById("days")

if(birthday){
    var today = new Date();
    var birthDate = new Date(birthday);
    var year = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    var day = today.getDate() - birthDate.getDate();
    
    if (day < 0) {
        month--;
        day += new Date(year, month, 0).getDate();
    }
    
    if (month < 0) {
        year--;
        month += 12;
    }
    
    years.textContent = year;
    months.textContent = month;
    days.textContent = day;
    }else{
    alert("Enter a valid date");
    }


}


