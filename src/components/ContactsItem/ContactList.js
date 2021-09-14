import s from './Contacts.module.css'
import Button from '../Button/';
// import {ReactComponent as Booksy} from '../../icon/booksy.svg'
// import {ReactComponent as Instagram} from '../../icon/instagram.svg'

const ContactList = ({items}) => {
    return(
        <div className={s.ContactList}>
            <h2 className={s.ContactTitle}>{items.title}</h2>
            <ul>
                <li  className={s.address}> Jedności Narodowej 182a,<br/>
                 50-315 Wrocław, Śródmieście</li>
                 <li  className={s.address}>Tel: +48578581656</li>
            </ul>
            <p className={s.Schedule}>{items.grafik}:</p>
            <ul>
                <li><span className={s.ScheduleItem}>{items.item1}</span>10:00 - 19:00</li>
                <li><span className={s.ScheduleItem}>{items.item2}</span>10:00 - 16:30</li>
                <li><span className={s.ScheduleItem}>{items.item3}</span>{items.item4}</li>
            </ul>

            <ul>
                <li  className={s.button}><Button text={items.text} link='tel:+48578581656'/></li>
                <li  className={s.button}><Button text={items.instagram} link='https://www.instagram.com/nikosza.nails/'/></li>
                <li  className={s.button}><Button text={items.booksy} link='https://booksy.com/pl-pl/80275_nikosza-nails_paznokcie_13750_wroclaw'/></li>
            </ul>

            {/* <p className={s.Schedule}>{items.grafik}:</p> */}
            {/* <ul>
                <li><span className={s.ScheduleItem}>{items.item1}</span>10:00 - 19:00</li>
                <li><span className={s.ScheduleItem}>{items.item2}</span>10:00 - 16:30</li>
                <li><span className={s.ScheduleItem}>{items.item3}</span>{items.item4}</li>
            </ul> */}
{/* 
            <ul className={s.icon}>
                <li><a target="_blank" rel="noreferrer noopener" href='https://www.instagram.com/nikosza.nails/'> 
                    <Instagram width='70px' height='70px'/>
                    </a></li>
                <li><a target="_blank" rel="noreferrer noopener" href='https://booksy.com/pl-pl/80275_nikosza-nails_paznokcie_13750_wroclaw'> 
                    <Booksy height='120px'/>
                    </a></li>
            </ul> 
                     */}




            

        </div>

    )
};

export default ContactList;