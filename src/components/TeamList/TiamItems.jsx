import React from 'react';
import {ru, pl} from './items.json'
import Foto1 from '../../img/Natalia.jpg';
import Foto2 from '../../img/Anastasia.jpg';
import Foto3 from '../../img/Lida.jpg';
import s from './TeamList.module.css';

const item1 = () => {
    return (
        <div className={s.TeamItem}>
            <img className={s.TeamImg} src={Foto1} alt={ru.Natalia.photo}/>
            <div className={s.InfoBloсk}>
                <h2 className={s.title}>{ru.Natalia.name}</h2>
                <p className={s.text_accent}>{ru.Natalia.position}</p>
                <p>{ru.Natalia.text}</p>
            </div>
        </div>
    )
};
const item2 = () => {
    return (
        <div className={s.TeamItem}>
             <img className={s.TeamImg} src={Foto2} alt={ru.Anastasia.photo}/>
             <div className={s.InfoBloсk}>
                <h2 className={s.title}>{ru.Anastasia.name}</h2>
                <p className={s.text_accent}>{ru.Anastasia.position}</p>
                <p>{ru.Anastasia.text}</p>
            </div>
        </div>
    )
};
const item3 = () => {
    return (
        <div className={s.TeamItem}>
             <img className={s.TeamImg} src={Foto3} alt={ru.Lida.photo}/>
             <div className={s.InfoBloсk}>
                <h2 className={s.title}>{ru.Lida.name}</h2>
                <p className={s.text_accent}>{ru.Lida.position}</p>
                <p>{ru.Lida.text}</p>
            </div>
        </div>
    )
};
const item4 = () => {
    return (
        <div className={s.TeamItem}>
            <img className={s.TeamImg} src={Foto1} alt={pl.Natalia.photo}/>
            <div className={s.InfoBloсk}>
                <h2 className={s.title}>{pl.Natalia.name}</h2>
                <p className={s.text_accent}>{pl.Natalia.position}</p>
                <p>{pl.Natalia.text}</p>
            </div>
        </div>
    )
};
const item5 = () => {
    return (
        <div className={s.TeamItem}>
             <img className={s.TeamImg} src={Foto2} alt={pl.Anastasia.photo}/>
             <div className={s.InfoBloсk}>
                <h2 className={s.title}>{pl.Anastasia.name}</h2>
                <p className={s.text_accent}>{pl.Anastasia.position}</p>
                <p>{pl.Anastasia.text}</p>
            </div>
        </div>
    )
};
const item6 = () => {
    return (
        <div className={s.TeamItem}>
             <img className={s.TeamImg} src={Foto3} alt={pl.Lida.photo}/>
             <div className={s.InfoBloсk}>
                <h2 className={s.title}>{pl.Lida.name}</h2>
                <p className={s.text_accent}>{pl.Lida.position}</p>
                <p>{pl.Lida.text}</p>
            </div>
        </div>
    )
};

const ItemsRu =[
    item1,
    item2,
    item3
]

const ItemsPl =[
    item4,
    item5,
    item6
]

export {ItemsRu,ItemsPl};
