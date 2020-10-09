import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import { StateProvider } from "../config/StateProvider";
import reducer, { initialState } from "../config/reducer";
import VikiApp from "../containers/_viki";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <VikiApp Component={Component} pageProps={pageProps} />
    </StateProvider>
  );
}

export default MyApp;
