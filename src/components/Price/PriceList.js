import Section from '../Section';
import PriceListItem from './PriceListItem';
import style from './Priсe.module.css';

const PriseList  = ({items}) => {

    return (  
        <Section title='Услуги и цены'>
          <ul className={style.PriseList}>
            {items.map((item) => (
              <PriceListItem              
                title={item.title}
                priсe={item.priсe}
                value={item.value}
              />
            ))}
          </ul>
        </Section>        
    );
  
  };

  // .filter(items => items.language = 'ru')
export default PriseList;