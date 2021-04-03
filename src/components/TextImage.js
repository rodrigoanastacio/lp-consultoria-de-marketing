import Image from 'next/image'
import styles from '../styles/TextImage.module.scss'

const TextImage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>Porque a Consultoria é a solução para o seu negócio digital?</h1>
        <div className={styles.wrapper}>
          <div>
            <p>Você tem uma marca no Instagram, está iniciando um novo projeto, acredita que pode crescer, e mesmo assim, ultimamente não encontra uma melhor forma de se conectar com seu público, trazer melhores conteúdos, atrair clientes e isso afeta a sua motivação e resultados?</p>
            <p>E se eu te disser que fazer uma <strong>Consultoria totalmente voltada para as necessidades do seu negócio</strong>, pode te ajudar a melhorar a sua visão sobre a marca, melhorar seu posicionamento digital, resultados e aumentar a sua relevância.</p>
            <p>Com a consultoria quero oferecer para você, um direcionamento para que você consiga ter um planejamento e conhecer as estratégias que o marketing digital oferece, e assim fazer sua marca crescer e alcançar resultados maiores.</p>
          </div>
          <figure>
            <Image src="/img/consultoria-loja.png" alt="Imagem de uma mulher ajustando a roupa em um manequin" width={552} height={567} />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default TextImage