import React, { Component } from 'react';
import {ItemsRu} from '../../components/TeamList/TiamItems';
import TeamList from '../../components/TeamList/TeamList';


class Team  extends Component {
render () {
    return (
        <div >     
          <TeamList items={ItemsRu} />
        </div>
    );
};
}


export default Team;