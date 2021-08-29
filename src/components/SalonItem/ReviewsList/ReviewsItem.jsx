import React from 'react';
import { ru, pl } from './items.json';
import photo from '../../../img/stars2.png'
import s from './Reviews.module.css'

const ItemsRu = ru.map(({ name, reviews, foto }) => (
        <div className={s.ReviewsInfo}>
          <img className={s.ReviewsPhoto} src={foto} alt='Фото Клиента'/>
          <img className={s.ReviewsImg} src={photo} alt='Оценка'/>
          <h3 className={s.ReviewsTitle}>{name}</h3>
          <p className={s.ReviewsText}>{reviews}</p>
        </div>
      ));

const ItemsPl = pl.map(({ name, reviews, foto }) => (
    <div className={s.ReviewsInfo}>
      <img className={s.ReviewsPhoto} src={foto} alt='Customer'/>
      <img className={s.ReviewsImg} src={photo} alt='Stopien'/>
      <h3 className={s.ReviewsTitle}>{name}</h3>
      <p className={s.ReviewsText}>{reviews}</p>
    </div>
));

export {ItemsRu, ItemsPl};