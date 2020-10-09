import { useEffect } from "react";
import { auth } from "../config/firebase";
import { useStateValue } from "../config/StateProvider";
import { SET_USER } from "../config/types";

function VikiApp({ Component, pageProps }) {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: SET_USER,
          user: user,
        });
      } else {
        dispatch({
          type: SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return <Component {...pageProps} />;
}

export default VikiApp;
