import { getStaticImage } from "../../../../../utils/StaticImage";
import { SubTitle } from "../../../../globalStyles";
import { PropertyBusinessType } from "../PropertyBusinessType";
import { PropertyPrice } from "../PropertyPrice";
import { PropertyTypeLabel } from "../PropertyTypeLabel";
import { PropertyCardWrapper, PropertyImageWrapper, PropertyInfoWrapper } from "./styles"


export const PropertyCard = (props) => (
    <PropertyCardWrapper>
        <PropertyImageWrapper>
            <img alt="foto propiedad" src={getStaticImage(props.mainImage)}  />
        </PropertyImageWrapper> 
        <PropertyInfoWrapper>
            <h3>{props.title}</h3>

           <SubTitle>
             {props.zone}, {props.city}
           </SubTitle>

            <PropertyTypeLabel />
            <PropertyBusinessType />
            <PropertyPrice />
        </PropertyInfoWrapper>    
    </PropertyCardWrapper>

)