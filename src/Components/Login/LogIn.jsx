import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
// import auth;
import { auth } from '../../firebase/firebase.init';
// import provider;
const googleProvider = new GoogleAuthProvider()

const LogIn = () => {
    const handleGoogle = ()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user.displayName
);
        }).catch(error=>{
            console.log(error);
        })
        console.log('google btn clicked');
    }
    return (
        <div>
            <h1>Log In </h1>
            <button onClick={handleGoogle}>Sing Up With Google</button>
        </div>
    );
};

export default LogIn;