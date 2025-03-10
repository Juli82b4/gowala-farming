import { useState } from "react"; 
// Importing React's useState hook to manage local state for email, password, and errors
import { useAuthContext } from "../../context/useAuthContext"; 
// Importing useAuthContext to get the signIn function and error from the authentication context
import styles from "./login.module.css"; 
// Importing CSS module styles for styling the login form

const Login = () => {
  const { error, signIn } = useAuthContext(); 
  // Destructuring `error` and `signIn` from the authentication context: error for displaying authentication errors and signIn function for login

  const [email, setEmail] = useState("admin@mediacollege.dk"); 
  // State to store the user's email, with a default value of "admin@mediacollege.dk"

  const [password, setPassword] = useState("admin"); 
  // State to store the user's password, with a default value of "admin"

  const [loginError, setLoginError] = useState(null); 
  // State to store login-specific error messages (e.g., invalid credentials)

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    // Prevents the default form submission behavior (which would reload the page)

    try {
      await signIn(email, password); 
      // Attempt to sign in the user using the provided email and password
    } catch (err) {
      if (err.name === "InvalidTokenError") {
        setLoginError("Bruger ikke fundet, måske forkert kode."); 
        // If the error is "InvalidTokenError", display a specific error message (user not found or wrong password)
      } else {
        setLoginError("An unexpected error occurred. Please try again."); 
        // For any other errors, display a generic error message
      }
      console.error(err); 
      // Log the error to the console for debugging purposes
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3>Login for at få adgang</h3>
        {error && <p className={styles.error}>{error}</p>}
        {loginError && <p className={styles.error}>{loginError}</p>}{" "}
        {/* Display login error */}
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          defaultValue="admin@mediacollege.dk"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          defaultValue="admin"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className={styles.button} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
