/*var config = {
    apiKey: "AIzaSyBqXn9PUKWHqmixRvKQCnP7g_yt8G-07Zs",
    authDomain: "digitaladvert-3daf4.firebaseapp.com",
    databaseURL: "https://digitaladvert-3daf4.firebaseio.com",
    projectId: "digitaladvert-3daf4",
    storageBucket: "digitaladvert-3daf4.appspot.com",
    messagingSenderId: "723745200778"
};

firebase.initializeApp(config);*/
var storage = firebase.storage();
var storageRef = storage.ref();

var imageRef = storageRef.child("capture1.png");

imageRef.getDownloadURL().then(function(url){
	console.log("URL : " + url);
	var img = document.getElementById("myimg");
	img.src = url;
});
