import s from './Footer.module.css'
import {ReactComponent as Instagram} from '../../icon/instagram.svg'
import {ReactComponent as Phone} from '../../icon/phone.svg'
import {ReactComponent as Email} from '../../icon/mail.svg'
import {ReactComponent as Telegram} from '../../icon/telegram.svg'
// import {ReactComponent as Vk} from '../../icon/vk.svg'

const Footer = () => {
return (
    <div className={s.Footer}>
        <div>
            <p className={s.logo}>NICOSZA nails &#xa9; 2021</p>
        </div>
        <ul className={s.SocialList}>
            <li className={s.SocialItem}><a href="tel:+48578581656"><Phone/></a></li>
            <li className={s.SocialItem}><a href="mailto:example@mail.ru"><Email/></a></li>
            <li className={s.SocialItem}><a target="_blank" rel="noreferrer noopener" href="https://t.me/nikosza"><Telegram/></a></li>
            <li className={s.SocialItem}><a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/nikosza.nails/"><Instagram/></a></li>
            {/* <li className={s.SocialItem}><a target="_blank" rel="noreferrer noopener" href="1341"><Vk/></a></li> */}
        </ul>
    </div>
)};

export default Footer;