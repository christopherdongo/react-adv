import {LazyExoticComponent, lazy} from 'react'

type JSXComponent =()=>JSX.Element

interface Routes {
    path:string,
    component:LazyExoticComponent<()=> JSX.Element> | JSXComponent,
    name:string,
    children?:Routes[],
    url:string,
}


// eslint-disable-next-line react-hooks/rules-of-hooks


//const LazyLoadingPage1 = lazy( ()=> import(/* webpackChunkName:"LazyPage1" */'../../01-lazyload/pages/LazyPage1'));
//const LazyLoadingPage2 = lazy( ()=> import(/* webpackChunkName:"LazyPage2" */'../../01-lazyload/pages/LazyPage2'));


export const routes:Routes[] = [
  {
      path:'/lazy1',
      component:lazy( ()=> import(/* webpackChunkName:"LazyLayoutPage1" */'../pages/LazyPage1')),
      name:'LazyPage1',
      url:'/lazy1',

  } ,
  {
    path:'/lazy2',
    component:lazy( ()=> import(/* webpackChunkName:"LazyLayoutPage2" */'../pages/LazyPage2')),
    name:'LazyPage2',
    url:'/lazy2',

} ,
{
    path:'/lazy3',
    component:lazy( ()=> import(/* webpackChunkName:"LazyLayoutPage3" */'../pages/LazyPage3')),
    name:'LazyPage3',
    url:'/lazy3',

} ,

]