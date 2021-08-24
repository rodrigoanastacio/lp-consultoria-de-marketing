import styles from './styles.module.scss';

const Hero = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};

export default Hero;
