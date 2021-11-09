import {LazyExoticComponent, lazy} from 'react'
import {NoLazy} from '../01-lazyload/pages/NoLazy';


type JSXComponent =()=>JSX.Element

interface Routes {
    path:string,
    component:LazyExoticComponent<()=> JSX.Element> | JSXComponent,
    name:string
    children?:Routes[]
}


//const LazyLoadingPage1 = lazy( ()=> import(/* webpackChunkName:"LazyPage1" */'../../01-lazyload/pages/LazyPage1'));
//const LazyLoadingPage2 = lazy( ()=> import(/* webpackChunkName:"LazyPage2" */'../../01-lazyload/pages/LazyPage2'));


export const routes:Routes[] = [
  {
      path:'/lazyload',
      component:lazy( ()=> import(/* webpackChunkName:"LazyLayout" */'../01-lazyload/layout/LazyLayout')),
      name:'LazyLoading Nested'

  } ,
  {
      path:'/no-lazy',
      component:lazy( ()=> import(/* webpackChunkName:"NoLazyLayout" */'../01-lazyload/pages/NoLazy')),
      name:'No Lazy loading'

  }
]