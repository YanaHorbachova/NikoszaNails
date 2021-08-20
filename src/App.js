import React, { Component }  from 'react';
import HomeRu from './HomeRu';
import HomePl from './HomePl';
import SwitchExample from './components/Switch/Switch';


class App extends Component {
  constructor( ) {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem('checked', JSON.stringify(this.state.checked));
  }

  componentDidMount() {
    const checked = localStorage.getItem('checked');
    const parsedcHecked = JSON.parse(checked);

    if (parsedcHecked) {
      this.setState({ checked: parsedcHecked });
    }
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return ( 
      <>
        <SwitchExample checked={this.state.checked} onChange={this.handleChange}/>
        {this.state.checked ? <HomePl/> : <HomeRu/>}
        
      </>
    );
  };
}
export default App;
