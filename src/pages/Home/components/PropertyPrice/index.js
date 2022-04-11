import { IoCash } from 'react-icons/io5'
import { PropertyPriceWrapper } from './styles'


export const PropertyPrice = ({ businessType }) => (
    <PropertyPriceWrapper>
        <IoCash />
        <p>$400.000.000</p>
    </PropertyPriceWrapper>
)