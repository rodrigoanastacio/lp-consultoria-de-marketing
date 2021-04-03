import styles from '../styles/TextImage.module.scss'

const TextImage = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  )
}

export default TextImage