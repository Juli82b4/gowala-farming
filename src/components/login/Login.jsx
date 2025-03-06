import { useState } from "react";
import { useAuthContext } from "../../context/useAuthContext";
import styles from "./login.module.css";

const Login = () => {
  const { error, signIn } = useAuthContext();
  const [email, setEmail] = useState("admin@mediacollege.dk");
  const [password, setPassword] = useState("admin");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <h3>Login for at få adgang</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className={styles.formGroup}>
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
        </div>
        <button className={styles.button} type="submit">
          Log ind
        </button>
      </form>
    </div>
  );
};

export default Login;
