
import {Props as ProductCardProps} from '../components/ProductCard';
import {Props as PropsProductTitle} from '../components/ProductTitle';
import {Props as PropsProductImage} from '../components/ProductImage';
import {Props as PropsProductButtons} from '../components/ProductButtons'

export interface ProductContextProps {
    counter: number;
    sumProduct: (value: number) => void;
    id: string;
    title: string;
    img?: string;
}

export interface ProductCardHOCProps {
    ({ id, title, img, children }: ProductCardProps) : JSX.Element,
    Title:(Props:PropsProductTitle) => JSX.Element,
    Buttons: (Props:PropsProductButtons) => JSX.Element,
    Image: (Props:PropsProductImage) => JSX.Element
}

