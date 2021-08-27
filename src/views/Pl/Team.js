import React, { Component } from 'react';
import {ItemsPl} from '../../components/TeamList/TiamItems';
import TeamList from '../../components/TeamList/TeamList';
import s from '../../components/TeamList/TeamList.module.css'


class Team  extends Component {

render () {
    return (
        <div className={s.TeamList}>     
          <TeamList items={ItemsPl} />
        </div>
    );
};
}


export default Team;