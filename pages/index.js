import Head from "next/head";
import { FaRegSadCry, FaDog, FaSearchPlus } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiDatadog } from "react-icons/si";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Resgate Pets</title>
        <meta name="description" content="Treino de html, css e flex-box" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <section className={styles.section1}>
          <div className={styles.areaTitle}>
            <h3>Uma plataforma completa de informações</h3>
            <h1>
              Já são mais de 4 mil
              <br /> pessoas conectadas <br /> em nossa comunidade.
            </h1>
            <a href="#">Quero participar</a>
          </div>

          <div className={styles.imagemSection1}>
            <img src="imagem1.jpg" alt="" />
          </div>
        </section>

        <section className={styles.sectionCards}>
          <h2>Principais assuntos abordados</h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <FaRegSadCry size={65} /> Perdeu seu pet?
            </div>
            <div className={styles.card}>
              <FaDog size={65} /> Encontrou um pet?
            </div>
            <div className={styles.card}>
              <SiDatadog size={65} />
              Lista de pets encontrados
            </div>
            <div className={styles.card}>
              <FaSearchPlus size={65} />
              Duvidas frequentes
            </div>
          </div>
        </section>

        <section className={styles.section3}>
          <div className={styles.areaTitle3}>
            <h1>
              A melhor comunidade do brasil
              <br /> para encontrar o seu amado pet.
            </h1>
            <h3>
              Quem já passou por isso sabe como é doloroso,
              <br /> e o quanto é importante ter ajuda.
            </h3>
            <a href="#">Quero contribuir</a>
          </div>

          <div className={styles.imagemSection3}>
            <img src="foto2.jpg" alt="" />
          </div>
        </section>

        <div className={styles.areaForm}>
          <h2>
            Receba todas as notificações diarias dos pets <br /> perdidos e
            encontrados em nossa newslleter
          </h2>
          <div className={styles.formWrapper}>
            <form>
              <input type="text" name="nome" placeholder="Seu nome" />
              <input type="email" name="email" placeholder="Seu E-mail" />
              <input type="submit" value="Cadastrar" />
            </form>
          </div>
        </div>

        <footer>
          <div className={styles.social}>
            <h3>Sociais: </h3>
            <div>
              <AiFillInstagram size={30} />

              <AiFillLinkedin size={30} />
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}
