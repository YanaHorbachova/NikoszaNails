import React, { Suspense, lazy }  from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';
import { routes } from './routes';
import NavigationPl from './components/Navigation/Pl/NavigationPl';
import ReviewsPl from './components/SalonItem/ReviewsList/ReviewsPl';
import PricePl from './components/SalonItem/PricePl';
import InteriorPl from './components/SalonItem/Interior/InteriorPl';
import StartUpPl from './components/CoursesItem/StartUpPl';
import UpGradePl from './components/CoursesItem/UpGradePl';
import Footer from './components/Footer'


const Home = lazy(() =>
  import('./views/Pl/Home' /*webpackChunkName: "home-rus"*/),
);
const Team = lazy(() =>
  import('./views/Pl/Team' /*webpackChunkName: "home-pl"*/),
);
const Work = lazy(() =>
  import('./views/Pl/Work' /*webpackChunkName: "work"*/),
);
const Salon = lazy(() =>
  import('./views/Pl/Salon' /*webpackChunkName: "salon"*/),
);
const Courses = lazy(() =>
  import('./views/Pl/Courses' /*webpackChunkName: "course"*/),
);
const Contacts = lazy(() =>
  import('./views/Pl/Contacts' /*webpackChunkName: "contacts"*/),
);

const HomeRu = () => {

    return ( 
<>
  <Suspense fallback={<Loader />}> 
    <NavigationPl/>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.team} component={Team} /> 
        <Route exact path={routes.work} component = {Work} />
        <Route exact path={routes.salon} component={Salon} />  
        <Route exact path={routes.courses} component={Courses} />  
        <Route exact path={routes.contacts} component={Contacts} />
        <Route exact path={routes.interior} component={InteriorPl} />
        <Route exact path={routes.reviews} component={ReviewsPl} />
        <Route exact path={routes.price} component={PricePl} />
        <Route exact path={routes.start_up} component={StartUpPl} />
        <Route exact path={routes.up_grade} component={UpGradePl} />
        <Route component={Home} />
      </Switch>
      <Footer/>
  </Suspense>
</>
);
};

export default HomeRu;
