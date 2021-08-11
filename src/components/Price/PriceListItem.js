import PropTypes from "prop-types";
import style from './Priсe.module.css';

const PriceListItem = ({text, priсe, value}) => (
    
    <li className={style.list_item}>
      <span className={style.list_text}>{text} </span>
      <span className={style.list_priсe}>{priсe} {value}</span>
    </li>
  );
  
  PriceListItem.propTypes = {
    title: PropTypes.string.isRequired,
    priсe: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  };
  
  export default  PriceListItem;
  
