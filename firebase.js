var config = {
    apiKey: "AIzaSyBqXn9PUKWHqmixRvKQCnP7g_yt8G-07Zs",
    authDomain: "digitaladvert-3daf4.firebaseapp.com",
    databaseURL: "https://digitaladvert-3daf4.firebaseio.com",
    projectId: "digitaladvert-3daf4",
    storageBucket: "digitaladvert-3daf4.appspot.com",
    messagingSenderId: "723745200778"
};

firebase.initializeApp(config);
var db = firebase.firestore();
firebase.firestore().enablePersistence()
.then(function(){
	db=firebase.firestore();
	db.collection("user").onSnapshot({includeQueryMetadataChanges: true}, function(snapshot) {
      snapshot.docChanges.forEach(function(change) {
          if (change.type === "added") {
              //console.log("New User: ", change.doc.data());
			  var userData = change.doc.data();
			  var trString = "<tr><td>" + userData.firstname +"</td><td>"+userData.lastname+"</td><td>" + userData.address + "</td></tr>";
			  $('#fetchTable tbody').append(trString);
          }
          var source = snapshot.metadata.fromCache ? "local cache" : "server";
          console.log("Data came from " + source);
      });
	});
}).catch(function(err){
	if (err.code == 'failed-precondition') {
          alert("Cannot open multiple tabs");
      } else if (err.code == 'unimplemented') {
          alert("Browser does not support");
      }
});

function addDataToDB()
{
	var fName = $('#fName').val();
	var lName = $('#lName').val();
	var address = $('#address').val();
	db.collection("user").add({
		firstname:fName,
		lastname:lName,
		address:address
	}).then(function(docRef){
		console.log("Success : " + docRef);
	}).catch(function(error){
		console.log("Error : " + error)
	});
}




  
