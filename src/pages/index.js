import Head from 'next/head'
import { motion } from 'framer-motion'
import Container from '../components/Container'
import Hero from '../components/Hero'
import CTA from '../components/CTA'
import ShapeDivider from '../components/ShapeDivider'

import styles from '../styles/Home.module.scss'

let easing = [0.6, -0.05, 0.01, 0.99];

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const Index = () => {
  return (
    <>
      <Head>
        <title>Consultoria de Marketing Digital para Empreendedoras | Dayane Silva</title>
        <meta name="description" content="Você tem uma marca no Instagram, está iniciando um novo projeto, acredita que pode crescer e mesmo assim, ultimamente não encontra uma melhor forma de se..."></meta>
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
              <h1>Você acredita que pode construir uma marca incrível, mas se sente perdida no processo das estratégias?</h1>
              <h2>Descubra como uma <strong>consultoria direcionada para o seu negócio</strong>, pode ajudar a sua marca a se destacar!</h2>
              <CTA/>
            </motion.div>
          </div>
        </Container>
        <ShapeDivider/>
      </Hero>
    </>
  )
}

export default Index