import styles from '../styles/Hero.module.scss'

const Hero = ({children}) => {
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
}

export default Hero