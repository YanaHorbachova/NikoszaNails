import React, { Suspense, lazy }  from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';
import { routes } from './routes';
import Navigation from './components/Navigation/Ru/Navigation';
import Reviews from './components/SalonItem/ReviewsList/Reviews';
import Price from './components/SalonItem/Price/Price';
import Interior from './components/SalonItem/Interior/Interior';
import StartUp from './components/CoursesItem/StartUp';
import UpGrade from './components/CoursesItem/UpGrade';
import Footer from './components/Footer';


const Home = lazy(() =>
  import('./views/Ru/Home' /*webpackChunkName: "home-rus"*/),
);
const Team = lazy(() =>
  import('./views/Ru/Team' /*webpackChunkName: "home-pl"*/),
);
const Work = lazy(() =>
  import('./views/Ru/Work' /*webpackChunkName: "work"*/),
);
const Salon = lazy(() =>
  import('./views/Ru/Salon' /*webpackChunkName: "salon"*/),
);
const Courses = lazy(() =>
  import('./views/Ru/Courses' /*webpackChunkName: "course"*/),
);
const Contacts = lazy(() =>
  import('./views/Ru/Contacts' /*webpackChunkName: "contacts"*/),
);

const HomeRu = () => {

    return ( 
<>
  <Suspense fallback={<Loader />}> 
    <Navigation/>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.team} component={Team} /> 
        <Route exact path={routes.work} component = {Work} />
        <Route exact path={routes.salon} component={Salon} />  
        <Route exact path={routes.courses} component={Courses} />  
        <Route exact path={routes.contacts} component={Contacts} />
        <Route exact path={routes.interior} component={Interior} />
        <Route exact path={routes.reviews} component={Reviews} />
        <Route exact path={routes.price} component={Price} />
        <Route exact path={routes.start_up} component={StartUp} />
        <Route exact path={routes.up_grade} component={UpGrade} />
        <Route component={Home} />
      </Switch>
      <Footer/>
  </Suspense>
</>
);
};

export default HomeRu;
