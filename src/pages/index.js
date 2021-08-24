import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import ShapeDivider from '../components/ShapeDivider';
import TextImage from '../components/TextImage';

import styles from '../styles/Home.module.scss';

let easing = [0.6, -0.05, 0.01, 0.99];

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Img = ({ imgSrc, imgAlt, imgWidth, imgHeight }) => {
  return (
    <figure>
      <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
    </figure>
  );
};

const Index = () => {
  return (
    <>
      <Head>
        <title>
          Consultoria de Marketing Digital para Empreendedoras | Dayane Silva
        </title>
        <meta
          name="description"
          content="Você tem uma marca no Instagram, está iniciando um novo projeto, acredita que pode crescer e mesmo assim, ultimamente não encontra uma melhor forma de se..."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <Container>
          <figure className={styles.featuredImage}>
            <motion.img
              src="/dayane-silva-consultoria-de-marketing-digital.png"
              alt="Imagem que ilustra a consultora Dayane Silva"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </figure>

          <div className={styles.headlines}>
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h1>
                Você acredita que pode construir uma marca incrível, mas se
                sente perdida no processo das estratégias?
              </h1>
              <h2>
                Descubra como uma{' '}
                <strong>consultoria direcionada para o seu negócio</strong>,
                pode ajudar a sua marca a se destacar!
              </h2>
              <CTA />
            </motion.div>
          </div>
        </Container>
        <ShapeDivider />
      </Hero>

      <TextImage>
        <h1>Porque a Consultoria é a solução para o seu negócio digital?</h1>
        <div className={styles.wrapper}>
          <div>
            <p>
              Você tem uma marca no Instagram, está iniciando um novo projeto,
              acredita que pode crescer, e mesmo assim, ultimamente não encontra
              uma melhor forma de se conectar com seu público, trazer melhores
              conteúdos, atrair clientes e isso afeta a sua motivação e
              resultados?
            </p>
            <p>
              E se eu te disser que fazer uma{' '}
              <strong>
                Consultoria totalmente voltada para as necessidades do seu
                negócio
              </strong>
              , pode te ajudar a melhorar a sua visão sobre a marca, melhorar
              seu posicionamento digital, resultados e aumentar a sua
              relevância.
            </p>
            <p>
              Com a consultoria quero oferecer para você, um direcionamento para
              que você consiga ter um planejamento e conhecer as estratégias que
              o marketing digital oferece, e assim fazer sua marca crescer e
              alcançar resultados maiores.
            </p>
          </div>

          <Img
            imgSrc={'/img/consultoria-loja.png'}
            imgAlt={'Imagem de uma mulher ajustando a roupa em um manequin'}
            imgWidth={552}
            imgHeight={567}
          />
        </div>
      </TextImage>

      <TextImage>
        <div className={styles.wrapper}>
          <Img
            imgSrc={'/img/consultoria-marketing-digital-para-lojas.png'}
            imgAlt={'Imagem de uma mulher ajustando a roupa em um manequin'}
            imgWidth={500}
            imgHeight={500}
          />

          <div>
            <h2>
              Só para você ter uma ideia, muitas pessoas que tem um perfil de
              negócios no Instagram, ainda estão perdidas na questão das
              estratégias, e muitas relatam os seguintes desafios:
            </h2>
            <ul>
              <li>Não consigo gerar engajamento com meus seguidores;</li>
              <li>Tenho vários seguidores, mas pouco clientes;</li>
              <li>
                Não consigo criar conteúdo atrativo para o meu perfil crescer;
              </li>
              <li>
                Não consigo me relacionar com meu público, por vergonha de
                aparecer em vídeos ou stories;
              </li>
              <li>
                Faço posts diariamente, mas sinto que falta algo para que meu
                conteúdo seja melhor;
              </li>
              <li>
                Tenho dificuldades em entender todas as estratégias de marketing
                digital;
              </li>
            </ul>
            <p>
              Eu poderia listar outros motivos, mas coloquei aqui, os principais
              pontos que muitas pessoas ainda encontram dificuldades. Tenho
              certeza que você pode passar por alguma situação parecida, que
              além de prejudicar o seu crescimento, te deixa muitas vezes com
              aquela sensação de desânimo, e de pensar “Será que isso realmente
              vai dar certo”? E muitas vezes isso te deixa sem um direcionamento
              para encontrar uma solução.
            </p>
          </div>
        </div>
      </TextImage>
    </>
  );
};

export default Index;
