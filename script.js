$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyDr59vCL72gV07FpEUyu61F8QZVdy4iEuY",
        authDomain: "fireauthen-1c11b.firebaseapp.com",
        databaseURL: "https://fireauthen-1c11b.firebaseio.com",
        projectId: "fireauthen-1c11b",
        storageBucket: "fireauthen-1c11b.appspot.com",
        messagingSenderId: "183413100827"
      };
    firebase.initializeApp(config);

    var database = firebase.database();

    

    
    // firebase.auth().signInWithPopup(provider).then(function(result) {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     var token = result.credential.accessToken;
    //     // The signed-in user info.
    //     var user = result.user;
    //     console.log(user);
    //     // ...
    //   }).catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // The email of the user's account used.
    //     var email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential;
    //     // ...
    //   });

    $('#login').on('click', function(){

        

        // event.preventDefault();
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/drive');
        provider.addScope('profile');
        provider.addScope('email');
        return firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log("success");
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          })
          .catch(function(error) {
            console.log('Google sign in error', error);
          });

        // var txtEmail = $("#exampleInputEmail1").val();
        // var txtPass = $("#exampleInputPassword1").val();

        // var provider = new firebase.auth.GoogleAuthProvider();

        // var auth = firebase.auth();
        // var promise = auth.signInWithEmailAndPassword(txtEmail,txtPass);

        // promise.catch(e => console.log(e.message));

    });

    // $(document).on('click', '#register', function(){

    //     event.preventDefault();

    //     var txtEmail = $("#exampleInputEmail1").val();
    //     var txtPass = $("#exampleInputPassword1").val();

    //     var auth = firebase.auth();
    //     var promise = auth.createUserWithEmailAndPassword(txtEmail,txtPass);

    //     promise.catch(e => console.log(e.message));

    // });

    $(document).on('click', '#logout', function(){

        // event.preventDefault();

        firebase.auth().signOut();

    });

    // firebase.auth().onAuthStateChanged(function(firebaseUser){
    //     if(firebaseUser){
    //         console.log(firebaseUser);
    //         // $("#login").addclass("hide");
    //         // $("#logout").removeclass("hide");
    //     }
    //     else {
    //         console.log("not logged in");
    //         // $("#logout").addclass("hide");
    //         // $("#login").removeclass("hide");
    //     }
    // });


// }, function (errorObject) {
//     console.log("The read failed: " + errorObject.code);
});