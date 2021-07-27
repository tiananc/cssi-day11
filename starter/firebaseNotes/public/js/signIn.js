const signInBtn = document.querySelector("#signInBtn");

const signIn = () => {
    console.log("Sign in function called!");
    const provider = new firebase.auth.GoogleAuthProvider();
    
 
//oauth2 set up with firebase, if it works, there should be a pop up!
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        //changed from var
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        
        console.log(user);
        window.location = ("writeNote.html");

    })
    .catch((error) => {
        //changed from var
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        console.log("Things broke :((");
        console.log(errorCode);
        console.log(errorMessage);

    });

}

console.log("Sign in code loaded");
signInBtn.addEventListener("click", signIn);