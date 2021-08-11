import styles from './Button.module.css';

const Button = ({text}) => {
    return (
      <button type="button" className={styles.button}>
       <a href="https://booksy.com/pl-pl/80275_nikosza-nails_paznokcie_13750_wroclaw">
         {text}</a> 
      </button>
    );
  }

export default Button;

// Чтобы переход на запись окрывался в новой вкладке target="_blank"