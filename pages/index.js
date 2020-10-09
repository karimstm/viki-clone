import Head from "next/head";
import Billboard from "../components/Billboard/billboard";
import Carouselj from "../components/Carousel/carouselj";
import Layout from "../components/Layout/layout";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Watch Korean Dramas, Chinese Dramas and Movies Online | Rakuten Viki
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Billboard img="https://i.imgur.com/JYAmeNU.jpg">
          <picture>
            <source
              media="(min-width: 1600px)"
              srcSet="https://i.imgur.com/nXVWnu0.png"
            />
            <img
              src="https://i.imgur.com/nXVWnu0.png"
              alt="Flower"
              className="billboard__cover"
            />
          </picture>
        </Billboard>
        <main>
          <Carouselj title="Viki Picks" url="api/trends" />
          <Carouselj title="Only on Viki" url="api/trends?with_genres=10749" />
          <Carouselj title="Viki Pass Zone" url="api/trends?with_genres=80" />
          <Carouselj
            title="Latest Releases"
            url="api/trends?with_genres=10751"
          />
          <Billboard
            img="https://i.imgur.com/8fojWXx.jpg"
            background={<div className={styles.background}></div>}
          >
            <h3>Oh! My Sweet Liar</h3>
            <p className={styles.description}>
              A painter escapes arrest by pretending she is pregnant with the
              child of a powerful family heir – but things get complicated when
              she actually starts ...
            </p>
          </Billboard>
          <Carouselj
            list={true}
            title="Friends to Lovers"
            url="api/list?id=7059621"
          />
          <Carouselj
            title="Top Mainland China Shows"
            url={`api/trends?air_date=2020-04-01&with_original_language=zh`}
          />
          <Carouselj
            title="Top Korean Shows"
            url={`api/trends?air_date=2020-04-01&with_original_language=ko`}
          />
          <Carouselj
            title="Movies"
            url={`api/trends?air_date=2020-01-01&with_original_language=ko&type=movie`}
          />
          <Billboard img="https://i.imgur.com/bPVXJsw.jpg">
            <picture>
              <source
                media="(min-width: 1600px)"
                srcSet="https://i.imgur.com/flWpdLz.png"
              />
              <img
                src="https://i.imgur.com/flWpdLz.png"
                alt="Flower"
                className="billboard__cover"
              />
            </picture>
          </Billboard>
          <Carouselj
            title="Coming Soon"
            url={`api/trends?air_date=2020-09-27&with_original_language=ko`}
          />

          <Carouselj
            people={true}
            list={true}
            title="Popular Celebrities"
            url={`api/people`}
          />
        </main>
      </Layout>
    </div>
  );
}
