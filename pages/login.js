import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState, useEffect } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import Layout from "../components/Layout/layout";
import { auth } from "../config/firebase";
import { useStateValue } from "../config/StateProvider";
import { SET_USER } from "../config/types";
import styles from "../styles/login.module.scss";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let error = "";
    if (!password) error = "You need to fill the password field";
    if (!email) error = "You need to fill the email field";
    if (error) {
      setError(error);
      setLoading(false);
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          dispatch({
            type: SET_USER,
            user: user,
          });
          Router.push("/");
        })
        .catch((e) => {
          setError(e.message);
          setEmail("");
          setPassword("");
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <div className={styles.login__container}>
          <h3>Log In</h3>
          {error && <Alert variant="danger">{error}</Alert>}
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
            <Button
              className={`btn-block ${styles.viki__btn}`}
              variant="primary"
              onClick={onSubmit}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Loading...</span>
                </>
              ) : (
                <>Log In</>
              )}
            </Button>
          </Form>
          <div className={styles.login__footer}>
            <p>
              Not a member? <Link href="/register">Sign up</Link>
            </p>
            <p>
              <Link href="/">Forgot Password</Link>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Login;
