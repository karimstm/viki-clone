import { auth } from "../config/firebase";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Layout from "../components/Layout/layout";
import { useStateValue } from "../config/StateProvider";
import styles from "../styles/login.module.scss";
import { SET_USER } from "../config/types";

function Register(props) {
  const [{ user }, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const onSubmit = () => {
    setDisabled(true);
    if (!email || !password || !name) {
      setError("Make sure all field are filled correctly");
      setDisabled(false);
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          dispatch({
            type: SET_USER,
            user,
          });
          user.user
            .updateProfile({
              displayName: name,
              birthDate: date,
            })
            .then((_) => Router.push("/"));
        })
        .catch((e) => {
          setError(e.message);
          setDisabled(false);
        });
    }
  };

  return (
    <div>
      <Head>
        <title>Join Viki Today</title>
      </Head>
      <Layout>
        <div className={styles.login__container}>
          <h3>Sign Up</h3>
          <div className={styles.action__buttons}>
            <Button className={styles.viki__btn} variant="primary">
              Facebook
            </Button>
            <Button className={styles.viki__btn} variant="light">
              Google
            </Button>
            <Button className={styles.viki__btn} variant="danger">
              Rakuten
            </Button>
          </div>
          <div className={styles.or__}>
            <p>We will never post anything without your permission</p>
            <div className={styles.or__or}>
              <span>or</span>
            </div>
          </div>
          <Form className={styles.login__form}>
            <span>Sign up with your email</span>
            <Form.Group className={styles.input__form} controlId="__name">
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Full name"
              />
            </Form.Group>
            <Form.Group className={styles.input__form} controlId="__email">
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className={styles.input__form} controlId="__password">
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className={styles.input__form} controlId="__date">
              <Form.Control
                onChange={(e) => setDate(e.target.value)}
                type="date"
              />
            </Form.Group>
            <Form.Group controlId="__news">
              <Form.Check
                type="checkbox"
                label=" Keep me posted on Viki's latest shows, news and more!"
              />
            </Form.Group>
            <Form.Group controlId="__terms">
              <Form.Check
                type="checkbox"
                label="By creating an account, I agree to Rakuten Viki's terms of use and privacy policy"
              />
            </Form.Group>
            <Button
              className={`btn-block ${styles.viki__btn}`}
              variant="primary"
              onClick={onSubmit}
              disabled={disabled}
            >
              Sign Up
            </Button>
          </Form>
          <div className={styles.login__footer}>
            <p>
              Aleady Have an account? <Link href="/login">Log in here</Link>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Register;
