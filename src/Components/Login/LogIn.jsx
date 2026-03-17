import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
// import auth;
import { auth } from '../../firebase/firebase.init';
// import provider;
const googleProvider = new GoogleAuthProvider()

// useState 


const LogIn = () => {
    const [users,setUsers] = useState(null);
    const handleGoogle = ()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUsers(result.user)
            console.log(result.user);

        }).catch(error=>{
            console.log(error);
        })
        console.log('google btn clicked');
    }


// handle singOut;
const handleSingOut = ()=>{
    console.log('sing out btn clicked');
    signOut(auth)
    .then(()=>{
        console.log('successfully sing out')
          setUsers(null)
    })
    .catch(error=>{
        console.log(error);
    })
  
}
    return (
        <div>
            <h1>Log In </h1>
           
          {users &&
              <div>
                <h1>name:{users?.displayName}</h1>
                <h1>email:{users.email}</h1>
                <img src={users.photoURL} alt="" />
            </div>
          }
          {
            users?  <button onClick={handleSingOut}>sing Out</button>: <button onClick={handleGoogle}>Sing Up With Google</button>
          }
           
        </div>
    );
};

export default LogIn;