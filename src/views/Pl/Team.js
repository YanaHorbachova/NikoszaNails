import React, { Component } from 'react';
import {ItemsPl} from '../../components/TeamList/TiamItems';
import TeamList from '../../components/TeamList/TeamList';


class Team  extends Component {

render () {
    return (
        <div >     
          <TeamList items={ItemsPl} />
        </div>
    );
};
}


export default Team;