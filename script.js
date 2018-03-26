var submitBtn = document.getElementById("submitBtn");
var txt = document.getElementById("txtBox");
var dbRef = firebase.database();


function writeDB() {
    dbRef.ref("messages").push({
        message: txt.value
    });
    
    window.alert("Message sent");
}