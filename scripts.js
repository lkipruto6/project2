function identifyAkanName () {
    var days = ("sunday" "monday" "tuesday" "wednesday" "thursday" "friday" "saturday")
    var maleAkanNames = ("kwasi" "kwadwo" "kabena" "kwaku" "yaw" "kofi" "kwame")
    var femaleAkanNames = ("akosu" "adwoa" "abeena" "akua" "yaa" "afua" "amna")
}

    var dayOfBirth = ( ( (century/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
    var dayOfBirth = Math.floor(dayOfBirth);

   
    var genders
   
    var date = document.getElementById("date").value 
    var month = document.getElementById("month").value
    var birthYear = document.getElementById("year").value
    if (date === ||date<1||date>31){
        alert("INVALID DATE!!THERE IS NO SUCH DATE!TRY BTWN 1 AND 31")
    }
     else if (month === ||month<1||month>12){
         alert("INVALID MONTH!!THERE IS NO SUCH MONTH!TRY BTWN 1 AND 12")
     }
     else if (year ===""){
         alert("A YEAR MUST BE FILLED!")
     }
     else if (month ===""){
         alert("A MONTH MUST BE FILLED!")
     }
     else if (date ===""){
         alert("A DAY MUST BE FILLED!")
     }


        
