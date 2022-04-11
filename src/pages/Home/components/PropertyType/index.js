import { SubTitle } from "../../../../globalStyles";
import { PropertyBusinessType } from "../PropertyBusinessType";
import { PropertyPrice } from "../PropertyPrice";
import { PropertyTypeLabel } from "../PropertyTypeLabel";
import { PropertyCardWrapper, PropertyImageWrapper, PropertyInfoWrapper } from "./styles"


export const PropertyCard = () => (
    <PropertyCardWrapper>
        <PropertyImageWrapper>
            <img alt="apartamento" src="https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg?w=1366&q=60" />
        </PropertyImageWrapper> 
        <PropertyInfoWrapper>
            <h3>Apartamento en Laureles</h3>

           <SubTitle>
               Laureles, Medellín
           </SubTitle>

            <PropertyTypeLabel />
            <PropertyBusinessType />
            <PropertyPrice />
        </PropertyInfoWrapper>    
    </PropertyCardWrapper>

)