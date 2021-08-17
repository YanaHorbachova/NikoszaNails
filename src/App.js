import React, { Suspense, lazy }  from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';
import LanguageBar from './components/LanguageBar'
import Navigation from './components/Navigation/Navigation';
import Reviews from './components/Reviews';
import Price from './components/Price';


const HomeRu = lazy(() =>
  import('./views/HomeRu' /*webpackChunkName: "home-rus"*/),
);
const Team = lazy(() =>
  import('./views/Ru/Team' /*webpackChunkName: "home-pl"*/),
);
const Work = lazy(() =>
  import('./views/Ru/Work' /*webpackChunkName: "home-pl"*/),
);
const Salon = lazy(() =>
  import('./views/Ru/Salon' /*webpackChunkName: "home-pl"*/),
);
const Courses = lazy(() =>
  import('./views/Ru/Courses' /*webpackChunkName: "home-pl"*/),
);
const Contacts = lazy(() =>
  import('./views/Ru/Contacts' /*webpackChunkName: "home-pl"*/),
);
const App  = () => {

    return ( 
<>
  <Suspense fallback={<Loader />}> 
    <LanguageBar/>
    <Navigation/>
    <Switch>
          <Route exact path="/" component={HomeRu} />
          <Route exact path="/team" component={Team} /> 
          <Route exact path="/work" component = {Work} />
          <Route exact path="/salon" component={Salon} />  
          <Route exact path="/courses" component={Courses} />  
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/salon/reviews" component={Reviews} />
          <Route exact path="/salon/price" component={Price} />
          <Route component={HomeRu} />
    </Switch>
  </Suspense>
</>
);
};

export default App;
