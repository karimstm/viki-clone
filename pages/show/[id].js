import React from "react";
import ShowHeader from "../../components/show/showHeader";
import ShowTab from "../../components/show/showTab";
import styles from "../../styles/show.module.scss";
import Layout from "../../components/Layout/layout";

function Show() {
  return (
    <Layout>
      <div className={styles.show__container}>
        <ShowHeader />
        <ShowTab />
      </div>
    </Layout>
  );
}

export default Show;
