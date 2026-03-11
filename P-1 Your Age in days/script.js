// Challange 1 Your Age in days
function ageInDays(){
    var birthYear = prompt("What year were you born ?");
    var ageDays = (2022-birthYear) * 365;
   //console.log(ageDays)
   

    var h1 = document.createElement('h1')
    //console.log(h1)
    var textAnswer = document.createTextNode("You are " + ageDays + " Days old.")
    h1.setAttribute('id','ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('Box-flex-result').appendChild(h1)
}

function reset(){
    document.getElementById('ageInDays').remove();
}