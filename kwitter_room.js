//AÑADE TUS ENLACES DE FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyC_vjL283rf6lf-XGrNApHexMOPghhzOSk",
    authDomain: "kwitter-6981d.firebaseapp.com",
    databaseURL: "https://kwitter-6981d-default-rtdb.firebaseio.com/",
    projectId: "kwitter-6981d",
    storageBucket: "kwitter-6981d.appspot.com",
    messagingSenderId: "378913752389",
    appId: "1:378913752389:web:6a095886c188d61066ea2c"
  };
  firebase.initializeApp(firebaseConfig);
  function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room user"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Inicio del código
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
   //Final del código
   });});}
getData();
function redirectToRoomName(name)
{
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}