import Head from 'next/head'
import Container from '../components/Container'
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
        <Container>
          <figure>
            <img src="dayane-silva-consultoria-de-marketing-digital.png" alt="Imagem que ilustra a consultora Dayane Silva"/>
          </figure>
          <div>
            <h1>Você acredita que pode construir uma marca incrível, mas se sente perdida no processo das estratégias?</h1>
            <h2>Descubra como uma consultoria direcionada para o seu negócio, pode ajudar a sua marca a se destacar!</h2>
          </div>
        </Container>
        <ShapeDivider/>
      </Hero>
    </>
  )
}

export default Index