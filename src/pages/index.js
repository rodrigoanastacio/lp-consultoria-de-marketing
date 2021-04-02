import Head from 'next/head'
import Hero from '../components/Hero'
import ShapeDivider from '../components/ShapeDivider'

const Index = () => {
  return (
    <>
      <Head>
        <title>Consultoria de Marketing Digital para Empreendedoras | Dayane Silva</title>
        <meta name="description" content="Você tem uma marca no Instagram, está iniciando um novo projeto, acredita que pode crescer e mesmo assim, ultimamente não encontra uma melhor forma de se..."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <ShapeDivider/>
      </Hero>
    </>
  )
}

export default Index