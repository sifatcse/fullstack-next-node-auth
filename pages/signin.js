// signin.js
import { useState } from "react";
import styles from "./signin.module.css";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (event) => {
    event.preventDefault();
    // Your sign-in logic goes here
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form className={styles.form} onSubmit={handleSignin}>
        <label className={styles.label}>
          Username:
          <input
            className={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          Password:
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className={styles.button} type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
