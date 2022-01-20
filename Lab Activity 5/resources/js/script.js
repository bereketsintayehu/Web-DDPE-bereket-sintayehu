function validate() {
    if(document.getElementById('fullname').value =='')
        alert("Please fill in your name!")
    if(document.getElementById('telephone').value =='')
        alert("Please fill in your phone number!")
    if(document.getElementById('telephone').value.length != 10)
        alert("Please fill in your phone number correctly(09...!")
    if(document.getElementById('age').value =='')
        alert("Please provide your age!")
    if(document.getElementById('age').value >20 )
        alert("We only accept users less than 20 years of age")
    if(document.getElementById('pass').value =='')
        alert("Please provide a password!")
    if(document.getElementById('pass').value != document.getElementById('cpass').value)
        alert("Passwords do not match!")
}

function pmedia(){
    alert("The audio was paused");
}

function plmedia(){
    alert("Vedeo playing!")
}