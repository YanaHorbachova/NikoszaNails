import React, { Suspense, lazy }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Loader from './components/Loader';


const HomePageRus = lazy(() =>
  import('./views/HomePages-rus' /*webpackChunkName: "home-rus"*/),
);
const HomePagePl = lazy(() =>
  import('./views/HomePages-pl' /*webpackChunkName: "home-pl"*/),
);
const ArticlesRus = lazy(() =>
  import('./views/Articles-rus' /*webpackChunkName: "articles-rus"*/),
);
const ArticlesPl = lazy(() =>
  import('./views/Articles-pl' /*webpackChunkName: "articles-pl"*/),
);

const App = () => (
<>
<Suspense fallback={<Loader />}> 
  <Switch>
      <Route exact path={routes.home_rus} component={HomePageRus} />
      <Route exact path={routes.home_pl} component = {HomePagePl} />
      <Route exact path={routes.articles_rus} component={ArticlesRus} />
      <Route exact path={routes.articles_pl} component={ArticlesPl} />
      <Route component={HomePageRus} />
  </Switch>
</Suspense>
</>
);

export default App;
