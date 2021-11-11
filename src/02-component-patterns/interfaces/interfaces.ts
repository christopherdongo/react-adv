import { ReactElement } from 'react';


 export interface PropsProductsCard{
    id: string;
    title: string;
    img?: string;
    children?:ReactElement | ReactElement[],
}


export interface ProductContextProps {
    counter: number;
    sumProduct: (value: number) => void;
    id: string;
    title: string;
    img?: string;
}

export interface ProductCardHOCProps {
    ({ id, title, img, children }: PropsProductsCard) : JSX.Element,
    Title:({title} :{title?:string}) => JSX.Element,
    Buttons: () => JSX.Element,
    Image: ({ img }: {img?: string | undefined;}) => JSX.Element
}

