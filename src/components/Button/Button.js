import styles from './Button.module.css';

const Button = ({text, link}) => {
    return (
      <button type="button" className={styles.button}>
       <a href={link}>
         {text}</a> 
      </button>
    );
  }

export default Button;

// Чтобы переход на запись окрывался в новой вкладке target="_blank"