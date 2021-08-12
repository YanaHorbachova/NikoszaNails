import React from 'react';
import Navigation from './Navigation/Navigation';
import NavigationPl from './Navigation/NavigationPl';


const NavigationBar = () => {
  const Url = window.location.pathname

    return (     
        <>  
            {Url === '/' ? <Navigation /> : <NavigationPl/>}
        </> 
    );
  };
  
  export default NavigationBar;