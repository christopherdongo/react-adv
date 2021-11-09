
import { Suspense } from "react";
import { Link, useRouteMatch,Switch,Route, Redirect} from "react-router-dom";
import {routes} from './routes'
export const Navigation = () => {

  const {path:PATH,url:URL} = useRouteMatch();

  return (
    <Suspense
    fallback={<span>Loading....</span>} 
    >
      <h2>LazyLayout Pages</h2>
      <ul>
         {
           routes.map( ({url,name}) => (
          <li key={name}>
            <Link to={`${URL}${url}`}>{name}</Link>
          </li>
           ))
         }
      </ul>
      <Switch>
       {routes.map(({path,component:Component})=>(
         <Route exact path={`${PATH}${path}`} key={path} render={()=> <Component />} />
                   
       ))}
          <Redirect to={`${PATH}/lazy1`} />
      </Switch>
    </Suspense>
  );
};
