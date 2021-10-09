
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, FacebookAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "./Firebase/firebase.init";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignin, setIsSignin] = useState(false);
  const [user, setUser] = useState({});

  const auth = getAuth();

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        // The signed-in user info.
        const { displayName, email, photoURL } = result.user;
        const userInfo = {
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(userInfo);
    })
  }

  // handle Facebook sign in:
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        // The signed-in user info.
        const { displayName, email, photoURL } = result.user;
        console.log(result.user);
        const userInfo = {
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(userInfo);
      })
  }

  // Checkbox handle
  const toggleSignin = (e) => {
    setIsSignin(e.target.checked);
  }

  // Name field handle:
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  // Email field handle:
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  // Password field handle:
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  // sign up:
  const handleSignUp = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError('Password at least 6 characters!')
      return;
    } else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password must contain at least 2 uppercase letters!');
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError('Password must have one special case character!');
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError('Password shoud have two digits!');
      return;
    } else if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
      setError('Password must have three lowercase letters!');
      return;
    }

    isSignin ? proccessLogin(email, password) : createNewUser(email, password);
  }

  // Sign in proccess:
  const proccessLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      });
  }

  // Create new user:
  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        // console.log(user);
        setError('');
        verifyEmail();
        setUserName();
      })
      .catch(error => {
        setError(error.message);
      });
  }

  // User name set:
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => {
      })
      .catch((error) => {
    });
  }

  // Email verification:
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
      console.log(result);
    })
  }

  // Reset password:
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
    .then(result => {})
  }

  return (
    <div className="mx-5 my-5 w-50">
      <form onSubmit={handleSignUp}>
        <h3 className="text-primary">Please {isSignin ? 'Sign in' : 'Sign up'} </h3>
        
        {
          !isSignin && <div className="mb-3">
            <label for="inputAddress" class="form-label">Name</label>
            <input type="text" onBlur={handleNameChange} class="form-control" placeholder="Enter your name" />
          </div>
        }

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input onBlur={handleEmailChange}
            type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
          <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input onBlur={handlePasswordChange}
            type="password" className="form-control" id="exampleInputPassword1" required />
        </div>

        <div className="mb-3 form-check">
          <input onChange={ toggleSignin}
            type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className ="form-check-label" htmlFor="exampleCheck1">Already Sign up?</label>
        </div>

        <div className="mb-3 text-danger"> {error} </div>

        <button type="submit" className="btn btn-primary"> {isSignin ? 'Sign in' : 'Sign up'} </button>
        <br /><br />
        <button type="button" onClick={handleResetPassword} class="btn btn-warning btn-sm">Reset Password</button>
      </form>
      <br /><br /><br /><br /><br />

      {/* Facebook Sign in */}
      <button onClick={handleGoogleSignin}>Google Sign in</button>
      <br /><br />
      <button onClick={handleFacebookSignIn}>Facebook Sign in</button>

    </div>
  );
}

export default App;


