import styles from './Button.module.css';

const Button = ({text}) => {
    return (
      <button type="button" className={styles.button}>
        {text}
      </button>
    );
  }

export default Button;