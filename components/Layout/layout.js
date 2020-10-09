import Footer from "./footer";
import Header from "./header";
import styles from "./layout.module.scss";

function Layout({ children }) {
  return (
    <div className={styles.page__wraper}>
      <Header />
      <div className={styles.main_wrpper}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
