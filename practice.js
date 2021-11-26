const firebaseConfig = {
    apiKey: "AIzaSyADkKnnqxdMnDZXhfbfCMQ6_JU77KBmJqA",
    authDomain: "kwitter-14eec.firebaseapp.com",
    databaseURL: "https://kwitter-14eec-default-rtdb.firebaseio.com",
    projectId: "kwitter-14eec",
    storageBucket: "kwitter-14eec.appspot.com",
    messagingSenderId: "913254591437",
    appId: "1:913254591437:web:7b26169363b5de97b3b284"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function addUser(){
    User_name=document.getElementById("User_name").value;
    firebase.database().ref("/").child(User_name).update({
        purpuse:"adding"
    })
}