import Section from '../Section';
import PriceListItem from './PriceListItem';
import style from './Priсe.module.css';

const PriseList  = ({items, title}) => {

    return (  
      <Section title={title}>
        <ul className={style.PriseList}>
          {items.map((item) => (
            <PriceListItem              
              text={item.title}
              priсe={item.priсe}
              value={item.value}
            />
          ))}
        </ul>
        </Section>        
    );
  };

export default PriseList;