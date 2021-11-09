import {LazyExoticComponent, lazy} from 'react'


type JSXComponent =()=>JSX.Element

interface Routes {
    path:string,
    component:LazyExoticComponent<()=> JSX.Element> | JSXComponent,
    name:string
    children?:Routes[]
}


const LazyLoadingPage1 = lazy( ()=> import(/* webpackChunkName:"LazyPage1" */'../01-lazyload/pages/LazyPage1'));
const LazyLoadingPage2 = lazy( ()=> import(/* webpackChunkName:"LazyPage2" */'../01-lazyload/pages/LazyPage2'));
const LazyLoadingPage3 = lazy( ()=> import(/* webpackChunkName:"LazyPage3" */'../01-lazyload/pages/LazyPage3'));

export const routes:Routes[] = [
  {
      path:'/lazy1',
      component:LazyLoadingPage1,
      name:'LazyPage-1'

  } ,
  {
    path:'/lazy2',
    component:LazyLoadingPage2,
    name:'LazyPage-2'

} ,
{
    path:'/lazy3',
    component:LazyLoadingPage3,
    name:'LazyPage-3'

} 
]